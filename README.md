# Avazbek Yoqubov — portfolio

Shaxsiy portfolio: loyihalar, AI Lab, tajriba va onlayn rezyume. O'zbek va ingliz tillarida, qorong'i (asosiy) va yorug' mavzu.

**Sayt:** https://avazbek.is-a.dev/ · **Rezyume:** [/resume/](https://avazbek.is-a.dev/resume/)

Oddiy statik sayt — build va bog'liqliklar yo'q, GitHub Pages `main` branch ildizidan xizmat qiladi.

```
index.html              bosh sahifa
resume/index.html       onlayn rezyume (chop etishga mos)
assets/css/base.css     dizayn tokenlari, shisha materiallari, navbar, tugmalar
assets/css/home.css     bosh sahifa bo'limlari
assets/css/resume.css   rezyume sahifasi + @media print
assets/js/content.js    barcha matnlar (uz/en), loyihalar, ko'nikmalar
assets/js/site.js       til, mavzu, mobil menyu, scrollspy
assets/js/home.js       loyiha kartochkalari va modal
assets/                 rasmlar, skrinshotlar, rezyume PDF
```

Lokal ko'rish:

```
python -m http.server 8000
```

→ http://localhost:8000

Yangi loyiha qo'shish — `assets/js/content.js` dagi `PROJECTS` ro'yxatiga bitta obyekt (`uz` va `en` matnlari bilan). Natijalar (`results`) ga faqat tekshirilgan raqamlar yoziladi.
