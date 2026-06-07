const fs = require('fs');
const path = require('path');

// Write module wrappers then require
const rawData = fs.readFileSync('./data.js', 'utf8');

// Extract NEIGHBORHOODS array
const nbMatch = rawData.match(/const NEIGHBORHOODS = (\[[\s\S]*?\n\];)/);
const mtMatch = rawData.match(/const MINI_TOURS = (\[[\s\S]*?\n\];)/);

fs.writeFileSync('./data_nb.js', 'module.exports = ' + nbMatch[1]);
fs.writeFileSync('./data_mt.js', 'module.exports = ' + mtMatch[1]);

const NEIGHBORHOODS = require('./data_nb.js');
const MINI_TOURS = require('./data_mt.js');

console.log(`Loaded ${NEIGHBORHOODS.length} neighborhoods, ${MINI_TOURS.length} mini-tours`);

const zoneLabels = { north:"North / Waterfront", central:"Central", east:"East / Downtown", west:"West / Avenues", south:"South / Mission" };
const vibeLabels = { daytime:"Daytime", evening:"Evening", either:"Day or evening" };
const vibeBadge = { daytime:"badge-day", evening:"badge-evening", either:"badge-either" };

// ── FULL NEIGHBORHOOD PAGE ──────────────────────────────────────────
function neighborhoodPage(n, all) {
  const idx = all.findIndex(x => x.slug === n.slug);
  const prev = all[idx - 1];
  const next = all[idx + 1];
  const prevLink = prev ? `<a href="${prev.slug}.html" class="nav-arrow">← ${prev.name}</a>` : `<span></span>`;
  const nextLink = next ? `<a href="${next.slug}.html" class="nav-arrow">${next.name} →</a>` : `<span></span>`;

  const itineraryRows = n.itinerary.map((s, i) => `
    <div class="itinerary-row">
      <div class="itin-time">${s.time}</div>
      <div class="itin-dot"><div class="dot"></div>${i < n.itinerary.length - 1 ? '<div class="line"></div>' : ''}</div>
      <div class="itin-content">
        <div class="itin-stop">${s.stop}</div>
        <div class="itin-note">${s.note}</div>
      </div>
    </div>`).join('');

  const spotsHtml = n.spots.map(s => `
    <div class="spot-card">
      <div class="spot-header"><span class="spot-name">${s.name}</span><span class="spot-type">${s.type}</span></div>
      <div class="spot-note">${s.note}</div>
    </div>`).join('');

  return fullPage(n, zoneLabels[n.zone], vibeBadge[n.vibe], vibeLabels[n.vibe], `
  <section class="section">
    <h2 class="section-title"><span class="section-title-num">01</span> Oak's introduction</h2>
    <p class="intro-text">${n.intro}</p>
  </section>
  <section class="section">
    <h2 class="section-title"><span class="section-title-num">02</span> History &amp; character</h2>
    <p class="history-text">${n.history}</p>
  </section>
  <section class="section">
    <h2 class="section-title"><span class="section-title-num">03</span> Proposed itinerary</h2>
    <div>${itineraryRows}</div>
  </section>
  <section class="section">
    <h2 class="section-title"><span class="section-title-num">04</span> Recommended spots</h2>
    <div class="spots-grid">${spotsHtml}</div>
  </section>
  ${journalAndPhotos(5, n.slug)}
  `, prevLink, nextLink, '../index.html', false);
}

// ── MINI-TOUR PAGE ──────────────────────────────────────────────────
function miniTourPage(n, all) {
  const idx = all.findIndex(x => x.slug === n.slug);
  const prev = all[idx - 1];
  const next = all[idx + 1];
  const prevLink = prev ? `<a href="${prev.slug}.html" class="nav-arrow">← ${prev.name}</a>` : `<span></span>`;
  const nextLink = next ? `<a href="${next.slug}.html" class="nav-arrow">${next.name} →</a>` : `<span></span>`;

  const spotsHtml = n.spots.map(s => `
    <div class="spot-card">
      <div class="spot-header"><span class="spot-name">${s.name}</span><span class="spot-type">${s.type}</span></div>
      <div class="spot-note">${s.note}</div>
    </div>`).join('');

  return fullPage(n, zoneLabels[n.zone], 'badge-mini', 'Mini-tour', `
  <section class="section">
    <h2 class="section-title"><span class="section-title-num">01</span> Oak's introduction</h2>
    <p class="intro-text">${n.intro}</p>
  </section>
  <section class="section">
    <h2 class="section-title"><span class="section-title-num">02</span> Highlights &amp; spots</h2>
    <div class="spots-grid">${spotsHtml}</div>
  </section>
  <section class="section">
    <h2 class="section-title"><span class="section-title-num">03</span> Pairs well with</h2>
    <p class="history-text" style="font-style:italic;color:var(--ink-3)">${n.pairs}</p>
  </section>
  ${journalAndPhotos(4, n.slug)}
  `, prevLink, nextLink, '../index.html', true);
}

function journalAndPhotos(startNum, slug) {
  return `
  <section class="section">
    <h2 class="section-title"><span class="section-title-num">0${startNum}</span> Willow's notes</h2>
    <p style="font-size:13px;color:var(--ink-3);margin-bottom:12px;font-weight:300">Your thoughts, reactions, things to remember — saved in your browser.</p>
    <textarea class="notes-area" id="personal-notes" placeholder="Add your notes about this neighborhood…"></textarea>
    <div class="notes-save">
      <button class="btn btn-primary" onclick="saveNotes()">Save note</button>
      <span class="notes-saved-msg" id="notes-saved-msg">Saved.</span>
    </div>
  </section>
  <section class="section">
    <h2 class="section-title"><span class="section-title-num">0${startNum+1}</span> Journal</h2>
    <p style="font-size:13px;color:var(--ink-3);margin-bottom:14px;font-weight:300">Dated entries — write one after each visit.</p>
    <div class="journal-compose">
      <div class="journal-date-row"><span class="journal-date-label">Date</span><input type="date" class="journal-date-input" id="journal-date"></div>
      <textarea class="journal-textarea" id="journal-text" placeholder="What was the visit like? What stood out?"></textarea>
      <button class="btn btn-primary" onclick="addEntry()">Add entry</button>
    </div>
    <div class="journal-entries" id="journal-entries"></div>
  </section>
  <section class="section">
    <h2 class="section-title"><span class="section-title-num">0${startNum+2}</span> Photos</h2>
    <p style="font-size:13px;color:var(--ink-3);margin-bottom:14px;font-weight:300">Drag and drop photos from your visits.</p>
    <div class="photo-drop-zone" id="drop-zone" onclick="document.getElementById('photo-file-input').click()">
      <div class="drop-icon">⬆</div>
      <p class="drop-text">Drop photos here, or click to browse</p>
      <p class="drop-subtext">JPG, PNG, HEIC — any size</p>
    </div>
    <input type="file" id="photo-file-input" multiple accept="image/*">
    <div class="photo-grid" id="photo-grid"></div>
  </section>`;
}

function fullPage(n, zoneLabel, vibeBadgeClass, vibeLabel, bodyHtml, prevLink, nextLink, backHref, isMini) {
  const miniPill = isMini ? '<span class="badge badge-mini">Mini-tour</span>' : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${n.name} — Willow's SF Tour</title>
<link rel="stylesheet" href="../shared.css">
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="../config.js"></script>
<script src="../db.js"></script>
<style>
  .page-wrap { max-width: 780px; margin: 0 auto; padding: 2.5rem 1.5rem 0; }
  .page-header { margin-bottom: 2.5rem; }
  .page-header-top { display:flex; align-items:flex-start; justify-content:space-between; gap:1rem; flex-wrap:wrap; margin-bottom:0.75rem; }
  .page-badges { display:flex; gap:6px; flex-wrap:wrap; }
  .back-link { font-size:12px; color:var(--ink-3); text-decoration:none; transition:color 0.15s; }
  .back-link:hover { color:var(--ink); }
  .page-title { font-family:var(--serif); font-size:clamp(1.8rem,4vw,2.8rem); font-weight:400; line-height:1.15; margin-bottom:0.4rem; }
  .page-tagline { font-size:15px; color:var(--ink-3); font-style:italic; font-weight:300; }
  .section { margin-bottom:3rem; }
  .section-title { font-family:var(--serif); font-size:1.1rem; font-weight:400; color:var(--ink); margin-bottom:1rem; padding-bottom:0.6rem; border-bottom:1px solid var(--paper-3); display:flex; align-items:center; gap:8px; }
  .section-title-num { font-size:11px; font-family:var(--serif); font-style:italic; color:var(--ink-4); }
  .intro-text { font-size:15px; color:var(--ink-2); line-height:1.75; font-weight:300; font-style:italic; padding-left:1.2rem; border-left:2px solid var(--accent-2); }
  .history-text { font-size:14px; color:var(--ink-2); line-height:1.7; font-weight:300; }
  .itinerary-row { display:grid; grid-template-columns:80px 28px 1fr; gap:0 12px; min-height:60px; }
  .itin-time { font-size:12px; color:var(--ink-3); padding-top:2px; text-align:right; font-weight:300; white-space:nowrap; }
  .itin-dot { display:flex; flex-direction:column; align-items:center; padding-top:4px; }
  .dot { width:8px; height:8px; border-radius:50%; background:var(--accent); flex-shrink:0; }
  .line { width:1px; flex:1; background:var(--paper-3); margin-top:4px; min-height:36px; }
  .itin-content { padding-bottom:20px; }
  .itin-stop { font-size:14px; font-weight:500; color:var(--ink); margin-bottom:3px; }
  .itin-note { font-size:13px; color:var(--ink-3); line-height:1.55; font-weight:300; }
  .spots-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:10px; }
  .spot-card { background:var(--paper-2); border:1px solid var(--paper-3); border-radius:6px; padding:12px 14px; }
  .spot-header { display:flex; align-items:baseline; justify-content:space-between; gap:8px; margin-bottom:5px; }
  .spot-name { font-size:14px; font-weight:500; color:var(--ink); }
  .spot-type { font-size:10px; letter-spacing:0.08em; text-transform:uppercase; color:var(--ink-3); }
  .spot-note { font-size:13px; color:var(--ink-2); line-height:1.5; font-weight:300; }
  .badge-mini { background:#f0e8f5; color:#5a2d7a; border:1px solid #d4b8e8; }
  .notes-area { width:100%; min-height:140px; border:1px solid var(--paper-3); border-radius:6px; background:var(--paper); font-family:var(--sans); font-size:14px; color:var(--ink-2); line-height:1.65; padding:14px; resize:vertical; font-weight:300; }
  .notes-area:focus { outline:none; border-color:var(--accent-2); }
  .notes-area::placeholder { color:var(--ink-4); font-style:italic; }
  .notes-save { margin-top:8px; display:flex; align-items:center; }
  .notes-saved-msg { font-size:12px; color:var(--accent-3); margin-left:10px; opacity:0; transition:opacity 0.3s; }
  .notes-saved-msg.show { opacity:1; }
  .journal-compose { background:var(--paper-2); border:1px solid var(--paper-3); border-radius:6px; padding:14px; margin-bottom:1rem; }
  .journal-date-row { display:flex; align-items:center; gap:10px; margin-bottom:10px; }
  .journal-date-label { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--ink-3); }
  .journal-date-input { font-family:var(--sans); font-size:13px; border:1px solid var(--paper-3); background:var(--paper); color:var(--ink); padding:4px 8px; border-radius:4px; }
  .journal-date-input:focus { outline:none; border-color:var(--accent-2); }
  .journal-textarea { width:100%; min-height:100px; border:1px solid var(--paper-3); border-radius:4px; background:var(--paper); font-family:var(--sans); font-size:14px; color:var(--ink-2); line-height:1.65; padding:10px 12px; resize:vertical; font-weight:300; margin-bottom:8px; }
  .journal-textarea:focus { outline:none; border-color:var(--accent-2); }
  .journal-textarea::placeholder { color:var(--ink-4); font-style:italic; }
  .journal-entries { display:flex; flex-direction:column; gap:12px; }
  .journal-entry { background:var(--paper); border:1px solid var(--paper-3); border-radius:6px; padding:14px 16px; }
  .entry-header { display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px; }
  .entry-date { font-size:12px; font-weight:500; color:var(--accent); letter-spacing:0.04em; }
  .entry-delete { font-size:11px; color:var(--ink-4); background:none; border:none; cursor:pointer; padding:0; }
  .entry-delete:hover { color:var(--accent); }
  .entry-text { font-size:14px; color:var(--ink-2); line-height:1.65; white-space:pre-wrap; font-weight:300; }
  .no-entries { font-size:14px; color:var(--ink-4); font-style:italic; }
  .photo-drop-zone { border:2px dashed var(--paper-4); border-radius:8px; padding:2.5rem 1.5rem; text-align:center; cursor:pointer; transition:all 0.2s; background:var(--paper-2); margin-bottom:1rem; }
  .photo-drop-zone:hover,.photo-drop-zone.drag-over { border-color:var(--accent-2); background:var(--accent-2-light); }
  .drop-icon { font-size:28px; margin-bottom:0.5rem; }
  .drop-text { font-size:14px; color:var(--ink-3); margin-bottom:4px; }
  .drop-subtext { font-size:12px; color:var(--ink-4); }
  #photo-file-input { display:none; }
  .photo-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:8px; }
  .photo-thumb { position:relative; aspect-ratio:4/3; overflow:hidden; border-radius:5px; background:var(--paper-2); }
  .photo-thumb img { width:100%; height:100%; object-fit:cover; display:block; }
  .photo-thumb .photo-remove { position:absolute; top:5px; right:5px; width:22px; height:22px; border-radius:50%; background:rgba(26,23,20,0.7); color:white; border:none; cursor:pointer; font-size:14px; line-height:1; display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity 0.15s; }
  .photo-thumb:hover .photo-remove { opacity:1; }
  .photo-caption-input { position:absolute; bottom:0; left:0; right:0; background:rgba(26,23,20,0.55); border:none; color:white; font-family:var(--sans); font-size:11px; padding:5px 8px; }
  .photo-caption-input::placeholder { color:rgba(255,255,255,0.5); }
  .photo-caption-input:focus { outline:none; background:rgba(26,23,20,0.75); }
  .neighbor-nav { display:flex; justify-content:space-between; align-items:center; padding:1.5rem; border-top:1px solid var(--paper-3); margin-top:1rem; max-width:780px; margin-left:auto; margin-right:auto; }
  .nav-arrow { font-size:13px; color:var(--ink-3); text-decoration:none; transition:color 0.15s; max-width:220px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .nav-arrow:hover { color:var(--ink); }
  @media (max-width:600px) {
    .page-wrap { padding:1.5rem 1rem 0; }
    .itinerary-row { grid-template-columns:66px 24px 1fr; }
    .spots-grid { grid-template-columns:1fr; }
    .photo-grid { grid-template-columns:repeat(auto-fill,minmax(140px,1fr)); }
  }
</style>
</head>
<body>
<nav class="site-nav">
  <a href="${backHref}" class="nav-home">Willow's SF Tour</a>
  <a href="${backHref}" style="font-size:11px;letter-spacing:0.06em;text-transform:uppercase;">← All neighborhoods</a>
</nav>
<div class="page-wrap">
  <div class="page-header">
    <div class="page-header-top">
      <div class="page-badges">
        <span class="badge badge-zone">${zoneLabel}</span>
        ${isMini ? '<span class="badge badge-mini">Mini-tour</span>' : `<span class="badge ${vibeBadgeClass}">${vibeLabel}</span>`}
      </div>
      <a href="${backHref}" class="back-link">← Back to all</a>
    </div>
    <h1 class="page-title">${n.name}</h1>
    <p class="page-tagline">${n.tagline}</p>
  </div>
  ${bodyHtml}
</div>
<div class="neighbor-nav">
  ${prevLink}
  <a href="${backHref}" class="btn">All neighborhoods</a>
  ${nextLink}
</div>
<footer class="site-footer">
  <p><strong>Willow's Tour of San Francisco</strong> &nbsp;·&nbsp; A personal guide from Oak</p>
</footer>
<!-- Auth overlay -->
<div id="auth-overlay" style="display:none;position:fixed;inset:0;background:rgba(26,23,20,0.7);z-index:1000;align-items:center;justify-content:center">
  <div style="background:var(--paper);border-radius:10px;padding:2rem;max-width:340px;width:90%;text-align:center">
    <p style="font-family:var(--serif);font-size:1.2rem;margin-bottom:0.4rem">Willow's SF Tour</p>
    <p style="font-size:13px;color:var(--ink-3);margin-bottom:1.2rem;font-weight:300">Enter the password to access your notes and photos</p>
    <input id="auth-input" type="password" placeholder="Password"
      style="width:100%;padding:10px 12px;border:1px solid var(--paper-3);border-radius:6px;font-family:var(--sans);font-size:14px;margin-bottom:8px;box-sizing:border-box">
    <p id="auth-error" style="display:none;color:var(--accent);font-size:12px;margin-bottom:8px">Incorrect password — try again.</p>
    <button id="auth-submit" class="btn btn-primary" style="width:100%;justify-content:center">Unlock</button>
  </div>
</div>
<script>
const PAGE_SLUG = '${n.slug}';
</script>
<script src="../page-scripts.js"></script>
</body>
</html>`;
}

// ── GENERATE ────────────────────────────────────────────────────────
const nbDir = path.join(__dirname, 'neighborhoods');
const mtDir = path.join(__dirname, 'mini-tours');
if (!fs.existsSync(nbDir)) fs.mkdirSync(nbDir);
if (!fs.existsSync(mtDir)) fs.mkdirSync(mtDir);

NEIGHBORHOODS.forEach(n => {
  fs.writeFileSync(path.join(nbDir, n.slug + '.html'), neighborhoodPage(n, NEIGHBORHOODS));
  console.log('  ✓ neighborhoods/' + n.slug + '.html');
});

MINI_TOURS.forEach(n => {
  fs.writeFileSync(path.join(mtDir, n.slug + '.html'), miniTourPage(n, MINI_TOURS));
  console.log('  ✓ mini-tours/' + n.slug + '.html');
});

console.log('\nDone. ' + NEIGHBORHOODS.length + ' neighborhood pages, ' + MINI_TOURS.length + ' mini-tour pages.');
fs.unlinkSync('./data_nb.js');
fs.unlinkSync('./data_mt.js');
