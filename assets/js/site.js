/* =====================================================================
   Umumiy xatti-harakat: til, mavzu, mobil menyu, scrollspy, paydo bo'lish.
   Bosh sahifa ham, /resume/ ham ishlatadi.
   ===================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var STR = window.SITE.STRINGS;

  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function save(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* maxfiy rejim */ } }

  var lang = load('lang') === 'en' ? 'en' : 'uz';
  var listeners = [];

  function t(key) {
    var v = STR[lang] && STR[lang][key];
    if (v == null) v = STR.uz[key];
    return v == null ? key : v;
  }

  // ------------------------------------------------------------------
  // Ikonkalar (dinamik kartochkalar uchun)
  // ------------------------------------------------------------------
  var ICONS = {
    arrow: '<path d="M7 17 17 7M8 7h9v9"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    telegram: '<path d="M21.2 4.4 2.9 11.5c-.9.4-.9 1.6.1 1.9l4.5 1.4 1.7 5.4c.3.8 1.2 1 1.8.4l2.5-2.4 4.7 3.5c.7.5 1.6.1 1.8-.7l2.9-14.9c.2-1-.8-1.7-1.7-1.3z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    face: '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'
  };
  function icon(name) {
    return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // ------------------------------------------------------------------
  // Til
  // ------------------------------------------------------------------
  function applyLang() {
    root.lang = lang;
    var titleKey = document.body.getAttribute('data-title-key');
    if (titleKey) document.title = t(titleKey);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    // data-i18n-attr="aria-label:kalit;alt:kalit"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        if (p.length === 2) el.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    updateThemeLabel();
    updateMenuLabel();
    listeners.forEach(function (fn) { fn(lang); });
  }

  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = b.getAttribute('data-lang');
      if (next === lang) return;
      lang = next;
      save('lang', lang);
      applyLang();
    });
  });

  // ------------------------------------------------------------------
  // Mavzu: qorong'i — asosiy, yorug' — ixtiyoriy
  // ------------------------------------------------------------------
  var themeBtn = document.querySelector('[data-theme-toggle]');
  function isLight() { return root.getAttribute('data-theme') === 'light'; }
  function updateThemeLabel() {
    if (themeBtn) themeBtn.setAttribute('aria-label', t(isLight() ? 'a11y.themeToDark' : 'a11y.themeToLight'));
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = isLight() ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      save('theme', next);
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'light' ? '#f2f2f7' : '#09090d');
      updateThemeLabel();
    });
  }

  // ------------------------------------------------------------------
  // Mobil menyu
  // ------------------------------------------------------------------
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.getElementById('mobileMenu');

  function menuOpen() { return menuBtn && menuBtn.getAttribute('aria-expanded') === 'true'; }
  function updateMenuLabel() {
    if (menuBtn) menuBtn.setAttribute('aria-label', t(menuOpen() ? 'a11y.menuClose' : 'a11y.menu'));
  }
  function setMenu(open, focusBtn) {
    if (!menuBtn || !menu) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    updateMenuLabel();
    if (open) {
      var first = menu.querySelector('a');
      if (first) first.focus({ preventScroll: true });
    } else if (focusBtn) {
      menuBtn.focus();
    }
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () { setMenu(!menuOpen()); });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuOpen()) setMenu(false, true);
    });
    document.addEventListener('click', function (e) {
      if (menuOpen() && !menu.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
    });
    window.matchMedia('(min-width: 1100px)').addEventListener('change', function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  // ------------------------------------------------------------------
  // Scrollspy: menyuda joriy bo'lim
  // ------------------------------------------------------------------
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"], .mobile-menu a[href^="#"]'));
  var spySections = [];
  spyLinks.forEach(function (a) {
    var s = document.getElementById(a.getAttribute('href').slice(1));
    if (s && spySections.indexOf(s) === -1) spySections.push(s);
  });
  if (spySections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        spyLinks.forEach(function (a) {
          if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    spySections.forEach(function (s) { spy.observe(s); });
  }

  // ------------------------------------------------------------------
  // Paydo bo'lish
  // ------------------------------------------------------------------
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }) : null;

  function observe(scope) {
    (scope || document).querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      if (io) io.observe(el); else el.classList.add('in');
    });
  }

  // ------------------------------------------------------------------
  // Tashqi API
  // ------------------------------------------------------------------
  window.Site = {
    get lang() { return lang; },
    t: t,
    icon: icon,
    esc: esc,
    observe: observe,
    onLang: function (fn) { listeners.push(fn); }
  };

  // Birinchi chizish — boshqa skriptlar (home.js) o'z tinglovchisini
  // qo'shib bo'lgach ishga tushadi
  document.addEventListener('DOMContentLoaded', function () {
    applyLang();
    observe();
  });
})();
