(function () {
  'use strict';

  var GH = 'https://github.com/avazbektoxirjonovich-commits/';

  // ------------------------------------------------------------------
  // Ikonkalar
  // ------------------------------------------------------------------
  var ICON = {
    plus: '<path d="M12 5v14M5 12h14"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    telegram: '<path d="M21.5 4.2 2.9 11.4c-1 .4-1 1.8.1 2.1l4.6 1.4 1.8 5.6c.3.8 1.3 1 1.9.4l2.6-2.5 4.9 3.6c.7.5 1.7.1 1.9-.7l3-15.4c.2-1-.8-1.8-1.7-1.5z"/>',
    arrow: '<path d="M7 17 17 7M8 7h9v9"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    face: '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    vision: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3.5"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 13a3 3 0 0 0 2 4.5V18a3 3 0 0 0 6 0V4.5A2.5 2.5 0 0 0 9 4zM15 4a3 3 0 0 1 3 3v.5a3 3 0 0 1 2 5.5 3 3 0 0 1-2 4.5V18a3 3 0 0 1-6 0"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    bot: '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z"/>'
  };
  function icon(name) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICON[name] + '</svg>'; }

  // ------------------------------------------------------------------
  // Matnlar
  // ------------------------------------------------------------------
  var I18N = {
    uz: {
      'skip': "Asosiy qismga o'tish",
      'nav.projects': 'Loyihalar', 'nav.experience': 'Tajriba', 'nav.skills': "Ko'nikmalar", 'nav.contact': 'Aloqa',
      'hero.badge': "Najot Ta'lim'da dasturlash instruktori",
      'hero.role': 'AI & ML · Python backend dasturchi',
      'hero.bio': "Computer vision, RAG va ta'lim tizimlarini noldan quraman — g'oyadan production'gacha. Ta'lim markazlari uchun yaratgan ERP va Telegram botim bugun real foydalanuvchilarga xizmat qilmoqda.",
      'hero.cta1': "Loyihalarni ko'rish", 'hero.cta2': 'Rezyume (PDF)',
      'hero.stat1': 'jonli mahsulot — real foydalanuvchilar bilan',
      'hero.stat2': 'avtomatik test — Choyxona va VLT loyihalarida',
      'hero.stack': 'Ishlatadigan texnologiyalarim',
      'hero.tg': "Telegram'da yozing", 'hero.gh': 'Kodlarim ochiq',
      'hero.now': 'Hozir ustida ishlayapman',
      'hero.nowTitle': 'Aqcha choyxonasi — qishloq uchun taom buyurtma tizimi',
      'projects.eyebrow': 'Tanlangan ishlar', 'projects.title': 'Loyihalar',
      'projects.sub': "Har bir loyiha — real muammoga yechim. Batafsil ko'rish uchun kartochkani bosing.",
      'exp.eyebrow': "Yo'l", 'exp.title': 'Tajriba',
      'exp.j1.role': 'Dasturlash instruktori · Support Teacher', 'exp.j1.time': '2026 — hozir · 8 oy',
      'exp.j1.b1': 'C va Python fanlaridan Foundation darajasida dars beraman',
      'exp.j1.b2': "OOP va Git/GitHub bo'yicha interaktiv darslik materiallari tayyorlayman",
      'exp.j1.b3': "Amaliy mashg'ulotlarda o'quvchilarga yordam beraman, kodlarini tekshiraman",
      'exp.j2.role': 'Freelance dasturchi', 'exp.j2.time': '2026 · 5 oy', 'exp.j2.org': 'Buyurtma va shaxsiy loyihalar',
      'exp.j2.b1': "Qorako'l Ilm Ziyo uchun ERP va qabul sayti — production'da ishlamoqda",
      'exp.j2.b2': 'Tafakkur markazi uchun pullik obunali Telegram bot',
      'exp.j2.b3': "To'liq sikl: backend, AI/ML modellar, deploy va qo'llab-quvvatlash",
      'exp.lang': 'Tillar', 'exp.l.uz': "O'zbek", 'exp.l.en': 'Ingliz', 'exp.l.ru': 'Rus',
      'exp.l.native': 'Ona tili', 'exp.l.beg': "Boshlang'ich",
      'exp.edu': "loyiha ta'lim sohasi uchun — ERP, botlar, sinf monitoringi",
      'skills.eyebrow': 'Asboblar', 'skills.title': "Ko'nikmalar",
      'contact.eyebrow': 'Aloqa', 'contact.title': 'Birga ishlaymizmi?',
      'contact.sub': "Loyiha, ish taklifi yoki shunchaki savol bo'lsa — yozing. Odatda bir kun ichida javob beraman.",
      'footer.top': 'Yuqoriga ↑',
      // dinamik
      'p.live': 'Jonli', 'p.private': 'Yopiq kod', 'p.problem': 'Muammo', 'p.solution': 'Yechim',
      'p.features': 'Nimalar qilingan', 'p.gallery': 'Skrinshotlar', 'p.open': "Saytni ochish", 'p.bot': 'Botni ochish',
      'p.code': "Kodni ko'rish", 'p.details': 'Batafsil',
      'p.privateNote': "Kod yopiq — so'rov bo'yicha ko'rsataman.",
      'more.title': "GitHub'da yana", 'more.text': 'AI Telegram yordamchi, data analysis platformasi va boshqalar',
      'theme': 'Mavzuni almashtirish', 'close': 'Yopish',
      'title': 'Avazbek Yoqubov — AI & ML dasturchi'
    },
    en: {
      'skip': 'Skip to content',
      'nav.projects': 'Projects', 'nav.experience': 'Experience', 'nav.skills': 'Skills', 'nav.contact': 'Contact',
      'hero.badge': 'Programming instructor at Najot Ta\'lim',
      'hero.role': 'AI & ML · Python backend developer',
      'hero.bio': 'I build computer vision, RAG and education systems from scratch — from idea to production. The ERP and Telegram bot I built for education centers serve real users today.',
      'hero.cta1': 'See projects', 'hero.cta2': 'Résumé (PDF)',
      'hero.stat1': 'live products with real users',
      'hero.stat2': 'automated tests across Choyxona and VLT',
      'hero.stack': 'Technologies I work with',
      'hero.tg': 'Message me on Telegram', 'hero.gh': 'My code is open',
      'hero.now': 'Currently building',
      'hero.nowTitle': 'Aqcha Choyxona — food ordering built for villages',
      'projects.eyebrow': 'Selected work', 'projects.title': 'Projects',
      'projects.sub': 'Every project solves a real problem. Click a card for details.',
      'exp.eyebrow': 'Path', 'exp.title': 'Experience',
      'exp.j1.role': 'Programming Instructor · Support Teacher', 'exp.j1.time': '2026 — now · 8 mo',
      'exp.j1.b1': 'Teach C and Python at Foundation level',
      'exp.j1.b2': 'Create interactive course materials on OOP and Git/GitHub',
      'exp.j1.b3': 'Support students in hands-on sessions and review their code',
      'exp.j2.role': 'Freelance developer', 'exp.j2.time': '2026 · 5 mo', 'exp.j2.org': 'Client and personal projects',
      'exp.j2.b1': 'ERP and admissions site for Qorako\'l Ilm Ziyo — running in production',
      'exp.j2.b2': 'Paid-subscription Telegram bot for Tafakkur learning center',
      'exp.j2.b3': 'Full cycle: backend, AI/ML models, deployment and support',
      'exp.lang': 'Languages', 'exp.l.uz': 'Uzbek', 'exp.l.en': 'English', 'exp.l.ru': 'Russian',
      'exp.l.native': 'Native', 'exp.l.beg': 'Beginner',
      'exp.edu': 'projects built for education — ERP, bots, classroom monitoring',
      'skills.eyebrow': 'Toolbox', 'skills.title': 'Skills',
      'contact.eyebrow': 'Contact', 'contact.title': "Let's work together",
      'contact.sub': 'Have a project, a job offer or just a question? Write to me — I usually reply within a day.',
      'footer.top': 'Back to top ↑',
      'p.live': 'Live', 'p.private': 'Private code', 'p.problem': 'Problem', 'p.solution': 'Solution',
      'p.features': 'What was built', 'p.gallery': 'Screenshots', 'p.open': 'Open site', 'p.bot': 'Open bot',
      'p.code': 'View code', 'p.details': 'Details',
      'p.privateNote': 'The code is private — available to show on request.',
      'more.title': 'More on GitHub', 'more.text': 'AI Telegram assistant, data analysis platform and more',
      'theme': 'Toggle theme', 'close': 'Close',
      'title': 'Avazbek Yoqubov — AI & ML developer'
    }
  };

  // ------------------------------------------------------------------
  // Loyihalar
  // size: xl (2x2) · tall (1x2) · wide (2x1) · sm (1x1)
  // ------------------------------------------------------------------
  var PROJECTS = [
    {
      id: 'erp', size: 'xl', live: true,
      cover: 'assets/projects/erp-dashboard.webp',
      gallery: ['erp-dashboard', 'erp-students', 'erp-finance', 'erp-login'],
      links: { site: 'https://erp.qorakolilmziyo.uz', code: GH + 'edu_erp' },
      tags: ['Django', 'DRF', 'PostgreSQL', 'Claude API', 'InsightFace', 'Render'],
      uz: {
        title: "Qorako'l Ilm Ziyo — ERP",
        summary: "Ta'lim markazining butun ishi bitta tizimda: o'quvchilar, davomat, to'lovlar, moliya va gamifikatsiya.",
        problem: "Ta'lim markazlarida o'quvchilar, davomat va to'lovlar daftar yoki Excel'da yuritiladi: qarzlar yo'qolib ketadi, oylik hisobot tayyorlashga soatlab vaqt ketadi.",
        solution: "Markazning kundalik ishini bitta joyga yig'adigan ERP. Har bir rol o'z panelini ko'radi, hisobotlar avtomatik tayyorlanadi, o'quvchilar esa ball to'plab rag'batlanadi.",
        features: [
          "Rollar bo'yicha kirish: admin, o'qituvchi, o'quvchi va ota-ona portali",
          "Davomat, to'lovlar, qarzlar va to'liq moliya moduli (xarajatlar, aktivlar, audit)",
          "KUMUSH ball tizimi, ichki do'kon va reytinglar — o'quvchilarni rag'batlantirish uchun",
          "Claude asosidagi AI admin yordamchi — rol ruxsatlari bilan cheklangan",
          "Yuz orqali ikki bosqichli kirish (InsightFace + liveness tekshiruvi)",
          "ZUKKO — RestrictedPython sandbox'ida dasturlash masalalari",
          "PDF hisobotlar, 35 ta test fayli, Render'da production"
        ]
      },
      en: {
        title: "Qorako'l Ilm Ziyo — ERP",
        summary: 'An education center run from one system: students, attendance, payments, finance and gamification.',
        problem: 'Education centers track students, attendance and payments in notebooks or Excel: debts get lost and monthly reports take hours.',
        solution: 'An ERP that brings daily operations into one place. Every role sees its own dashboard, reports are generated automatically, and students earn points that keep them motivated.',
        features: [
          'Role-based access: admin, teacher, student and parent portals',
          'Attendance, payments, debts and a full finance module (expenses, assets, audit trail)',
          'KUMUSH points, an in-app store and leaderboards to motivate students',
          'Claude-powered AI admin assistant, scoped by role permissions',
          'Face-based two-factor login (InsightFace + liveness check)',
          'ZUKKO — coding challenges in a RestrictedPython sandbox',
          'PDF reports, 35 test files, running in production on Render'
        ]
      }
    },
    {
      id: 'tafakkur', size: 'tall', live: true,
      cover: 'assets/projects/tafakkur-cover.webp',
      gallery: ['tafakkur-1', 'tafakkur-2'],
      links: { bot: 'https://t.me/tmbookuzbot' },
      tags: ['Python', 'Telegram Bot API', 'Obuna'],
      uz: {
        title: 'Tafakkur markazi — bot',
        summary: "Kitob javoblari, quizlar va pullik obuna — 300+ fayl bilan.",
        problem: "O'quvchilar darslik va mashq kitoblarining javoblarini internetdan qidirib yuradi, markaz esa tayyorlagan kontentidan daromad ololmaydi.",
        solution: "Telegram bot: kitoblar va ularning javoblari, 1–11 sinflar bo'yicha quizlar va natijalar. Kontentga kirish pullik obuna orqali, adminlar hammasini botning o'zidan boshqaradi.",
        features: [
          "Kitoblar va javoblar bazasi — 300+ fayl",
          "1–11 sinflar uchun quizlar va natijalar",
          "Pullik obuna va to'lovlar bo'limi",
          "Admin panel: kitob qo'shish, adminlar va sozlamalar"
        ]
      },
      en: {
        title: 'Tafakkur center — bot',
        summary: 'Textbook answers, quizzes and a paid subscription — 300+ files.',
        problem: 'Students hunt for textbook answers across the internet, while the center earns nothing from the content it prepares.',
        solution: 'A Telegram bot with books and their answers, quizzes and results for grades 1–11. Access is via paid subscription, and admins manage everything from inside the bot.',
        features: [
          'Library of books and answers — 300+ files',
          'Quizzes and results for grades 1–11',
          'Paid subscription and payments section',
          'Admin panel: add books, manage admins and settings'
        ]
      }
    },
    {
      id: 'taxi', size: 'tall',
      cover: 'assets/projects/taxi-map.webp', phone: true,
      gallery: ['taxi-search', 'taxi-map'],
      links: { code: GH + 'intercity-taxi-bot' },
      tags: ['Aiogram 3', 'FastAPI', 'WebSocket', 'Docker'],
      uz: {
        title: 'Shaharlararo taksi',
        summary: "3 ta bot + Mini App: safar band qilish va jonli GPS kuzatuv.",
        problem: "Namangan ⇄ Toshkent taksilari Telegram guruhlarida tartibsiz topiladi: yo'lovchi haydovchi qayerdaligini bilmaydi, bitta buyurtmaga bir nechta haydovchi yopishadi.",
        solution: "Yo'lovchi, haydovchi va admin uchun alohida botlar hamda Mini App: safar qidirish va band qilish, pochta jo'natish, haydovchini xaritada jonli kuzatish.",
        features: [
          "3 ta alohida bot — yo'lovchi, haydovchi, admin",
          "Claim tizimi: buyurtmani faqat bitta haydovchi oladi",
          "Jonli GPS — WebSocket orqali, HMAC bilan imzolangan",
          "Guruh xabarlaridan safar niyatini aniqlash (kalit so'z + ixtiyoriy Claude)",
          "Reyting, safar tarixi va APScheduler vazifalari"
        ]
      },
      en: {
        title: 'Intercity taxi',
        summary: '3 bots + a Mini App: trip booking and live GPS tracking.',
        problem: "Namangan ⇄ Tashkent taxis are found chaotically in Telegram groups: passengers can't see where the driver is, and several drivers grab the same order.",
        solution: 'Separate bots for passengers, drivers and admins plus a Mini App: trip search and booking, parcel delivery, and live driver tracking on a map.',
        features: [
          'Three separate bots — passenger, driver, admin',
          'Claim system: only one driver can take an order',
          'Live GPS over WebSocket, signed with HMAC',
          'Travel-intent detection from group messages (keywords + optional Claude)',
          'Ratings, trip history and APScheduler jobs'
        ]
      }
    },
    {
      id: 'choyxona', size: 'xl', private: true, visual: 'timing',
      tags: ['Django 5.2', 'DRF', 'PostgreSQL 17', 'Next.js 16', 'TypeScript', 'Tailwind 4'],
      uz: {
        title: 'Aqcha choyxonasi',
        summary: "Qishloq uchun taom buyurtma tizimi: yetkazish, olib ketish, joyida va oldindan buyurtma. Mijoz kelganda kutmaydi.",
        problem: "Qishloqda GPS ham, ko'cha-uy raqami ham yo'q, internet sekin, to'lov asosan naqd — Yandex Eats kabi ilovalar bu sharoitda ishlamaydi. Mijoz esa choyxonaga kelib taomni kutib o'tiradi.",
        solution: "Qishloq sharoitiga qurilgan buyurtma tizimi. Mijoz soat 19:00 ga buyurtma beradi — tizim tayyorlanish vaqtini hisoblab, oshxonaga 18:25 da boshlashni aytadi. Mijoz kelganda taom tayyor.",
        features: [
          "«Manzil = odam»: «Alisher akaning uyi, maktab orqasida» — yetarli",
          "Vaqt slotlari va sig'im: tayyorlanish boshlanishi avtomatik hisoblanadi",
          "Buyurtma holat mashinasi, narx snapshot'i va idempotentlik",
          "Oshxona navbati, afitsant ekrani, yetkazish va boshliq statistikasi",
          "Sekin internet uchun tejamkor rejim, naqd to'lov birinchi o'rinda",
          "Modular monolit: 11 ta Django ilova, 1160 ta test (pytest)"
        ]
      },
      en: {
        title: 'Aqcha Choyxona',
        summary: "Food ordering built for villages: delivery, pickup, dine-in and pre-orders. Customers don't wait when they arrive.",
        problem: "Villages have no GPS addresses or house numbers, internet is slow and payment is mostly cash — apps like Yandex Eats don't work there. Customers end up waiting at the teahouse for their food.",
        solution: 'An ordering system built for village life. A customer orders for 19:00 — the system computes prep time and tells the kitchen to start at 18:25. The food is ready on arrival.',
        features: [
          '"Address = a person": "Alisher aka\'s house, behind the school" is enough',
          'Time slots and capacity: cooking start time is computed automatically',
          'Order state machine, price snapshots and idempotency',
          'Kitchen queue, waiter screen, delivery and owner analytics',
          'Lightweight mode for slow internet, cash-first payments',
          'Modular monolith: 11 Django apps, 1,160 tests (pytest)'
        ]
      }
    },
    {
      id: 'vlt', size: 'wide', visual: 'vlt',
      links: { code: GH + 'VLT' },
      tags: ['YOLO11', 'InsightFace', 'RTMPose', 'FastAPI', 'React 19', 'TypeScript'],
      uz: {
        title: 'VLT — sinf intellekti',
        summary: "Kamera oqimidan davomat, diqqat va xulq-atvorni real vaqtda tahlil qiladigan platforma.",
        problem: "Bitta o'qituvchi 30 ta o'quvchining diqqatini bir vaqtda kuzata olmaydi: kim chalg'iyapti, kim darsdan uzilib qolgani faqat imtihonda ma'lum bo'ladi.",
        solution: "Kamera oqimini bir nechta AI model orqali tahlil qiladigan platforma: o'quvchini taniydi, davomatni o'zi belgilaydi, diqqat darajasini real vaqtda hisoblaydi va o'qituvchiga tavsiyalar beradi.",
        features: [
          "Vision pipeline: YOLO11 → ByteTrack → InsightFace → RTMPose → FaceMesh → HeadPose → Gaze",
          "Yuz orqali avtomatik davomat",
          "Xulq-atvor dvigateli: diqqat balli, xavf darajasi, holatlar mashinasi",
          "Prognozlar, tavsiyalar, dars xulosasi, heatmaplar va Digital Twin",
          "React 19 + TypeScript dashboard — 17 sahifa, WebSocket orqali jonli yangilanish",
          "382 backend + 65 frontend testi"
        ]
      },
      en: {
        title: 'VLT — classroom intelligence',
        summary: 'A platform that analyzes attendance, attention and behavior from a camera feed in real time.',
        problem: "One teacher can't track the attention of 30 students at once: who is distracted or falling behind only shows up at exam time.",
        solution: 'A platform that runs the camera feed through several AI models: it recognizes students, marks attendance automatically, computes attention in real time and gives the teacher recommendations.',
        features: [
          'Vision pipeline: YOLO11 → ByteTrack → InsightFace → RTMPose → FaceMesh → HeadPose → Gaze',
          'Automatic face-based attendance',
          'Behavior engine: attention score, risk level, state machine',
          'Predictions, recommendations, lesson summaries, heatmaps and a Digital Twin',
          'React 19 + TypeScript dashboard — 17 pages, live WebSocket updates',
          '382 backend + 65 frontend tests'
        ]
      }
    },
    {
      id: 'legal', size: 'wide', visual: 'rag',
      links: { code: GH + 'legal-rag-uzbekistan' },
      tags: ['BM25', 'FAISS', 'RRF', 'Reranker', 'Gemini'],
      uz: {
        title: 'Qonuniy RAG — O\'zbekiston',
        summary: "Konstitutsiya va Jinoyat kodeksi bo'yicha faqat rasmiy matnga tayanadigan yordamchi.",
        problem: "Oddiy fuqaro qonunni o'qib tushunishi qiyin, ChatGPT kabi modellar esa mavjud bo'lmagan moddalarni o'ylab topadi.",
        solution: "Javobni faqat Konstitutsiya va Jinoyat kodeksining rasmiy matniga tayanib beradigan yordamchi: har bir javobda modda raqami ko'rsatiladi, topilmasa — ochiq aytadi.",
        features: [
          "Gibrid qidiruv: BM25 (so'z bo'yicha) + FAISS (ma'no bo'yicha)",
          "Reciprocal Rank Fusion bilan natijalarni birlashtirish",
          "Cross-encoder reranker — aniqroq yakuniy tartib",
          "Gemini 2.5 Flash, temperature=0, gallyutsinatsiyaga qarshi prompt",
          "Manba paneli: qaysi moddalar ishlatilgani va ularning ballari"
        ]
      },
      en: {
        title: 'Legal RAG — Uzbekistan',
        summary: 'An assistant for the Constitution and Criminal Code that answers only from the official text.',
        problem: 'Laws are hard for ordinary citizens to read, and models like ChatGPT invent articles that do not exist.',
        solution: 'An assistant that answers strictly from the official text of the Constitution and Criminal Code: every answer cites the article number, and it says so plainly when nothing is found.',
        features: [
          'Hybrid retrieval: BM25 (lexical) + FAISS (semantic)',
          'Reciprocal Rank Fusion to merge the rankings',
          'Cross-encoder reranker for a more precise final order',
          'Gemini 2.5 Flash, temperature=0, anti-hallucination prompt',
          'Source panel showing which articles were used and their scores'
        ]
      }
    },
    {
      id: 'landing', size: 'wide', live: true,
      cover: 'assets/projects/qorakol-landing-1.webp',
      gallery: ['qorakol-landing-1', 'qorakol-landing-2'],
      links: {},
      tags: ['Veb-sayt', 'ERP integratsiya'],
      uz: {
        title: "Qorako'l Ilm Ziyo — qabul sayti",
        summary: "Kursga yozilish va oylik matematika musobaqasiga ro'yxatdan o'tish — ERP bilan ulangan.",
        problem: "Markazga yozilmoqchi bo'lganlar va musobaqa ishtirokchilari telefon va qog'oz orqali ro'yxatga olinardi — arizalar yo'qolib, operatorlar ortiqcha ish qilardi.",
        solution: "Onlayn qabul sayti: forma to'ldiriladi, operator qo'ng'iroq qilib tasdiqlaydi, natijalar va g'oliblar shu saytda e'lon qilinadi. Arizalar to'g'ridan-to'g'ri ERP'ga tushadi.",
        features: [
          "1–11 sinflar uchun oylik matematika musobaqasiga ro'yxat",
          "Kursga yozilish arizasi",
          "G'oliblar va natijalar sahifasi",
          "ERP bilan bog'langan — arizalar avtomatik tizimga tushadi"
        ]
      },
      en: {
        title: "Qorako'l Ilm Ziyo — admissions site",
        summary: 'Course enrollment and monthly math contest registration — connected to the ERP.',
        problem: 'Enrollments and contest sign-ups were collected by phone and on paper — applications got lost and operators did double work.',
        solution: 'An online admissions site: fill in a form, an operator calls to confirm, and results and winners are published on the site. Applications go straight into the ERP.',
        features: [
          'Monthly math contest registration for grades 1–11',
          'Course enrollment applications',
          'Winners and results page',
          'Connected to the ERP — applications land in the system automatically'
        ]
      }
    },
    {
      id: 'attention', size: 'sm', ico: 'eye',
      links: { code: GH + 'classroom-attention-monitor' },
      tags: ['YOLOv8', 'MediaPipe', 'Streamlit'],
      uz: {
        title: 'Sinfdagi diqqat monitori',
        summary: "Telefon, bosh holati va ko'z signallaridan uxlash va chalg'ishni aniqlash.",
        problem: "O'qituvchi dars davomida kim uxlayotgani yoki telefon o'ynayotganini doim ko'ra olmaydi.",
        solution: "VLT'ning birinchi versiyasi: YOLOv8 telefonni, MediaPipe bosh holati va ko'z yumilishini aniqlaydi, signallar birlashtirilib har bir o'quvchiga diqqat holati beriladi.",
        features: [
          "YOLOv8 bilan telefonni aniqlash va kuzatish",
          "MediaPipe: bosh holati (pitch/yaw/roll) va EAR orqali uyquni aniqlash",
          "Signallarni birlashtirib yagona diqqat holati",
          "Streamlit dashboard, CSV/PDF hisobotlar"
        ]
      },
      en: {
        title: 'Classroom attention monitor',
        summary: 'Detects sleeping and distraction from phone, head-pose and eye signals.',
        problem: "A teacher can't always see who is asleep or on their phone during class.",
        solution: "VLT's first version: YOLOv8 detects phones, MediaPipe tracks head pose and eye closure, and the signals are fused into one attention status per student.",
        features: [
          'Phone detection and tracking with YOLOv8',
          'MediaPipe head pose (pitch/yaw/roll) and EAR-based sleep detection',
          'Multi-signal fusion into a single attention status',
          'Streamlit dashboard, CSV/PDF reports'
        ]
      }
    },
    {
      id: 'fecid', size: 'sm', ico: 'face',
      links: { code: GH + 'fecid' },
      tags: ['InsightFace', 'OpenCV', 'ONNX'],
      uz: {
        title: "Fe'l-atvorli — yuzni tanish",
        summary: "Liveness va sifat nazorati bilan real vaqtda yuzni tanish.",
        problem: "Oddiy yuzni tanish tizimini telefondagi rasm bilan aldash mumkin, xira kadrda esa u noto'g'ri odamni taniydi.",
        solution: "InsightFace asosida real vaqtda tanish: avval kadr sifati, keyin tiriklik (liveness) tekshiriladi, shundan so'ng embedding solishtiriladi. Ro'yxatga olish uchun bitta rasm yetarli.",
        features: [
          "InsightFace embeddinglari va kosinus o'xshashlik",
          "Liveness — rasm ko'rsatib aldashga qarshi",
          "Sifat nazorati — xira kadrlar tanishga yetib bormaydi",
          "Kamera orqali jonli ro'yxatga olish"
        ]
      },
      en: {
        title: 'Fecid — face recognition',
        summary: 'Real-time face recognition with liveness and quality gating.',
        problem: 'A basic face recognizer can be fooled by a photo on a phone, and it misidentifies people on blurry frames.',
        solution: 'Real-time recognition with InsightFace: frame quality is checked first, then liveness, and only then embeddings are compared. One photo is enough to enroll.',
        features: [
          'InsightFace embeddings with cosine similarity',
          'Liveness check against photo spoofing',
          'Quality gate — blurry frames never reach recognition',
          'Live enrollment from the webcam'
        ]
      }
    },
    {
      id: 'ustoz', size: 'sm', ico: 'book',
      links: { code: GH + 'ai-ustoz' },
      tags: ['Ollama', 'ChromaDB', 'BM25'],
      uz: {
        title: 'AI Ustoz',
        summary: "Internetsiz ishlaydigan AI ustoz — hujjatlar kompyuterdan chiqmaydi.",
        problem: "Darslik va ma'ruzalar kabi ichki hujjatlarni bulutdagi AI xizmatlariga yuklab bo'lmaydi.",
        solution: "To'liq offline RAG: PDF/DOCX/PPTX yuklanadi, gibrid qidiruv (ChromaDB + BM25) va mahalliy Ollama modeli faqat yuklangan materialdan javob beradi.",
        features: [
          "PDF, DOCX, PPTX hujjatlarni yuklash",
          "Gibrid qidiruv: ChromaDB (dense) + BM25 (sparse)",
          "Mahalliy Ollama LLM — API kalit va internet kerak emas",
          "Ollama ishlamasa ham ilova qulamaydi"
        ]
      },
      en: {
        title: 'AI Ustoz',
        summary: 'A fully offline AI tutor — documents never leave the machine.',
        problem: "Internal documents like textbooks and lectures can't be uploaded to cloud AI services.",
        solution: 'Fully offline RAG: upload PDF/DOCX/PPTX, and hybrid retrieval (ChromaDB + BM25) with a local Ollama model answers only from that material.',
        features: [
          'Upload PDF, DOCX and PPTX documents',
          'Hybrid retrieval: ChromaDB (dense) + BM25 (sparse)',
          'Local Ollama LLM — no API key or internet needed',
          'Degrades gracefully when Ollama is offline'
        ]
      }
    },
    {
      id: 'uzsearch', size: 'sm', ico: 'search',
      links: { code: GH + 'uzbek-hybrid-search' },
      tags: ['BM25', 'FAISS', 'RRF'],
      uz: {
        title: "O'zbek gibrid qidiruv",
        summary: "O'zbek Vikipediyasi bo'yicha so'z va ma'no asosidagi qidiruv.",
        problem: "O'zbek tili uchun sifatli semantik qidiruv vositalari kam, oddiy kalit so'z qidiruvi esa ma'noni tushunmaydi.",
        solution: "O'zbek Vikipediyasidagi 15 000 maqola bo'yicha gibrid qidiruv: BM25 va FAISS natijalari RRF bilan birlashtiriladi, ixtiyoriy cross-encoder bilan qayta tartiblanadi.",
        features: [
          "BM25 + ko'p tilli sentence-transformers embeddinglari (FAISS)",
          "Reciprocal Rank Fusion, k=60",
          "Ixtiyoriy cross-encoder reranking",
          "BM25 / Dense / Hybrid ni solishtirish uchun baholash skripti"
        ]
      },
      en: {
        title: 'Uzbek hybrid search',
        summary: 'Lexical + semantic search over Uzbek Wikipedia.',
        problem: 'Good semantic search tools for Uzbek are rare, and plain keyword search misses meaning.',
        solution: 'Hybrid search over 15,000 Uzbek Wikipedia articles: BM25 and FAISS results are fused with RRF and optionally reranked with a cross-encoder.',
        features: [
          'BM25 + multilingual sentence-transformers embeddings (FAISS)',
          'Reciprocal Rank Fusion, k=60',
          'Optional cross-encoder reranking',
          'Evaluation harness comparing BM25 / Dense / Hybrid'
        ]
      }
    },
    {
      id: 'vtaxi', size: 'sm', ico: 'layers',
      links: { code: GH + 'vtaxi' },
      tags: ['Clean Architecture', 'DDD', 'SQLAlchemy 2.0'],
      uz: {
        title: 'VTaxi — arxitektura',
        summary: "Clean Architecture va DDD asosidagi taksi backend namunasi.",
        problem: "Tez yozilgan botni yangi shahar yoki xizmat qo'shilganda qaytadan yozishga to'g'ri keladi.",
        solution: "Domen, ilova va infratuzilma qatlamlari ajratilgan backend: yangi yo'nalish — kod emas, ma'lumot o'zgarishi. Arxitektura namunasi sifatida chop etilgan.",
        features: [
          "Band qilish holat mashinasi: PENDING → RESERVED → ACCEPTED → COMPLETED",
          "Bounded context'lar: identity, trip, vehicle, booking",
          "Async SQLAlchemy 2.0, Unit of Work, Alembic, Dishka DI",
          "Joylar sonini xizmatlar o'rtasida sinxronlash"
        ]
      },
      en: {
        title: 'VTaxi — architecture',
        summary: 'A taxi backend showcase built with Clean Architecture and DDD.',
        problem: 'A quickly written bot has to be rewritten whenever a new city or service is added.',
        solution: 'A backend with separate domain, application and infrastructure layers: a new route is a data change, not a rewrite. Published as an architecture showcase.',
        features: [
          'Booking state machine: PENDING → RESERVED → ACCEPTED → COMPLETED',
          'Bounded contexts: identity, trip, vehicle, booking',
          'Async SQLAlchemy 2.0, Unit of Work, Alembic, Dishka DI',
          'Cross-service seat synchronization'
        ]
      }
    }
  ];

  var STACK = ['Python', 'Django', 'DRF', 'FastAPI', 'Aiogram 3', 'PostgreSQL', 'PyTorch', 'YOLOv8 / 11',
    'MediaPipe', 'InsightFace', 'OpenCV', 'FAISS', 'BM25', 'Gemini API', 'Claude API', 'Ollama',
    'Next.js', 'React', 'Docker', 'Git'];

  var SKILLS = [
    { ico: 'server', wide: true, uz: 'Backend', en: 'Backend',
      items: ['Python', 'Django', 'DRF', 'FastAPI', 'SQLAlchemy 2.0', 'PostgreSQL', 'JWT', 'Alembic', 'pytest'] },
    { ico: 'vision', wide: true, uz: 'Computer Vision', en: 'Computer Vision',
      items: ['YOLOv8 / YOLO11', 'MediaPipe', 'InsightFace', 'OpenCV', 'RTMPose', 'ByteTrack', 'ONNX Runtime'] },
    { ico: 'brain', wide: true, uz: 'RAG va LLM', en: 'RAG & LLM',
      items: ['FAISS', 'BM25', 'RRF', 'Cross-encoder', 'ChromaDB', 'sentence-transformers', 'Gemini API', 'Claude API', 'Ollama'] },
    { ico: 'chart', uz: 'ML asoslari', en: 'ML foundations',
      items: ['PyTorch', 'NumPy', 'Pandas', 'CNN / RNN', 'Chiziqli algebra|Linear algebra', 'Statistika|Statistics'] },
    { ico: 'bot', uz: 'Botlar', en: 'Bots',
      items: ['Aiogram 3', 'Telegram Mini App', 'WebSocket', 'APScheduler'] },
    { ico: 'tool', wide: true, uz: 'Vositalar va deploy', en: 'Tools & deploy',
      items: ['Git / GitHub', 'Docker', 'Render', 'Cloudinary', 'Streamlit', 'Claude Code'] },
    { ico: 'layers', uz: 'Frontend (asosiy)', en: 'Frontend (basics)',
      items: ['Next.js', 'React', 'TypeScript', 'Tailwind'] },
    { ico: 'book', uz: "O'qitish", en: 'Teaching',
      items: ['C', 'Python', 'OOP', 'Git / GitHub'] }
  ];

  // ------------------------------------------------------------------
  // Holat
  // ------------------------------------------------------------------
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function save(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

  var lang = load('lang') === 'en' ? 'en' : 'uz';
  var t = function (k) { return I18N[lang][k] || I18N.uz[k] || k; };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  // "uz|en" ko'rinishidagi qiymatlar
  var pick = function (s) { var p = String(s).split('|'); return lang === 'en' && p[1] ? p[1] : p[0]; };

  // ------------------------------------------------------------------
  // Chizish
  // ------------------------------------------------------------------
  function visual(p) {
    if (p.visual === 'vlt') {
      var n = ['YOLO11', 'ByteTrack', 'InsightFace', 'RTMPose', 'Gaze'];
      return '<div class="pipeline">' + n.map(function (x) { return '<span class="node">' + x + '</span>'; })
        .join('<span class="arrow">→</span>') + '<span class="arrow">→</span><span class="node hl">' +
        (lang === 'en' ? 'Attention score' : 'Diqqat balli') + '</span></div>';
    }
    if (p.visual === 'rag') {
      return '<div class="pipeline"><span class="node">BM25</span><span class="arrow">+</span><span class="node">FAISS</span>' +
        '<span class="arrow">→</span><span class="node">RRF</span><span class="arrow">→</span><span class="node">Reranker</span>' +
        '<span class="arrow">→</span><span class="node hl">Gemini · ' + (lang === 'en' ? 'cited answer' : 'manbali javob') + '</span></div>';
    }
    if (p.visual === 'timing') {
      var en = lang === 'en';
      return '<div class="timing" aria-hidden="true">' +
        '<div class="timing-row"><time>17:40</time><div class="timing-bar order">' + (en ? 'Customer orders for 19:00' : 'Mijoz 19:00 ga buyurtma beradi') + '</div></div>' +
        '<div class="timing-row"><time>18:25</time><div class="timing-bar cook">' + (en ? 'Kitchen starts cooking' : 'Oshxona tayyorlashni boshlaydi') + '</div></div>' +
        '<div class="timing-row"><time>19:00</time><div class="timing-bar ready">' + (en ? 'Ready — no waiting' : 'Tayyor — kutish yo\'q') + '</div></div>' +
        '</div>' +
        '<div class="mini-stats">' +
        '<div><b>1160</b><span>' + (en ? 'tests' : 'ta test') + '</span></div>' +
        '<div><b>11</b><span>' + (en ? 'Django apps' : 'Django ilova') + '</span></div>' +
        '<div><b>4</b><span>' + (en ? 'order types' : 'buyurtma turi') + '</span></div>' +
        '</div>';
    }
    return '';
  }

  function projectCard(p) {
    var d = p[lang];
    var badges = '';
    if (p.live) badges += '<span class="badge live">' + t('p.live') + '</span>';
    if (p.private) badges += '<span class="badge private">' + t('p.private') + '</span>';
    var media = '';
    if (p.cover) {
      media = '<div class="shot' + (p.phone ? ' phone' : '') + '"><img src="' + p.cover + '" alt="" loading="lazy"></div>';
    }
    var head = p.ico ? '<span class="small-ico">' + icon(p.ico) + '</span>' : '';
    // Vizualda ko'rinib turgan teglar pastda takrorlanmasin
    var vis = visual(p);
    var tags = p.tags.filter(function (x) { return vis.indexOf('>' + x + '<') === -1; })
      .slice(0, p.size === 'sm' ? 3 : 6).map(function (x) { return '<span class="chip">' + esc(x) + '</span>'; }).join('');
    return '<button type="button" class="card project ' + p.size + ' reveal" data-open="' + p.id + '" aria-label="' + esc(d.title) + ' — ' + t('p.details') + '">' +
      '<span class="more">' + icon('arrow') + '</span>' +
      head +
      (badges ? '<div class="project-top">' + badges + '</div>' : '') +
      '<h3>' + esc(d.title) + '</h3>' +
      '<p class="summary">' + esc(d.summary) + '</p>' +
      vis + media +
      '<div class="tags">' + tags + '</div>' +
      '</button>';
  }

  function renderProjects() {
    var html = PROJECTS.map(projectCard).join('');
    html += '<a class="card more-card reveal" href="https://github.com/avazbektoxirjonovich-commits?tab=repositories" target="_blank" rel="noopener">' +
      '<span class="corner">' + icon('arrow') + '</span>' +
      icon('github') + '<strong>' + t('more.title') + '</strong><p>' + t('more.text') + '</p></a>';
    document.getElementById('projectGrid').innerHTML = html;
  }

  function renderSkills() {
    document.getElementById('skillsGrid').innerHTML = SKILLS.map(function (s) {
      return '<article class="card skill' + (s.wide ? ' wide' : '') + ' reveal">' +
        '<h3><span class="small-ico">' + icon(s.ico) + '</span>' + s[lang] + '</h3>' +
        '<div class="chips">' + s.items.map(function (x) { return '<span class="chip">' + esc(pick(x)) + '</span>'; }).join('') + '</div>' +
        '</article>';
    }).join('');
  }

  function renderMarquee() {
    var chips = STACK.map(function (x) { return '<span class="chip">' + x + '</span>'; }).join('');
    var dup = STACK.map(function (x) { return '<span class="chip dup">' + x + '</span>'; }).join('');
    document.getElementById('marquee').innerHTML = chips + dup; // ikkinchi nusxa — uzluksiz aylanish uchun
  }

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    document.getElementById('themeToggle').setAttribute('aria-label', t('theme'));
    document.getElementById('modalClose').setAttribute('aria-label', t('close'));
  }

  // ------------------------------------------------------------------
  // Modal
  // ------------------------------------------------------------------
  var modal = document.getElementById('projectModal');
  var currentId = null;

  function openProject(id) {
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    currentId = id;
    var d = p[lang];
    var badges = (p.live ? '<span class="badge live">' + t('p.live') + '</span>' : '') +
      (p.private ? '<span class="badge private">' + t('p.private') + '</span>' : '') +
      p.tags.map(function (x) { return '<span class="chip">' + esc(x) + '</span>'; }).join('');

    var links = '';
    if (p.links && p.links.site) links += '<a class="btn btn-primary" href="' + p.links.site + '" target="_blank" rel="noopener">' + icon('ext') + t('p.open') + '</a>';
    if (p.links && p.links.bot) links += '<a class="btn btn-primary" href="' + p.links.bot + '" target="_blank" rel="noopener">' + icon('telegram') + t('p.bot') + '</a>';
    if (p.links && p.links.code) links += '<a class="btn btn-ghost" href="' + p.links.code + '" target="_blank" rel="noopener">' + icon('github') + t('p.code') + '</a>';

    var gallery = '';
    if (p.gallery) {
      gallery = '<p class="m-section-title">' + t('p.gallery') + '</p><div class="m-gallery">' +
        p.gallery.map(function (g) {
          return '<img src="assets/projects/' + g + '.webp" alt="' + esc(d.title) + '" loading="lazy"' + (p.phone ? ' class="phone-shot"' : '') + '>';
        }).join('') + '</div>';
    }

    document.getElementById('modalBody').innerHTML =
      '<div class="m-top">' + badges + '</div>' +
      '<h2 id="modalTitle">' + esc(d.title) + '</h2>' +
      '<div class="m-grid">' +
        '<div class="m-box"><h4>' + t('p.problem') + '</h4><p>' + esc(d.problem) + '</p></div>' +
        '<div class="m-box solution"><h4>' + t('p.solution') + '</h4><p>' + esc(d.solution) + '</p></div>' +
      '</div>' +
      '<p class="m-section-title">' + t('p.features') + '</p>' +
      '<ul class="m-features">' + d.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
      gallery +
      (links ? '<div class="m-links">' + links + '</div>' : '') +
      (p.private ? '<p class="m-note">' + t('p.privateNote') + '</p>' : '');

    if (!modal.open) {
      if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
    }
    modal.scrollTop = 0;
  }

  function closeModal() {
    currentId = null;
    if (typeof modal.close === 'function') modal.close(); else modal.removeAttribute('open');
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-open]');
    if (trigger) { openProject(trigger.getAttribute('data-open')); return; }
    if (e.target === modal) closeModal(); // fon bosilganda yopiladi
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('close', function () { currentId = null; });

  // ------------------------------------------------------------------
  // Til va mavzu
  // ------------------------------------------------------------------
  function renderAll() {
    applyStatic();
    renderProjects();
    renderSkills();
    observeReveal();
    if (currentId) openProject(currentId);
  }

  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      save('lang', lang);
      renderAll();
    });
  });

  document.getElementById('themeToggle').addEventListener('click', function () {
    var root = document.documentElement;
    var isDark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = isDark ? 'light' : 'dark';
    save('theme', root.dataset.theme);
  });

  // ------------------------------------------------------------------
  // Ko'rinish animatsiyasi
  // ------------------------------------------------------------------
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -40px 0px' }) : null;

  function observeReveal() {
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      if (io) io.observe(el); else el.classList.add('in');
    });
  }

  renderMarquee();
  renderAll();

  // #p-erp kabi havola bilan kelinsa — o'sha loyiha ochiladi
  var m = /^#p-([\w-]+)$/.exec(location.hash);
  if (m) openProject(m[1]);
})();
