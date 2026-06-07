// ============================================================
// Willow's SF Tour — Page interaction logic
// Included in every neighborhood/mini-tour detail page.
// Depends on: config.js, db.js, supabase CDN
// PAGE_SLUG must be defined before this script runs.
// ============================================================

// ── NOTES ───────────────────────────────────────────────────
async function initNotes() {
  const ta = document.getElementById('personal-notes');
  if (!ta) return;
  ta.value = await loadNote(PAGE_SLUG);
}

async function saveNotes() {
  const val = document.getElementById('personal-notes').value;
  const ok = await saveNote(PAGE_SLUG, val);
  const msg = document.getElementById('notes-saved-msg');
  msg.textContent = ok ? 'Saved.' : 'Error saving.';
  msg.style.color = ok ? 'var(--accent-3)' : 'var(--accent)';
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 2500);
}

// ── JOURNAL ─────────────────────────────────────────────────
async function initJournal() {
  const entries = await loadJournal(PAGE_SLUG);
  renderJournal(entries);
}

function renderJournal(entries) {
  const c = document.getElementById('journal-entries');
  if (!entries.length) {
    c.innerHTML = '<p class="no-entries">No entries yet — write your first after visiting.</p>';
    return;
  }
  c.innerHTML = entries.map(e =>
    '<div class="journal-entry">' +
      '<div class="entry-header">' +
        '<span class="entry-date">' + e.entry_date + '</span>' +
        '<button class="entry-delete" onclick="handleDeleteEntry(\'' + e.id + '\')">Delete</button>' +
      '</div>' +
      '<div class="entry-text">' + e.text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>' +
    '</div>'
  ).join('');
}

async function addEntry() {
  const dateInput = document.getElementById('journal-date');
  const textInput = document.getElementById('journal-text');
  const text = textInput.value.trim();
  if (!text) return;
  const date = dateInput.value;
  const label = date
    ? new Date(date + 'T12:00:00').toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })
    : new Date().toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  const btn = document.querySelector('.journal-compose .btn');
  btn.textContent = 'Saving…'; btn.disabled = true;
  const ok = await addJournalEntry(PAGE_SLUG, label, text);
  btn.textContent = 'Add entry'; btn.disabled = false;
  if (!ok) { alert('Error saving entry.'); return; }
  textInput.value = '';
  dateInput.value = new Date().toISOString().split('T')[0];
  await initJournal();
}

async function handleDeleteEntry(id) {
  if (!confirm('Delete this journal entry?')) return;
  await deleteJournalEntry(id);
  await initJournal();
}

// ── PHOTOS ──────────────────────────────────────────────────
let _captions = {};

async function initPhotos() {
  const files = await listPhotos(PAGE_SLUG);
  _captions = await loadPhotoCaptions(PAGE_SLUG);
  await renderPhotos(files);
}

async function renderPhotos(files) {
  const grid = document.getElementById('photo-grid');
  if (!files.length) { grid.innerHTML = ''; return; }
  const items = await Promise.all(files.map(async f => {
    const url = await getPhotoUrl(PAGE_SLUG, f.name);
    return { name: f.name, url, caption: _captions[f.name] || '' };
  }));
  grid.innerHTML = items.map(p =>
    '<div class="photo-thumb">' +
      '<img src="' + p.url + '" alt="' + (p.caption || 'Photo') + '">' +
      '<button class="photo-remove" onclick="handleRemovePhoto(\'' + p.name + '\')" title="Remove">×</button>' +
      '<input class="photo-caption-input" type="text" placeholder="Add a caption…" value="' + p.caption.replace(/"/g,'&quot;') + '"' +
        ' onchange="handleCaption(\'' + p.name + '\', this.value)" onclick="event.stopPropagation()">' +
    '</div>'
  ).join('');
}

async function handleAddPhotos(files) {
  const grid = document.getElementById('photo-grid');
  const dropZone = document.getElementById('drop-zone');
  dropZone.querySelector('.drop-text').textContent = 'Uploading…';

  for (const file of Array.from(files)) {
    if (!file.type.startsWith('image/')) continue;
    await uploadPhoto(PAGE_SLUG, file);
  }

  dropZone.querySelector('.drop-text').textContent = 'Drop photos here, or click to browse';
  await initPhotos();
}

async function handleRemovePhoto(filename) {
  if (!confirm('Remove this photo?')) return;
  await deletePhoto(PAGE_SLUG, filename);
  await initPhotos();
}

async function handleCaption(filename, caption) {
  _captions[filename] = caption;
  await updatePhotoCaption(PAGE_SLUG, filename, caption);
}

// ── DRAG AND DROP ────────────────────────────────────────────
function initDropZone() {
  const dz = document.getElementById('drop-zone');
  if (!dz) return;
  dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-over'); });
  dz.addEventListener('dragleave', () => dz.classList.remove('drag-over'));
  dz.addEventListener('drop', e => {
    e.preventDefault(); dz.classList.remove('drag-over');
    handleAddPhotos(e.dataTransfer.files);
  });
  document.getElementById('photo-file-input')
    .addEventListener('change', e => handleAddPhotos(e.target.files));
}

// ── INIT ─────────────────────────────────────────────────────
async function initPage() {
  document.getElementById('journal-date').value = new Date().toISOString().split('T')[0];
  initDropZone();
  await Promise.all([initNotes(), initJournal(), initPhotos()]);
}

// Boot with auth gate
requireAuth(initPage);
