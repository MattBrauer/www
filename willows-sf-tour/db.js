// ============================================================
// Willow's SF Tour — Database Layer
// Wraps all Supabase calls for notes, journal, and photos.
// Depends on: config.js, supabase CDN client
// ============================================================

// ── CLIENT INIT ─────────────────────────────────────────────
let _sb = null;
function sb() {
  if (!_sb) {
    _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _sb;
}

// ── AUTH (simple password gate) ─────────────────────────────
const AUTH_KEY = 'sfTourAuthed';

function isAuthed() {
  return sessionStorage.getItem(AUTH_KEY) === 'yes';
}

function checkPassword(input) {
  if (input === APP_PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, 'yes');
    return true;
  }
  return false;
}

function requireAuth(onSuccess) {
  if (isAuthed()) { onSuccess(); return; }
  const overlay = document.getElementById('auth-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    document.getElementById('auth-submit').onclick = () => {
      const val = document.getElementById('auth-input').value;
      if (checkPassword(val)) {
        overlay.style.display = 'none';
        onSuccess();
      } else {
        document.getElementById('auth-error').style.display = 'block';
        document.getElementById('auth-input').value = '';
      }
    };
    document.getElementById('auth-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('auth-submit').click();
    });
  }
}

// ── NOTES ───────────────────────────────────────────────────
async function loadNote(slug) {
  const { data, error } = await sb()
    .from('notes')
    .select('text')
    .eq('slug', slug)
    .maybeSingle();
  if (error) { console.error('loadNote:', error); return ''; }
  return data?.text || '';
}

async function saveNote(slug, text) {
  const { error } = await sb()
    .from('notes')
    .upsert({ slug, text, updated_at: new Date().toISOString() }, { onConflict: 'slug' });
  if (error) { console.error('saveNote:', error); return false; }
  return true;
}

// ── JOURNAL ─────────────────────────────────────────────────
async function loadJournal(slug) {
  const { data, error } = await sb()
    .from('journal')
    .select('id, entry_date, text, created_at')
    .eq('slug', slug)
    .order('created_at', { ascending: false });
  if (error) { console.error('loadJournal:', error); return []; }
  return data || [];
}

async function addJournalEntry(slug, entry_date, text) {
  const { error } = await sb()
    .from('journal')
    .insert({ slug, entry_date, text });
  if (error) { console.error('addJournalEntry:', error); return false; }
  return true;
}

async function deleteJournalEntry(id) {
  const { error } = await sb()
    .from('journal')
    .delete()
    .eq('id', id);
  if (error) { console.error('deleteJournalEntry:', error); return false; }
  return true;
}

// ── PHOTOS ──────────────────────────────────────────────────
function photoPath(slug, filename) {
  return slug + '/' + filename;
}

async function uploadPhoto(slug, file) {
  const ext = file.name.split('.').pop();
  const filename = Date.now() + '_' + Math.random().toString(36).slice(2) + '.' + ext;
  const path = photoPath(slug, filename);
  const { error } = await sb().storage.from('photos').upload(path, file, {
    cacheControl: '3600',
    upsert: false
  });
  if (error) { console.error('uploadPhoto:', error); return null; }
  return filename;
}

async function getPhotoUrl(slug, filename) {
  const { data } = await sb().storage.from('photos')
    .createSignedUrl(photoPath(slug, filename), 60 * 60 * 24 * 365); // 1 year
  return data?.signedUrl || null;
}

async function listPhotos(slug) {
  const { data, error } = await sb().storage.from('photos').list(slug, {
    sortBy: { column: 'created_at', order: 'asc' }
  });
  if (error) { console.error('listPhotos:', error); return []; }
  return data || [];
}

async function deletePhoto(slug, filename) {
  const { error } = await sb().storage.from('photos').remove([photoPath(slug, filename)]);
  if (error) { console.error('deletePhoto:', error); return false; }
  return true;
}

async function updatePhotoCaption(slug, filename, caption) {
  // Store captions as a JSON note alongside photos using a special slug key
  const capKey = slug + '__captions';
  const existing = await loadNote(capKey);
  let captions = {};
  try { captions = JSON.parse(existing || '{}'); } catch {}
  captions[filename] = caption;
  await saveNote(capKey, JSON.stringify(captions));
}

async function loadPhotoCaptions(slug) {
  const capKey = slug + '__captions';
  const raw = await loadNote(capKey);
  try { return JSON.parse(raw || '{}'); } catch { return {}; }
}
