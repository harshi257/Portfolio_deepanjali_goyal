
// Projects → CD crate
// Each project is an album.
// Click project → open tracklist → click track → open project detail.

const projectColors = ['#D8A93B', '#C1502E', '#7C8B54', '#5C7A99', '#B4553D', '#3E7C6B'];
const projectsTrack = document.getElementById('projects-track');

projects.forEach((p, i) => {
    const color = projectColors[i % projectColors.length];

    const el = document.createElement('div');
    el.className = 'album-card';

    el.innerHTML = `
        <div class="cd-disc">
            <div class="cd-label" style="background:${color};">${p.code}</div>
            <div class="cd-hole"></div>
        </div>
        <div class="album-title">${p.title}</div>
        <div class="album-sub">tap to open the file</div>
    `;

    // First click → open project tracklist
    el.addEventListener('click', () => openProject(i));

    projectsTrack.appendChild(el);
});

document.getElementById('projectsScrollLeft').addEventListener('click', () => {
    projectsTrack.scrollBy({
        left: -320,
        behavior: 'smooth'
    });
});

document.getElementById('projectsScrollRight').addEventListener('click', () => {
    projectsTrack.scrollBy({
        left: 320,
        behavior: 'smooth'
    });
});


// Open a project's nested list
function openProject(pi) {
    const p = projects[pi];

    const rows = p.tracks.map((t, ti) => `
        <button class="track-row" data-project="${pi}" data-track="${ti}">
            <span class="track-num mono">${String(ti + 1).padStart(2, '0')}</span>
            <span class="track-title">${t.title}</span>
            <span class="track-blurb">${t.blurb}</span>
        </button>
    `).join('');

    openModal({
        eyebrow: `${p.code} // PROJECT FILE`,
        title: p.title,
        html: `<div class="tracklist">${rows}</div>`,
        meta: [
            `${p.tracks.length} ENTRIES`,
            'CRATE — PROJECTS'
        ]
    });
}


// Open an individual project entry
function openProjectTrack(pi, ti) {
    const p = projects[pi];
    const t = p.tracks[ti];

    const html = `
        <p class="modal-body" style="white-space:pre-line; margin:0 0 4px;">
            ${t.detail}
        </p>

        <button class="back-btn" data-project-back="${pi}">
            ← Back to ${p.title}
        </button>
    `;

    openModal({
        eyebrow: `${p.title.toUpperCase()} // ${String(ti + 1).padStart(2, '0')}`,
        title: t.title,
        html: html,
        meta: []
    });
}


// Poems → crossword
const crossword = document.getElementById('crossword');
poems.forEach(p => {
    const el = document.createElement('button');
    el.className = 'xw-word';
    el.style.gridColumn = `${p.col} / span ${p.span}`;
    el.style.gridRow = `${p.row}`;
    el.textContent = p.title;
    el.addEventListener('click', () => openModal({ eyebrow: 'FROM THE NOTEBOOK', title: p.title, body: p.body, meta: [] }));
    crossword.appendChild(el);
});

const moreList = document.getElementById('more-list');
moreEntries.forEach(p => {
    const el = document.createElement('button');
    el.className = 'more-item';
    el.textContent = p.title;
    el.addEventListener('click', () => openModal({ eyebrow: 'FROM THE NOTEBOOK', title: p.title, body: p.body, meta: [] }));
    moreList.appendChild(el);
});

// Articles
const articlesList = document.getElementById('articles-list');
articles.forEach(a => {
    const el = document.createElement('a');
    el.className = 'article-card';
    el.href = a.link; el.target = '_blank'; el.rel = 'noopener';
    el.innerHTML = `<div><h3>${a.title}</h3><p>${a.source} · ${a.date}</p></div><span class="mono">READ ↗</span>`;
    articlesList.appendChild(el);
});

// Posts
const postsList = document.getElementById('posts-list');
posts.forEach((p, i) => {
    const el = document.createElement('a');
    el.className = 'index-row';
    el.href = p.link; el.target = '_blank'; el.rel = 'noopener';
    el.innerHTML = `<span class="index-num mono">${String(i + 1).padStart(2, '0')}</span><span class="index-title">${p.title}</span><span class="index-arrow">↗</span>`;
    postsList.appendChild(el);
});

// Writing tabs
document.querySelectorAll('.writing-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.writing-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.writing-pane').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`pane-${tab.dataset.pane}`).classList.add('active');
    });
});

// Skills → semicircle, each tile sweeps out from the centre pivot like a clock hand (dial itself never rotates)
const wheel = document.getElementById('skillsWheel');
const tones = ['stone', 'walnut', 'black', 'olive', 'forest'];
const toneBg = { stone: 'var(--stone)', walnut: 'var(--walnut)', black: 'var(--black)', olive: 'var(--olive-dp)', forest: 'var(--forest-dp)' };
let skillTargets = [];
function layoutSkillsWheel() {
    wheel.innerHTML = '';
    skillTargets = [];

    const w = wheel.clientWidth;
    const h = wheel.clientHeight;

    const cx = w / 2;
    const cy = h - 20;

    // Larger radius = more space between skills
    const radius = Math.min(w / 2 - 20, h - 40);

    const n = skills.length;

    skills.forEach((s, i) => {

        const angle = Math.PI - (i / (n - 1)) * Math.PI;

        const x = cx + radius * Math.cos(angle);
        const y = cy - radius * Math.sin(angle);

        const tone = tones[i % tones.length];
        const bg = toneBg[tone];
        const fg = tone === 'stone'
            ? 'var(--stone-ink)'
            : 'var(--paper-text)';

        const label = s.replace(/[\[\]]/g, '');

        const node = document.createElement('div');
        node.className = 'skill-node';

        // START at the bottom-center pivot
        node.style.left = `${cx}px`;
        node.style.top = `${cy}px`;
        node.style.opacity = '0';

        node.innerHTML = `
        <div class="skill-tile"
             style="background:${bg}; color:${fg};">
            ${label.slice(0, 2).toUpperCase()}
        </div>

        <div class="skill-label">
            ${label}
        </div>
    `;

        wheel.appendChild(node);

        skillTargets.push({
            node,
            x,
            y,
            delay: i * 90
        });
    });

    wheel.dataset.spun = '';
}
layoutSkillsWheel();
window.addEventListener('resize', layoutSkillsWheel);

function sweepSkillsWheel() {
    skillTargets.forEach(({ node, x, y, delay }) => {
        setTimeout(() => {
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            node.style.opacity = '1';
        }, delay);
    });
}

const wheelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !wheel.dataset.spun) {
            sweepSkillsWheel();
            wheel.dataset.spun = 'true';
        }
    });
}, { threshold: .4 });
wheelObserver.observe(wheel);

// Explored → filmstrip reel
// Each explored category opens ONE description.
// No nested tracklist here.

const exploredReel = document.getElementById('explored-reel');

explored.forEach((a, ai) => {
    const el = document.createElement('button');
    el.className = 'frame';

    el.innerHTML = `
        <div class="frame-thumb" style="background:${a.color};"></div>
        <div class="frame-code mono">GEN_${String(ai + 1).padStart(2, '0')}</div>
        <div class="frame-title">${a.genre}</div>
        <div class="frame-note">view file →</div>
    `;

    el.addEventListener('click', () => {
        openModal({
            eyebrow: `GEN_${String(ai + 1).padStart(2, '0')} // EXPLORED`,
            title: a.genre,
            body: a.description,
            meta: ['CRATE — EXPLORED']
        });
    });

    exploredReel.appendChild(el);
});



/* ============================================================
   MODAL — supports plain text (body) or interactive markup (html)
   ============================================================ */
const overlay = document.getElementById('modalOverlay');
const modalEyebrow = document.getElementById('modalEyebrow');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalMeta = document.getElementById('modalMeta');

function openModal({ eyebrow, title, body, html, meta }) {
    modalEyebrow.textContent = eyebrow || '';
    modalTitle.textContent = title || '';
    if (html !== undefined) { modalBody.innerHTML = html; }
    else { modalBody.textContent = body || ''; }
    modalMeta.innerHTML = (meta || []).map(m => `<span>${m}</span>`).join('');
    overlay.classList.add('open');
    overlay.scrollTop = 0;
    document.getElementById('modalClose').focus();
}
function closeModal() { overlay.classList.remove('open'); }
document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });


// Delegated clicks inside the modal for project tracklist rows and back buttons
modalBody.addEventListener('click', (e) => {

    const row = e.target.closest('.track-row');

    if (row) {
        openProjectTrack(
            Number(row.dataset.project),
            Number(row.dataset.track)
        );
        return;
    }

    const back = e.target.closest('.back-btn');

    if (back) {
        openProject(Number(back.dataset.projectBack));
        return;
    }
});

/* ============================================================
   NAV
   ============================================================ */
const mininav = document.getElementById('mininav');
const heroEl = document.getElementById('top');
const navLinks = mininav.querySelectorAll('a');
const sections = ['about', 'projects', 'writing', 'skills', 'explored'].map(id => document.getElementById(id));

const heroObserver = new IntersectionObserver(([entry]) => {
    mininav.classList.toggle('show', !entry.isIntersecting);
}, { threshold: 0 });
heroObserver.observe(heroEl);

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(a => a.classList.toggle('active', a.dataset.nav === entry.target.id));
        }
    });
}, { rootMargin: '-45% 0px -45% 0px' });
sections.forEach(s => s && sectionObserver.observe(s));