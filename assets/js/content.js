/* =====================================================================
   Sayt kontenti — taqdimotdan alohida.
   Matnlar ikki tilda (uz / en). Raqamlar faqat tekshirilgan manbalardan:
   repo README'lari, test fayllari soni, foydalanuvchi tasdiqlagan faktlar.
   ===================================================================== */
window.SITE = (function () {
  'use strict';

  var GH = 'https://github.com/avazbektoxirjonovich-commits/';

  // ------------------------------------------------------------------
  // Interfeys matnlari
  // ------------------------------------------------------------------
  var STRINGS = {
    uz: {
      'meta.title': 'Avazbek Yoqubov — AI & Machine Learning muhandisi',
      'meta.resumeTitle': 'Rezyume — Avazbek Yoqubov',

      'a11y.skip': "Asosiy qismga o'tish",
      'a11y.nav': 'Asosiy menyu',
      'a11y.brand': 'Avazbek Yoqubov — bosh sahifa',
      'a11y.themeToLight': "Yorug' mavzuga o'tish",
      'a11y.themeToDark': "Qorong'i mavzuga o'tish",
      'a11y.menu': 'Menyuni ochish',
      'a11y.menuClose': 'Menyuni yopish',
      'a11y.social': 'Ijtimoiy tarmoqlar',
      'a11y.close': 'Yopish',

      'nav.home': 'Bosh sahifa', 'nav.projects': 'Loyihalar', 'nav.lab': 'AI Lab',
      'nav.experience': 'Tajriba', 'nav.about': 'Men haqimda', 'nav.contact': 'Aloqa',
      'nav.cta': "Bog'lanish", 'nav.resume': 'Rezyume',

      'hero.status': "Najot Ta'lim'da dasturlash instruktori",
      'hero.eyebrow': 'AI & Machine Learning muhandisi',
      'hero.lead': "Machine learning, computer vision, RAG va LLM ilovalari hamda kengaytiriladigan Python backend'lar asosida aqlli tizimlar quraman.",
      'hero.ctaProjects': "Loyihalarni ko'rish",
      'hero.ctaResume': 'Rezyumeni yuklab olish',
      'hero.ctaContact': "Bog'lanish",
      'hero.fact1': 'jonli mahsulot real foydalanuvchilar bilan',
      'hero.fact2': 'avtomatik test — Choyxona va VLT loyihalarida',
      'hero.fact3': 'loyiha — CV, RAG, backend va botlar',

      'projects.eyebrow': 'Tanlangan ishlar',
      'projects.title': 'Loyihalar',
      'projects.lead': "Har bir loyiha real muammodan boshlangan. Kartochkada — muammo, nima qurganim, texnologiyalar va tekshirilgan natijalar.",
      'projects.moreTitle': 'Boshqa loyihalar',
      'projects.allRepos': 'Barcha repolar',

      'lab.title': 'Tizimlar qanday tuzilgan',
      'lab.lead': "Real loyihalarimdagi arxitekturalarning soddalashtirilgan sxemalari — har birining ostida qaysi loyihada ishlatilgani ko'rsatilgan.",
      'lab.usedIn': 'Loyihalarda:',
      'lab.cv.sub': 'Kamera oqimidan davomat va diqqat',
      'lab.cv.s1': 'aniqlash va kuzatish', 'lab.cv.s2': 'kim ekanini tanish', 'lab.cv.s3': 'poza va nigoh',
      'lab.cv.s4': 'Xulq-atvor dvigateli', 'lab.cv.s4b': 'diqqat balli, xavf, holatlar',
      'lab.cv.used2': 'Diqqat monitori',
      'lab.rag.sub': 'Manbaga tayangan javoblar',
      'lab.rag.s0': 'Savol', 'lab.rag.s1': "so'z va ma'no bo'yicha qidiruv", 'lab.rag.s2': 'qayta tartiblash',
      'lab.rag.s3': 'temperature 0, faqat kontekstdan', 'lab.rag.s4': 'Manbali javob',
      'lab.rag.s4b': 'modda raqami bilan yoki "topilmadi"',
      'lab.rag.used3': "O'zbek gibrid qidiruv",
      'lab.be.sub': 'Ishonchli buyurtma va ERP tizimlari',
      'lab.be.s0': 'mijozlar', 'lab.be.s2': 'Servis qatlami', 'lab.be.s2b': 'holat mashinasi, idempotentlik, Unit of Work',
      'lab.be.s4': 'Fon vazifalari', 'lab.be.s4b': 'PostgreSQL navbati, APScheduler',
      'lab.be.used3': 'Taksi',
      'lab.apps.title': 'AI ilovalar', 'lab.apps.sub': 'AI mahsulot ichida ishlaganda',
      'lab.apps.f1': 'AI admin yordamchi (ERP)', 'lab.apps.f1a': "So'rov", 'lab.apps.f1b': 'rol ruxsati', 'lab.apps.f1c': 'cheklangan vosita',
      'lab.apps.f2': 'Yuz orqali kirish (ERP)', 'lab.apps.f2a': 'Kamera', 'lab.apps.f2b': 'kosinus moslik',
      'lab.apps.f3': 'Safar niyatini aniqlash (Taksi)', 'lab.apps.f3a': 'Guruh xabari', 'lab.apps.f3b': "kalit so'z",
      'lab.apps.f3c': 'Claude (ixtiyoriy)', 'lab.apps.f3d': 'haydovchiga',

      'exp.eyebrow': "Yo'l", 'exp.title': 'Tajriba',
      'exp.j1.role': 'Dasturlash instruktori · Support Teacher', 'exp.j1.time': '2026 — hozir · 8 oy',
      'exp.j1.b1': 'C va Python fanlaridan Foundation darajasida dars beraman',
      'exp.j1.b2': "OOP va Git/GitHub bo'yicha interaktiv darslik materiallari tayyorlayman",
      'exp.j1.b3': "Amaliy mashg'ulotlarda o'quvchilarga yordam beraman, kodlarini tekshiraman",
      'exp.j2.role': 'Freelance dasturchi', 'exp.j2.time': '2026 · 5 oy', 'exp.j2.org': 'Buyurtma va shaxsiy loyihalar',
      'exp.j2.b1': "Qorako'l Ilm Ziyo uchun ERP va qabul sayti — production'da ishlamoqda",
      'exp.j2.b2': 'Tafakkur markazi uchun pullik obunali Telegram bot',
      'exp.j2.b3': "To'liq sikl: backend, AI/ML modellar, deploy va qo'llab-quvvatlash",
      'skills.title': 'Texnologiyalar',

      'about.eyebrow': 'Men haqimda',
      'about.title': 'Amaliy AI — real muammolar uchun',
      'about.photoAlt': 'Avazbek Yoqubov portreti',
      'about.p1': "Men amaliy AI tizimlarini quraman — kamera oqimidan o'quvchi diqqatini hisoblaydigan computer vision pipeline'laridan tortib, faqat rasmiy matnga tayanib javob beradigan RAG yordamchilarigacha.",
      'about.p2': "Har bir loyihani real muammodan boshlayman va oxirigacha yetkazaman: backend, ma'lumotlar bazasi, testlar va deploy. Ta'lim markazlari uchun yozgan ERP va Telegram botim bugun real foydalanuvchilarga xizmat qilmoqda.",
      'about.p3': "Najot Ta'lim'da C va Python bo'yicha dars beraman. Loyihalarim README'larida nima ishlashi va nima hali tayyor emasligini ochiq yozaman.",
      'about.focusTitle': "Yo'nalishlar", 'about.focus3': "Ta'lim texnologiyalari",
      'about.langTitle': 'Tillar',
      'lang.uz': "O'zbek", 'lang.en': 'Ingliz', 'lang.ru': 'Rus',
      'lang.native': 'Ona tili', 'lang.beginner': "Boshlang'ich",

      'contact.eyebrow': 'Aloqa', 'contact.title': 'Birga ishlaymizmi?',
      'contact.lead': "Loyiha, ish taklifi yoki savol bo'lsa — yozing. Odatda bir kun ichida javob beraman.",
      'contact.pdf': 'Rezyume (PDF)', 'contact.online': 'Onlayn rezyume →',
      'footer.resume': 'Onlayn rezyume', 'footer.top': 'Yuqoriga ↑', 'footer.home': 'Bosh sahifa',

      'p.live': 'Jonli', 'p.private': 'Yopiq kod',
      'p.problem': 'Muammo', 'p.built': 'Nima qurdim', 'p.features': 'Nimalar qilingan',
      'p.results': 'Natijalar', 'p.gallery': 'Skrinshotlar',
      'p.details': 'Batafsil', 'p.site': 'Saytni ochish', 'p.bot': 'Botni ochish', 'p.code': 'GitHub',
      'p.privateNote': "Kod yopiq — so'rov bo'yicha ko'rsataman.",
      'p.detailsOf': 'batafsil',

      // --- /resume/ sahifasi ---
      'r.back': '← Bosh sahifa',
      'r.download': 'PDF yuklab olish',
      'r.print': 'Chop etish',
      'r.role': "AI & Machine Learning yo'nalishi",
      'r.summaryTitle': "Ma'lumot",
      'r.summary': "Django/DRF va sun'iy intellekt yo'nalishida ixtisoslashgan Python dasturchisi va dasturlash instruktori. Machine learning asoslarini (chiziqli algebra, statistika, gradient asosidagi optimallashtirish, PyTorch, CNN/RNN) o'rgangan va computer vision (YOLOv8, MediaPipe, InsightFace), RAG va gibrid qidiruv tizimlari (FAISS, BM25), hamda backend/ERP tizimlarini (Django, FastAPI) noldan qurish tajribasiga ega. Zamonaviy AI vositalaridan (Claude Code) samarali foydalanib, murakkab loyihalarni tez va sifatli yetkazib berish ko'nikmasiga ega.",
      'r.skillsTitle': "Ko'nikmalar",
      'r.sk.backend': 'Backend', 'r.sk.ai': 'AI / ML', 'r.sk.rag': 'RAG / Qidiruv',
      'r.sk.front': 'Desktop / Frontend', 'r.sk.int': 'Integratsiyalar', 'r.sk.tools': 'Vositalar',
      'r.sk.frontV': 'PyQt5, Next.js (asosiy)', 'r.sk.intV': 'Telegram botlar, Cloudinary',
      'r.expTitle': 'Ish tajribasi',
      'r.e1.role': 'Dasturlash instruktori', 'r.e1.time': '2026 — hozir',
      'r.e1.b1': 'C va Python fanlaridan Foundation darajasida dars beradi',
      'r.e1.b2': "OOP va Git/GitHub bo'yicha interaktiv darslik materiallari tayyorlaydi",
      'r.e2.role': 'Support Teacher', 'r.e2.time': '8 oy',
      'r.e3.role': 'Freelance dasturchi', 'r.e3.org': 'Shaxsiy va buyurtma loyihalari', 'r.e3.time': '2026 · 5 oy',
      'r.e3.b1': 'Quyidagi loyihalarni noldan loyihalashtirish va amalga oshirish',
      'r.e3.b2': "To'liq stack: backend, AI/ML modellari va deploy",
      'r.projTitle': 'Loyihalar',
      'r.p1.t': "Qorako'l Ilm Ziyo — Ta'lim markazi boshqaruv tizimi (jonli loyiha)",
      'r.p1.d': "Ta'lim markazlari uchun boshqaruv tizimi: o'quvchi/jadval/to'lov nazorati, avtomatlashtirilgan hisobotlar, real-vaqt tahlil dashboardi va gamifikatsiya (XP/coinlar). Backend Django+DRF, frontend AI yordamida ishlab chiqilgan. Hozirda ishlab turgan mahsulot.",
      'r.p2.t': 'Sinfdagi diqqat monitori',
      'r.p2.d': 'YOLOv8 + MediaPipe asosida real vaqtda talabalar diqqatini kuzatuvchi tizim, jonli boshqaruv paneli bilan.',
      'r.p3.t': "Fe'l-atvorli — yuz va xatti-harakatni aniqlash",
      'r.p3.d': 'InsightFace asosida real vaqtda yuzni aniqlash va sifat nazorati (quality gate) tizimi.',
      'r.p4.t': 'Shaharlararo taksi roboti',
      'r.p4.d': "GPS kuzatuvi va Telegram mini-ilova (Aiogram 3 + FastAPI) asosidagi ko'p botli transport platformasi.",
      'r.p5.t': "Qonuniy RAG — O'zbekiston",
      'r.p5.d': "Konstitutsiya va Jinoyat kodeksi bo'yicha huquqiy yordamchi (BM25 + FAISS + RRF + reranker + Gemini).",
      'r.p6.t': "O'zbek gibrid qidiruv",
      'r.p6.d': "O'zbek Vikipediyasi bo'yicha gibrid qidiruv tizimi (BM25 + FAISS + RRF, ixtiyoriy qayta reytinglash).",
      'r.moreProjects': "Barcha loyihalar (VLT, Aqcha choyxonasi, Tafakkur bot va boshqalar) — bosh sahifada.",
      'r.langTitle': 'Tillar',
      'r.lang.en': "Boshlang'ich · texnik matn",
      'r.contactTitle': 'Aloqa',
      'r.note': 'Telefon raqami PDF versiyada keltirilgan.'
    },

    en: {
      'meta.title': 'Avazbek Yoqubov — AI & Machine Learning Engineer',
      'meta.resumeTitle': 'Résumé — Avazbek Yoqubov',

      'a11y.skip': 'Skip to content',
      'a11y.nav': 'Main navigation',
      'a11y.brand': 'Avazbek Yoqubov — home',
      'a11y.themeToLight': 'Switch to light theme',
      'a11y.themeToDark': 'Switch to dark theme',
      'a11y.menu': 'Open menu',
      'a11y.menuClose': 'Close menu',
      'a11y.social': 'Social links',
      'a11y.close': 'Close',

      'nav.home': 'Home', 'nav.projects': 'Projects', 'nav.lab': 'AI Lab',
      'nav.experience': 'Experience', 'nav.about': 'About', 'nav.contact': 'Contact',
      'nav.cta': 'Contact me', 'nav.resume': 'Résumé',

      'hero.status': "Programming instructor at Najot Ta'lim",
      'hero.eyebrow': 'AI & Machine Learning Engineer',
      'hero.lead': 'I build intelligent systems with machine learning, computer vision, RAG, LLM applications and scalable Python backends.',
      'hero.ctaProjects': 'Explore projects',
      'hero.ctaResume': 'Download résumé',
      'hero.ctaContact': 'Contact me',
      'hero.fact1': 'live products with real users',
      'hero.fact2': 'automated tests across Choyxona and VLT',
      'hero.fact3': 'projects — CV, RAG, backend and bots',

      'projects.eyebrow': 'Selected work',
      'projects.title': 'Projects',
      'projects.lead': 'Every project started from a real problem. Each card shows the problem, what I built, the stack and verified results.',
      'projects.moreTitle': 'More projects',
      'projects.allRepos': 'All repositories',

      'lab.title': 'How the systems are built',
      'lab.lead': 'Simplified architecture diagrams from my real projects — each one lists the projects where it is used.',
      'lab.usedIn': 'Used in:',
      'lab.cv.sub': 'Attendance and attention from a camera feed',
      'lab.cv.s1': 'detect and track', 'lab.cv.s2': 'recognize who it is', 'lab.cv.s3': 'pose and gaze',
      'lab.cv.s4': 'Behavior engine', 'lab.cv.s4b': 'attention score, risk, states',
      'lab.cv.used2': 'Attention monitor',
      'lab.rag.sub': 'Answers grounded in sources',
      'lab.rag.s0': 'Question', 'lab.rag.s1': 'lexical + semantic retrieval', 'lab.rag.s2': 'reranking',
      'lab.rag.s3': 'temperature 0, context only', 'lab.rag.s4': 'Cited answer',
      'lab.rag.s4b': 'with article number, or "not found"',
      'lab.rag.used3': 'Uzbek hybrid search',
      'lab.be.sub': 'Reliable ordering and ERP systems',
      'lab.be.s0': 'clients', 'lab.be.s2': 'Service layer', 'lab.be.s2b': 'state machine, idempotency, Unit of Work',
      'lab.be.s4': 'Background jobs', 'lab.be.s4b': 'PostgreSQL queue, APScheduler',
      'lab.be.used3': 'Taxi',
      'lab.apps.title': 'AI-powered apps', 'lab.apps.sub': 'When AI runs inside a product',
      'lab.apps.f1': 'AI admin assistant (ERP)', 'lab.apps.f1a': 'Request', 'lab.apps.f1b': 'role check', 'lab.apps.f1c': 'scoped tool',
      'lab.apps.f2': 'Face sign-in (ERP)', 'lab.apps.f2a': 'Camera', 'lab.apps.f2b': 'cosine match',
      'lab.apps.f3': 'Trip-intent detection (Taxi)', 'lab.apps.f3a': 'Group message', 'lab.apps.f3b': 'keywords',
      'lab.apps.f3c': 'Claude (optional)', 'lab.apps.f3d': 'to driver',

      'exp.eyebrow': 'Path', 'exp.title': 'Experience',
      'exp.j1.role': 'Programming Instructor · Support Teacher', 'exp.j1.time': '2026 — now · 8 mo',
      'exp.j1.b1': 'Teach C and Python at Foundation level',
      'exp.j1.b2': 'Create interactive course materials on OOP and Git/GitHub',
      'exp.j1.b3': 'Support students in hands-on sessions and review their code',
      'exp.j2.role': 'Freelance developer', 'exp.j2.time': '2026 · 5 mo', 'exp.j2.org': 'Client and personal projects',
      'exp.j2.b1': "ERP and admissions site for Qorako'l Ilm Ziyo — running in production",
      'exp.j2.b2': 'Paid-subscription Telegram bot for Tafakkur learning center',
      'exp.j2.b3': 'Full cycle: backend, AI/ML models, deployment and support',
      'skills.title': 'Technologies',

      'about.eyebrow': 'About',
      'about.title': 'Practical AI for real problems',
      'about.photoAlt': 'Portrait of Avazbek Yoqubov',
      'about.p1': 'I build practical AI systems — from computer vision pipelines that measure student attention from a camera feed to RAG assistants that answer strictly from official text.',
      'about.p2': 'I start every project from a real problem and take it all the way: backend, database, tests and deployment. The ERP and Telegram bot I built for education centers serve real users today.',
      'about.p3': "I teach C and Python at Najot Ta'lim. In my project READMEs I state openly what works and what is not finished yet.",
      'about.focusTitle': 'Focus areas', 'about.focus3': 'Education technology',
      'about.langTitle': 'Languages',
      'lang.uz': 'Uzbek', 'lang.en': 'English', 'lang.ru': 'Russian',
      'lang.native': 'Native', 'lang.beginner': 'Beginner',

      'contact.eyebrow': 'Contact', 'contact.title': "Let's work together",
      'contact.lead': 'Have a project, a job offer or a question? Write to me — I usually reply within a day.',
      'contact.pdf': 'Résumé (PDF)', 'contact.online': 'Online résumé →',
      'footer.resume': 'Online résumé', 'footer.top': 'Back to top ↑', 'footer.home': 'Home',

      'p.live': 'Live', 'p.private': 'Private code',
      'p.problem': 'Problem', 'p.built': 'What I built', 'p.features': 'What was built',
      'p.results': 'Results', 'p.gallery': 'Screenshots',
      'p.details': 'Details', 'p.site': 'Open site', 'p.bot': 'Open bot', 'p.code': 'GitHub',
      'p.privateNote': 'The code is private — available to show on request.',
      'p.detailsOf': 'details',

      'r.back': '← Home',
      'r.download': 'Download PDF',
      'r.print': 'Print',
      'r.role': 'AI & Machine Learning',
      'r.summaryTitle': 'Summary',
      'r.summary': 'Python developer and programming instructor specializing in Django/DRF and artificial intelligence. Studied machine learning foundations (linear algebra, statistics, gradient-based optimization, PyTorch, CNN/RNN) and has experience building computer vision (YOLOv8, MediaPipe, InsightFace), RAG and hybrid search systems (FAISS, BM25), and backend/ERP systems (Django, FastAPI) from scratch. Uses modern AI tools (Claude Code) effectively to deliver complex projects quickly and with quality.',
      'r.skillsTitle': 'Skills',
      'r.sk.backend': 'Backend', 'r.sk.ai': 'AI / ML', 'r.sk.rag': 'RAG / Search',
      'r.sk.front': 'Desktop / Frontend', 'r.sk.int': 'Integrations', 'r.sk.tools': 'Tools',
      'r.sk.frontV': 'PyQt5, Next.js (basics)', 'r.sk.intV': 'Telegram bots, Cloudinary',
      'r.expTitle': 'Experience',
      'r.e1.role': 'Programming Instructor', 'r.e1.time': '2026 — now',
      'r.e1.b1': 'Teaches C and Python at Foundation level',
      'r.e1.b2': 'Prepares interactive course materials on OOP and Git/GitHub',
      'r.e2.role': 'Support Teacher', 'r.e2.time': '8 months',
      'r.e3.role': 'Freelance Developer', 'r.e3.org': 'Personal and client projects', 'r.e3.time': '2026 · 5 months',
      'r.e3.b1': 'Designed and built the projects below from scratch',
      'r.e3.b2': 'Full stack: backend, AI/ML models and deployment',
      'r.projTitle': 'Projects',
      'r.p1.t': "Qorako'l Ilm Ziyo — Education center management system (live)",
      'r.p1.d': 'Management system for education centers: student, schedule and payment tracking, automated reports, a real-time analytics dashboard and gamification (XP/coins). Backend in Django + DRF, frontend built with AI assistance. A product in production.',
      'r.p2.t': 'Classroom attention monitor',
      'r.p2.d': 'Real-time student attention tracking with YOLOv8 + MediaPipe and a live dashboard.',
      'r.p3.t': 'Fecid — face and behavior detection',
      'r.p3.d': 'Real-time face recognition with InsightFace and a quality gate.',
      'r.p4.t': 'Intercity taxi bot',
      'r.p4.d': 'Multi-bot transport platform with GPS tracking and a Telegram Mini App (Aiogram 3 + FastAPI).',
      'r.p5.t': 'Legal RAG — Uzbekistan',
      'r.p5.d': 'Legal assistant for the Constitution and the Criminal Code (BM25 + FAISS + RRF + reranker + Gemini).',
      'r.p6.t': 'Uzbek hybrid search',
      'r.p6.d': 'Hybrid search over Uzbek Wikipedia (BM25 + FAISS + RRF, optional reranking).',
      'r.moreProjects': 'All projects (VLT, Aqcha Choyxona, Tafakkur bot and more) are on the home page.',
      'r.langTitle': 'Languages',
      'r.lang.en': 'Beginner · technical text',
      'r.contactTitle': 'Contact',
      'r.note': 'Phone number is included in the PDF version.'
    }
  };

  // ------------------------------------------------------------------
  // Rasmlar: o'lcham (layout siljimasligi uchun) va alt matn
  // ------------------------------------------------------------------
  var IMG = {
    'erp-dashboard':     [1400, 875, 'ERP boshqaruv paneli', 'ERP dashboard'],
    'erp-students':      [1400, 875, "ERP — o'quvchilar ro'yxati", 'ERP — students list'],
    'erp-finance':       [1400, 875, "ERP — moliya bo'limi", 'ERP — finance module'],
    'erp-login':         [1400, 875, 'ERP — kirish sahifasi', 'ERP — sign-in page'],
    'qorakol-landing-1': [1400, 695, 'Qabul sayti — bosh ekran', 'Admissions site — hero screen'],
    'qorakol-landing-2': [1400, 671, 'Qabul sayti — qanday ishlaydi', 'Admissions site — how it works'],
    'tafakkur-cover':    [455, 782, "Tafakkur bot profili Telegram'da", 'Tafakkur bot profile in Telegram'],
    'tafakkur-1':        [1394, 787, 'Tafakkur bot — quizlar va menyu', 'Tafakkur bot — quizzes and menu'],
    'tafakkur-2':        [1382, 782, 'Tafakkur bot — profil', 'Tafakkur bot — profile'],
    'taxi-search':       [420, 800, 'Mini App — shahar tanlash', 'Mini App — city picker'],
    'taxi-map':          [420, 800, 'Mini App — xaritada manzil tanlash', 'Mini App — map picker']
  };

  // ------------------------------------------------------------------
  // Loyihalar
  //   featured: katta kartochka; span: 7 yoki 5 (12 ustunli to'r)
  //   media: browser | phones | timing | pipe
  //   results: [qiymat, uz, en] — faqat tekshirilgan raqamlar
  // ------------------------------------------------------------------
  var PROJECTS = [
    {
      id: 'erp', featured: true, span: 7, live: true,
      media: { type: 'browser', src: 'erp-dashboard', url: 'erp.qorakolilmziyo.uz' },
      gallery: ['erp-dashboard', 'erp-students', 'erp-finance', 'erp-login'],
      links: { site: 'https://erp.qorakolilmziyo.uz', code: GH + 'edu_erp' },
      tags: ['Django', 'DRF', 'PostgreSQL', 'Claude API', 'InsightFace', 'Render'],
      results: [['35', 'test fayli', 'test files'], ['3', 'kengaytma: AI, yuz, ZUKKO', 'add-ons: AI, face, ZUKKO']],
      uz: {
        category: "Ta'lim · ERP",
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
        category: 'Education · ERP',
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
      id: 'choyxona', featured: true, span: 5, private: true,
      media: { type: 'timing' },
      tags: ['Django 5.2', 'DRF', 'PostgreSQL 17', 'Next.js 16', 'TypeScript', 'Tailwind 4'],
      results: [['1160', 'avtomatik test', 'automated tests'], ['11', 'Django ilova', 'Django apps'], ['4', 'buyurtma turi', 'order types']],
      uz: {
        category: 'Buyurtma platformasi',
        title: 'Aqcha choyxonasi',
        summary: 'Qishloq uchun taom buyurtma tizimi: yetkazish, olib ketish, joyida va oldindan buyurtma.',
        problem: "Qishloqda GPS ham, ko'cha-uy raqami ham yo'q, internet sekin, to'lov asosan naqd — Yandex Eats kabi ilovalar bu sharoitda ishlamaydi. Mijoz esa choyxonaga kelib taomni kutib o'tiradi.",
        solution: "Qishloq sharoitiga qurilgan buyurtma tizimi. Mijoz 19:00 ga buyurtma beradi — tizim tayyorlanish vaqtini hisoblab, oshxonaga 18:25 da boshlashni aytadi. Mijoz kelganda taom tayyor.",
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
        category: 'Ordering platform',
        title: 'Aqcha Choyxona',
        summary: 'Food ordering built for villages: delivery, pickup, dine-in and pre-orders.',
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
      id: 'tafakkur', featured: true, span: 5, live: true,
      media: { type: 'phones', srcs: ['tafakkur-cover'] },
      gallery: ['tafakkur-1', 'tafakkur-2'],
      links: { bot: 'https://t.me/tmbookuzbot' },
      tags: ['Python', 'Telegram Bot API', 'Subscription'],
      results: [['300+', 'fayl bazada', 'files in library'], ['1–11', 'sinflar uchun quiz', 'grades with quizzes']],
      uz: {
        category: 'Telegram bot · Obuna',
        title: 'Tafakkur markazi — bot',
        summary: 'Kitob javoblari, quizlar va pullik obuna — bitta Telegram botda.',
        problem: "O'quvchilar darslik va mashq kitoblarining javoblarini internetdan qidirib yuradi, markaz esa tayyorlagan kontentidan daromad ololmaydi.",
        solution: "Telegram bot: kitoblar va ularning javoblari, 1–11 sinflar bo'yicha quizlar va natijalar. Kontentga kirish pullik obuna orqali, adminlar hammasini botning o'zidan boshqaradi.",
        features: [
          'Kitoblar va javoblar bazasi — 300+ fayl',
          '1–11 sinflar uchun quizlar va natijalar',
          "Pullik obuna va to'lovlar bo'limi",
          "Admin panel: kitob qo'shish, adminlar va sozlamalar"
        ]
      },
      en: {
        category: 'Telegram bot · Subscription',
        title: 'Tafakkur center — bot',
        summary: 'Textbook answers, quizzes and a paid subscription — in one Telegram bot.',
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
      id: 'vlt', featured: true, span: 7,
      media: { type: 'pipe', kind: 'vlt' },
      links: { code: GH + 'VLT' },
      tags: ['YOLO11', 'InsightFace', 'RTMPose', 'FastAPI', 'React 19', 'TypeScript'],
      results: [['382', 'backend test', 'backend tests'], ['65', 'frontend test', 'frontend tests'], ['17', 'dashboard sahifasi', 'dashboard pages']],
      uz: {
        category: 'Computer Vision',
        title: 'VLT — sinf intellekti',
        summary: 'Kamera oqimidan davomat, diqqat va xulq-atvorni real vaqtda tahlil qiladigan platforma.',
        problem: "Bitta o'qituvchi 30 ta o'quvchining diqqatini bir vaqtda kuzata olmaydi: kim chalg'iyapti, kim darsdan uzilib qolgani faqat imtihonda ma'lum bo'ladi.",
        solution: "Kamera oqimini bir nechta AI model orqali tahlil qiladigan platforma: o'quvchini taniydi, davomatni o'zi belgilaydi, diqqat darajasini real vaqtda hisoblaydi va o'qituvchiga tavsiyalar beradi.",
        features: [
          'Vision pipeline: YOLO11 → ByteTrack → InsightFace → RTMPose → FaceMesh → HeadPose → Gaze',
          'Yuz orqali avtomatik davomat',
          'Xulq-atvor dvigateli: diqqat balli, xavf darajasi, holatlar mashinasi',
          'Prognozlar, tavsiyalar, dars xulosasi, heatmaplar va Digital Twin',
          'React 19 + TypeScript dashboard — 17 sahifa, WebSocket orqali jonli yangilanish',
          '382 backend + 65 frontend testi'
        ]
      },
      en: {
        category: 'Computer Vision',
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
      id: 'legal', featured: true, span: 7,
      media: { type: 'pipe', kind: 'rag' },
      links: { code: GH + 'legal-rag-uzbekistan' },
      tags: ['BM25', 'FAISS', 'RRF', 'Cross-encoder', 'Gemini', 'Streamlit'],
      results: [['2', 'bilim bazasi: Konstitutsiya, JK', 'knowledge bases: Constitution, Criminal Code']],
      uz: {
        category: 'RAG · LLM',
        title: "Qonuniy RAG — O'zbekiston",
        summary: "Konstitutsiya va Jinoyat kodeksi bo'yicha faqat rasmiy matnga tayanadigan yordamchi.",
        problem: "Oddiy fuqaro qonunni o'qib tushunishi qiyin, ChatGPT kabi modellar esa mavjud bo'lmagan moddalarni o'ylab topadi.",
        solution: "Javobni faqat Konstitutsiya va Jinoyat kodeksining rasmiy matniga tayanib beradigan yordamchi: har bir javobda modda raqami ko'rsatiladi, topilmasa — ochiq aytadi.",
        features: [
          "Gibrid qidiruv: BM25 (so'z bo'yicha) + FAISS (ma'no bo'yicha)",
          'Reciprocal Rank Fusion bilan natijalarni birlashtirish',
          'Cross-encoder reranker — aniqroq yakuniy tartib',
          'Gemini 2.5 Flash, temperature=0, gallyutsinatsiyaga qarshi prompt',
          'Manba paneli: qaysi moddalar ishlatilgani va ularning ballari'
        ]
      },
      en: {
        category: 'RAG · LLM',
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
      id: 'taxi', featured: true, span: 5,
      media: { type: 'phones', srcs: ['taxi-search', 'taxi-map'] },
      gallery: ['taxi-search', 'taxi-map'], phoneGallery: true,
      links: { code: GH + 'intercity-taxi-bot' },
      tags: ['Aiogram 3', 'FastAPI', 'WebSocket', 'SQLAlchemy', 'Docker'],
      results: [['3', "alohida bot + Mini App", 'separate bots + Mini App']],
      uz: {
        category: 'Telegram · Mini App',
        title: 'Shaharlararo taksi',
        summary: "Safar band qilish va haydovchini jonli GPS orqali kuzatish.",
        problem: "Namangan ⇄ Toshkent taksilari Telegram guruhlarida tartibsiz topiladi: yo'lovchi haydovchi qayerdaligini bilmaydi, bitta buyurtmaga bir nechta haydovchi yopishadi.",
        solution: "Yo'lovchi, haydovchi va admin uchun alohida botlar hamda Mini App: safar qidirish va band qilish, pochta jo'natish, haydovchini xaritada jonli kuzatish.",
        features: [
          "3 ta alohida bot — yo'lovchi, haydovchi, admin",
          'Claim tizimi: buyurtmani faqat bitta haydovchi oladi',
          'Jonli GPS — WebSocket orqali, HMAC bilan imzolangan',
          "Guruh xabarlaridan safar niyatini aniqlash (kalit so'z + ixtiyoriy Claude)",
          'Reyting, safar tarixi va APScheduler vazifalari'
        ]
      },
      en: {
        category: 'Telegram · Mini App',
        title: 'Intercity taxi',
        summary: 'Trip booking and live GPS tracking of the driver.',
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

    // ---------------- Boshqa loyihalar (kichik kartochkalar) ----------------
    {
      id: 'landing', ico: 'globe', live: true,
      gallery: ['qorakol-landing-1', 'qorakol-landing-2'],
      links: {},
      tags: ['Web', 'ERP integration'],
      uz: {
        category: 'Veb-sayt',
        title: "Qorako'l Ilm Ziyo — qabul sayti",
        summary: "Kursga yozilish va oylik matematika musobaqasiga ro'yxatdan o'tish — ERP bilan ulangan.",
        problem: "Markazga yozilmoqchi bo'lganlar va musobaqa ishtirokchilari telefon va qog'oz orqali ro'yxatga olinardi — arizalar yo'qolib, operatorlar ortiqcha ish qilardi.",
        solution: "Onlayn qabul sayti: forma to'ldiriladi, operator qo'ng'iroq qilib tasdiqlaydi, natijalar va g'oliblar shu saytda e'lon qilinadi. Arizalar to'g'ridan-to'g'ri ERP'ga tushadi.",
        features: [
          "1–11 sinflar uchun oylik matematika musobaqasiga ro'yxat",
          'Kursga yozilish arizasi',
          "G'oliblar va natijalar sahifasi",
          "ERP bilan bog'langan — arizalar avtomatik tizimga tushadi"
        ]
      },
      en: {
        category: 'Website',
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
      id: 'attention', ico: 'eye',
      links: { code: GH + 'classroom-attention-monitor' },
      tags: ['YOLOv8', 'MediaPipe', 'Streamlit'],
      uz: {
        category: 'Computer Vision',
        title: 'Sinfdagi diqqat monitori',
        summary: "Telefon, bosh holati va ko'z signallaridan uxlash va chalg'ishni aniqlash.",
        problem: "O'qituvchi dars davomida kim uxlayotgani yoki telefon o'ynayotganini doim ko'ra olmaydi.",
        solution: "VLT'ning birinchi versiyasi: YOLOv8 telefonni, MediaPipe bosh holati va ko'z yumilishini aniqlaydi, signallar birlashtirilib har bir o'quvchiga diqqat holati beriladi.",
        features: [
          'YOLOv8 bilan telefonni aniqlash va kuzatish',
          'MediaPipe: bosh holati (pitch/yaw/roll) va EAR orqali uyquni aniqlash',
          'Signallarni birlashtirib yagona diqqat holati',
          'Streamlit dashboard, CSV/PDF hisobotlar'
        ]
      },
      en: {
        category: 'Computer Vision',
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
      id: 'fecid', ico: 'face',
      links: { code: GH + 'fecid' },
      tags: ['InsightFace', 'OpenCV', 'ONNX Runtime'],
      uz: {
        category: 'Computer Vision',
        title: "Fe'l-atvorli — yuzni tanish",
        summary: 'Liveness va sifat nazorati bilan real vaqtda yuzni tanish.',
        problem: "Oddiy yuzni tanish tizimini telefondagi rasm bilan aldash mumkin, xira kadrda esa u noto'g'ri odamni taniydi.",
        solution: "InsightFace asosida real vaqtda tanish: avval kadr sifati, keyin tiriklik (liveness) tekshiriladi, shundan so'ng embedding solishtiriladi. Ro'yxatga olish uchun bitta rasm yetarli.",
        features: [
          "InsightFace embeddinglari va kosinus o'xshashlik",
          "Liveness — rasm ko'rsatib aldashga qarshi",
          'Sifat nazorati — xira kadrlar tanishga yetib bormaydi',
          "Kamera orqali jonli ro'yxatga olish"
        ]
      },
      en: {
        category: 'Computer Vision',
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
      id: 'ustoz', ico: 'book',
      links: { code: GH + 'ai-ustoz' },
      tags: ['Ollama', 'ChromaDB', 'BM25'],
      uz: {
        category: 'RAG · Offline LLM',
        title: 'AI Ustoz',
        summary: 'Internetsiz ishlaydigan AI ustoz — hujjatlar kompyuterdan chiqmaydi.',
        problem: "Darslik va ma'ruzalar kabi ichki hujjatlarni bulutdagi AI xizmatlariga yuklab bo'lmaydi.",
        solution: "To'liq offline RAG: PDF/DOCX/PPTX yuklanadi, gibrid qidiruv (ChromaDB + BM25) va mahalliy Ollama modeli faqat yuklangan materialdan javob beradi.",
        features: [
          'PDF, DOCX, PPTX hujjatlarni yuklash',
          'Gibrid qidiruv: ChromaDB (dense) + BM25 (sparse)',
          'Mahalliy Ollama LLM — API kalit va internet kerak emas',
          'Ollama ishlamasa ham ilova qulamaydi'
        ]
      },
      en: {
        category: 'RAG · Offline LLM',
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
      id: 'uzsearch', ico: 'search',
      links: { code: GH + 'uzbek-hybrid-search' },
      tags: ['BM25', 'FAISS', 'RRF'],
      uz: {
        category: 'Qidiruv · IR',
        title: "O'zbek gibrid qidiruv",
        summary: "O'zbek Vikipediyasi bo'yicha so'z va ma'no asosidagi qidiruv.",
        problem: "O'zbek tili uchun sifatli semantik qidiruv vositalari kam, oddiy kalit so'z qidiruvi esa ma'noni tushunmaydi.",
        solution: "O'zbek Vikipediyasidagi 15 000 maqola bo'yicha gibrid qidiruv: BM25 va FAISS natijalari RRF bilan birlashtiriladi, ixtiyoriy cross-encoder bilan qayta tartiblanadi.",
        features: [
          "BM25 + ko'p tilli sentence-transformers embeddinglari (FAISS)",
          'Reciprocal Rank Fusion, k=60',
          'Ixtiyoriy cross-encoder reranking',
          'BM25 / Dense / Hybrid ni solishtirish uchun baholash skripti'
        ]
      },
      en: {
        category: 'Search · IR',
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
      id: 'vtaxi', ico: 'layers',
      links: { code: GH + 'vtaxi' },
      tags: ['Clean Architecture', 'DDD', 'SQLAlchemy 2.0'],
      uz: {
        category: 'Arxitektura',
        title: 'VTaxi — arxitektura',
        summary: 'Clean Architecture va DDD asosidagi taksi backend namunasi.',
        problem: "Tez yozilgan botni yangi shahar yoki xizmat qo'shilganda qaytadan yozishga to'g'ri keladi.",
        solution: "Domen, ilova va infratuzilma qatlamlari ajratilgan backend: yangi yo'nalish — kod emas, ma'lumot o'zgarishi. Arxitektura namunasi sifatida chop etilgan.",
        features: [
          'Band qilish holat mashinasi: PENDING → RESERVED → ACCEPTED → COMPLETED',
          "Bounded context'lar: identity, trip, vehicle, booking",
          'Async SQLAlchemy 2.0, Unit of Work, Alembic, Dishka DI',
          "Joylar sonini xizmatlar o'rtasida sinxronlash"
        ]
      },
      en: {
        category: 'Architecture',
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

  // ------------------------------------------------------------------
  // Ko'nikmalar — mantiqiy guruhlar ("uz|en" — tarjimasi bor element)
  // ------------------------------------------------------------------
  var SKILLS = [
    { uz: 'Dasturlash tillari', en: 'Programming languages',
      items: ['Python', 'C', 'TypeScript (asosiy)|TypeScript (basics)'] },
    { uz: 'Machine Learning / Deep Learning', en: 'Machine Learning / Deep Learning',
      items: ['PyTorch', 'NumPy', 'Pandas', 'CNN / RNN', 'Chiziqli algebra|Linear algebra', 'Statistika|Statistics', 'Gradient optimizatsiya|Gradient-based optimization'] },
    { uz: 'Computer Vision', en: 'Computer Vision',
      items: ['YOLOv8 / YOLO11', 'MediaPipe', 'InsightFace', 'OpenCV', 'RTMPose', 'ByteTrack', 'ONNX Runtime'] },
    { uz: 'LLM / RAG', en: 'LLM / RAG',
      items: ['FAISS', 'BM25', 'RRF', 'Cross-encoder', 'ChromaDB', 'sentence-transformers', 'Gemini API', 'Claude API', 'Ollama'] },
    { uz: "Backend / Ma'lumotlar bazasi", en: 'Backend / Databases',
      items: ['Django', 'DRF', 'FastAPI', 'Aiogram 3', 'SQLAlchemy 2.0', 'PostgreSQL', 'SQLite', 'WebSocket', 'JWT'] },
    { uz: 'Vositalar / Deploy', en: 'Tools / Deployment',
      items: ['Git / GitHub', 'Docker', 'Render', 'pytest', 'Cloudinary', 'Streamlit', 'Next.js', 'PyQt5', 'Claude Code'] }
  ];

  return { STRINGS: STRINGS, IMG: IMG, PROJECTS: PROJECTS, SKILLS: SKILLS };
})();
