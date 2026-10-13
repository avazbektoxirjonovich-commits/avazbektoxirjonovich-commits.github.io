/* =====================================================================
   Bosh sahifa: loyiha kartochkalari, ko'nikmalar, loyiha modali.
   ===================================================================== */
(function () {
  'use strict';

  var S = window.SITE;
  var Site = window.Site;
  var t = Site.t, esc = Site.esc, icon = Site.icon;

  function L() { return Site.lang; }
  function pick(s) { var p = String(s).split('|'); return L() === 'en' && p[1] ? p[1] : p[0]; }

  function img(name, cls, eager) {
    var m = S.IMG[name];
    var alt = m ? (L() === 'en' ? m[3] : m[2]) : '';
    return '<img src="assets/projects/' + name + '.webp"' +
      (m ? ' width="' + m[0] + '" height="' + m[1] + '"' : '') +
      ' alt="' + esc(alt) + '"' + (cls ? ' class="' + cls + '"' : '') +
      (eager ? '' : ' loading="lazy"') + ' decoding="async">';
  }

  // ------------------------------------------------------------------
  // Media maydoni
  // ------------------------------------------------------------------
  function media(p) {
    var m = p.media, en = L() === 'en';
    if (!m) return '';
    if (m.type === 'browser') {
      return '<div class="media"><div class="browser">' +
        '<div class="browser-bar" aria-hidden="true"><i></i><i></i><i></i><span>' + esc(m.url) + '</span></div>' +
        img(m.src) + '</div></div>';
    }
    if (m.type === 'phones') {
      return '<div class="media"><div class="phones">' +
        m.srcs.map(function (s) { return '<div class="phone">' + img(s) + '</div>'; }).join('') +
        '</div></div>';
    }
    if (m.type === 'timing') {
      return '<div class="media is-diagram"><div class="diagram" role="img" aria-label="' +
        esc(en ? 'Order for 19:00, kitchen starts at 18:25, ready at 19:00' : "19:00 ga buyurtma, oshxona 18:25 da boshlaydi, 19:00 da tayyor") + '">' +
        '<p class="diagram-caption">' + (en ? 'Pre-order timeline' : 'Oldindan buyurtma') + '</p>' +
        '<div class="timing">' +
          '<div class="timing-row"><time>17:40</time><div class="bar bar-order">' + (en ? 'Order placed for 19:00' : '19:00 ga buyurtma') + '</div></div>' +
          '<div class="timing-row"><time>18:25</time><div class="bar bar-cook">' + (en ? 'Kitchen starts cooking' : 'Oshxona boshlaydi') + '</div></div>' +
          '<div class="timing-row"><time>19:00</time><div class="bar bar-ready">' + (en ? 'Ready — no waiting' : "Tayyor — kutish yo'q") + '</div></div>' +
        '</div></div></div>';
    }
    if (m.type === 'pipe') {
      // Har bir qator: [yorliq, tugunlar]; '*' bilan boshlangan tugun — urg'uli
      var lanes = m.kind === 'vlt' ? [
        [en ? 'Perceive' : 'Ko\'rish', ['YOLO11', 'ByteTrack', 'InsightFace', 'RTMPose', 'Gaze']],
        [en ? 'Reason' : 'Tahlil', [en ? 'Behavior engine' : 'Xulq-atvor dvigateli', en ? 'Predictions' : 'Prognoz', '*' + (en ? 'Attention score' : 'Diqqat balli')]],
        [en ? 'Deliver' : 'Natija', ['WebSocket', 'React 19 dashboard']]
      ] : [
        [en ? 'Retrieve' : 'Qidiruv', ['BM25', 'FAISS', 'RRF']],
        [en ? 'Rank' : 'Saralash', ['Cross-encoder']],
        [en ? 'Generate' : 'Javob', ['Gemini · temperature 0', '*' + (en ? 'Cited answer' : 'Manbali javob')]]
      ];
      return '<div class="media is-diagram"><div class="diagram lanes">' +
        lanes.map(function (l) {
          return '<div class="lane"><span class="lane-label">' + esc(l[0]) + '</span><div class="pipe">' +
            l[1].map(function (n) {
              var accent = n.charAt(0) === '*';
              return '<span class="node' + (accent ? ' node-accent' : '') + '">' + esc(accent ? n.slice(1) : n) + '</span>';
            }).join('<span class="arrow" aria-hidden="true">→</span>') +
            '</div></div>';
        }).join('') +
        '</div></div>';
    }
    return '';
  }

  function badges(p) {
    return (p.live ? '<span class="badge badge-live">' + t('p.live') + '</span>' : '') +
      (p.private ? '<span class="badge badge-private">' + t('p.private') + '</span>' : '');
  }

  function actions(p, compact) {
    var d = p[L()], out = '';
    var links = p.links || {};
    if (links.site) out += '<a class="btn btn-primary btn-sm" href="' + links.site + '" target="_blank" rel="noopener">' + icon('ext') + t('p.site') + '</a>';
    if (links.bot) out += '<a class="btn btn-primary btn-sm" href="' + links.bot + '" target="_blank" rel="noopener">' + icon('telegram') + t('p.bot') + '</a>';
    if (links.code) out += '<a class="btn btn-glass btn-sm" href="' + links.code + '" target="_blank" rel="noopener">' + icon('github') + t('p.code') + '</a>';
    out += '<button type="button" class="btn btn-text btn-sm" data-open="' + p.id + '" aria-label="' +
      esc(d.title + ' — ' + t('p.detailsOf')) + '">' + t('p.details') + icon('arrow') + '</button>';
    return '<div class="project-actions">' + out + '</div>';
  }

  function chips(list, max) {
    return '<ul class="chips">' + list.slice(0, max || list.length).map(function (x) {
      return '<li class="chip">' + esc(pick(x)) + '</li>';
    }).join('') + '</ul>';
  }

  function results(p) {
    if (!p.results || !p.results.length) return '';
    return '<ul class="results" aria-label="' + esc(t('p.results')) + '">' + p.results.map(function (r) {
      return '<li><b>' + esc(r[0]) + '</b><span>' + esc(L() === 'en' ? r[2] : r[1]) + '</span></li>';
    }).join('') + '</ul>';
  }

  // ------------------------------------------------------------------
  // Kartochkalar
  // ------------------------------------------------------------------
  function featuredCard(p) {
    var d = p[L()];
    return '<article class="project glass-md span-' + p.span + ' reveal" id="p-' + p.id + '">' +
      media(p) +
      '<div class="project-body">' +
        '<div class="project-meta"><span class="category">' + esc(d.category) + '</span>' + badges(p) + '</div>' +
        '<h3>' + esc(d.title) + '</h3>' +
        '<p class="project-summary">' + esc(d.summary) + '</p>' +
        '<dl class="facts">' +
          '<div><dt>' + t('p.problem') + '</dt><dd>' + esc(d.problem) + '</dd></div>' +
          '<div class="built"><dt>' + t('p.built') + '</dt><dd>' + esc(d.solution) + '</dd></div>' +
        '</dl>' +
        results(p) +
        chips(p.tags) +
        actions(p) +
      '</div>' +
    '</article>';
  }

  function miniCard(p) {
    var d = p[L()];
    return '<article class="mini glass-md reveal" id="p-' + p.id + '">' +
      '<span class="mini-ico" aria-hidden="true">' + icon(p.ico) + '</span>' +
      '<div class="project-meta"><span class="category">' + esc(d.category) + '</span>' + badges(p) + '</div>' +
      '<h4>' + esc(d.title) + '</h4>' +
      '<p>' + esc(d.summary) + '</p>' +
      chips(p.tags, 3) +
      actions(p, true) +
    '</article>';
  }

  function renderProjects() {
    var featured = S.PROJECTS.filter(function (p) { return p.featured; });
    var more = S.PROJECTS.filter(function (p) { return !p.featured; });
    document.getElementById('featuredProjects').innerHTML = featured.map(featuredCard).join('');
    document.getElementById('moreProjects').innerHTML = more.map(miniCard).join('');
  }

  function renderSkills() {
    document.getElementById('skillsGrid').innerHTML = S.SKILLS.map(function (g) {
      return '<section class="skill glass reveal"><h4>' + esc(g[L()]) + '</h4>' + chips(g.items) + '</section>';
    }).join('');
  }

  // ------------------------------------------------------------------
  // Modal
  // ------------------------------------------------------------------
  var modal = document.getElementById('projectModal');
  var body = document.getElementById('modalBody');
  var currentId = null;
  var lastTrigger = null;

  function find(id) { return S.PROJECTS.filter(function (p) { return p.id === id; })[0]; }

  function fillModal(p) {
    var d = p[L()];
    var links = p.links || {}, lk = '';
    if (links.site) lk += '<a class="btn btn-primary" href="' + links.site + '" target="_blank" rel="noopener">' + icon('ext') + t('p.site') + '</a>';
    if (links.bot) lk += '<a class="btn btn-primary" href="' + links.bot + '" target="_blank" rel="noopener">' + icon('telegram') + t('p.bot') + '</a>';
    if (links.code) lk += '<a class="btn btn-glass" href="' + links.code + '" target="_blank" rel="noopener">' + icon('github') + t('p.code') + '</a>';

    var gallery = '';
    if (p.gallery && p.gallery.length) {
      gallery = '<h3 class="m-title">' + t('p.gallery') + '</h3>' +
        '<div class="m-gallery' + (p.phoneGallery ? ' phones-g' : '') + '">' +
        p.gallery.map(function (g) { return img(g); }).join('') + '</div>';
    }

    body.innerHTML =
      '<div class="project-meta"><span class="category">' + esc(d.category) + '</span>' + badges(p) + '</div>' +
      '<h2 id="modalTitle">' + esc(d.title) + '</h2>' +
      '<p class="project-summary">' + esc(d.summary) + '</p>' +
      '<div class="m-grid">' +
        '<div class="m-box"><h3>' + t('p.problem') + '</h3><p>' + esc(d.problem) + '</p></div>' +
        '<div class="m-box built"><h3>' + t('p.built') + '</h3><p>' + esc(d.solution) + '</p></div>' +
      '</div>' +
      (p.results ? '<h3 class="m-title">' + t('p.results') + '</h3>' + results(p) : '') +
      '<h3 class="m-title">' + t('p.features') + '</h3>' +
      '<ul class="m-features">' + d.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
      '<h3 class="m-title">Stack</h3>' + chips(p.tags) +
      gallery +
      (lk ? '<div class="m-links">' + lk + '</div>' : '') +
      (p.private ? '<p class="m-note">' + t('p.privateNote') + '</p>' : '');
  }

  function openProject(id, trigger) {
    var p = find(id);
    if (!p) return;
    currentId = id;
    lastTrigger = trigger || null;
    fillModal(p);
    if (!modal.open) {
      if (typeof modal.showModal === 'function') modal.showModal();
      else modal.setAttribute('open', '');
      document.documentElement.classList.add('modal-open');
    }
    modal.scrollTop = 0;
  }

  function closeModal() {
    if (typeof modal.close === 'function' && modal.open) modal.close();
    else { modal.removeAttribute('open'); onClosed(); }
  }
  function onClosed() {
    currentId = null;
    document.documentElement.classList.remove('modal-open');
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
    if (/^#p-/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search);
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-open]');
    if (trigger) { openProject(trigger.getAttribute('data-open'), trigger); return; }
    if (e.target.closest('[data-modal-close]')) { closeModal(); return; }
    if (e.target === modal) closeModal(); // fon bosilganda
  });
  modal.addEventListener('close', onClosed);

  // ------------------------------------------------------------------
  // Til o'zgarganda qayta chizish
  // ------------------------------------------------------------------
  Site.onLang(function () {
    renderProjects();
    renderSkills();
    Site.observe(document.getElementById('projects'));
    Site.observe(document.getElementById('experience'));
    if (currentId && modal.open) fillModal(find(currentId));
  });

  // #p-erp kabi havola bilan kelinsa — o'sha loyiha ochiladi
  document.addEventListener('DOMContentLoaded', function () {
    var m = /^#p-([\w-]+)$/.exec(location.hash);
    if (m && find(m[1])) openProject(m[1]);
  });
})();
