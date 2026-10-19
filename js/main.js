/* ═══════════════════════════════════════════════════════════════
   SNAPPY STUDY — MARKETING WEBSITE — main.js
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════════
     TRANSLATIONS
  ══════════════════════════════════════════════════════════════ */
  var T = {
    en: {
      // Nav
      navCta: 'Download Free',
      // Hero
      heroBadge:  '🎉 Free 7-day trial · No card required',
      heroTitle:  'Homework just got <span class="highlight">a lot easier</span>',
      heroSub:    'Snap a photo of any worksheet or textbook page. Snappy Study\'s AI explains it in seconds — in your child\'s language, broken into clear sections, with read-aloud audio for every part.',
      heroNote:   'Available on iOS & Android · Free to try',
      // How it works
      howEyebrow: 'Simple by design',
      howTitle:   'Up and running in under a minute',
      howSub:     'No complicated setup. Just scan and study.',
      step1Title: 'Create a family account',
      step1Body:  'Sign up as a parent, add your children. Each child gets a unique QR code to log in instantly — no passwords needed.',
      step2Title: 'Snap the homework',
      step2Body:  'Your child opens the app, points the camera at a worksheet or textbook page, and taps the shutter button.',
      step3Title: 'Get a clear explanation',
      step3Body:  'AI breaks the content into 2–4 short sections. Each section has its own read-aloud button so kids can listen at their own pace.',
      step4Title: 'Parents stay in the loop',
      step4Body:  'You see every scan your children do in real time from your parent dashboard — what they studied and when.',
      // Features
      featuresEyebrow: 'Everything parents love',
      featuresTitle:   'Built for busy families',
      featuresSub:     'Powerful AI under the hood — a simple, safe experience on the surface.',
      feat1Title: 'Instant AI explanations',
      feat1Body:  'Point the camera at any homework page. Our AI reads it, understands the subject, and delivers a clear, age-appropriate explanation in seconds — no typing required.',
      feat1Li1:   'Works with maths, science, languages & more',
      feat1Li2:   'Step-by-step guidance for tricky problems',
      feat1Li3:   'Student-friendly language, always',
      feat2Title: 'Section-by-section audio',
      feat2Body:  'Each part of the explanation has its own play button. Kids can listen to exactly the bit they\'re stuck on, as many times as they need, without restarting the whole thing.',
      feat3Title: '16 languages',
      feat3Body:  'From English and Spanish to Arabic and Japanese — Snappy Study explains homework in the language your child is most comfortable with, supporting bilingual and multilingual families.',
      feat4Title: 'Parent activity feed',
      feat4Body:  'See every scan your children have done, with timestamps and a preview of what was explained. Stay close to your child\'s learning without hovering over their shoulder.',
      feat5Title: 'Safe content filter',
      feat5Body:  'Every image is checked before it\'s analysed. Snappy Study only works on genuine educational content — photos of pets, people, or random objects are politely refused.',
      feat6Title: 'QR code child login',
      feat6Body:  'No passwords to remember. Each child gets a personal QR code. They scan it on their device and they\'re in — safe, simple, and impossible to forget.',
      // Screenshots
      screenshotsEyebrow: 'See it in action',
      screenshotsTitle:   'Clean, intuitive design kids actually use',
      // Testimonials
      testimonialsEyebrow: 'Parents love it',
      testimonialsTitle:   'Real families, real results',
      // Pricing
      pricingEyebrow:   'Simple pricing',
      pricingTitle:     'Two plans. Pick what fits your family.',
      pricingSub:       'Try Standard free for 7 days. No credit card required.',
      // Free trial card
      priceFreeperiod:  'for 7 days',
      priceFreeDesc:    'Try the Standard plan free. No card needed. Cancel any time.',
      priceF1: '✓ Unlimited image analysis',
      priceF2: '✓ All 16 languages',
      priceF3: '✓ Section-by-section audio',
      priceF4: '✓ 1 child profile',
      priceF5: '✓ Parent activity feed',
      priceF6: '✓ QR code child login',
      priceFreeBtn:    'Start free trial',
      // Standard card
      priceStandardperiod: '/ month',
      priceStandardDesc:   'Everything in the trial, forever. Billed monthly. Cancel any time.',
      priceS1: '✓ Unlimited image analysis',
      priceS2: '✓ All 16 languages',
      priceS3: '✓ Section-by-section audio',
      priceS4: '✓ 1 child profile',
      priceS5: '✓ Parent activity feed',
      priceS6: '✓ QR code child login',
      priceStandardBtn:    'Get Standard',
      pricingNoteStandard: 'Less than a cup of coffee a month ☕',
      // Family card (most popular)
      priceFamilyperiod: '/ month',
      priceFamilyDesc:   'For households with multiple kids. Billed monthly. Cancel any time.',
      priceP1: '✓ Unlimited image analysis',
      priceP2: '✓ All 16 languages',
      priceP3: '✓ Section-by-section audio',
      priceP4: '✓ Up to 4 child profiles',
      priceP5: '✓ Parent activity feed',
      priceP6: '✓ QR code child login',
      priceP7: '✓ Priority support',
      pricePaidBtn:  'Get Family',
      pricingNote:   'Just €3.25 per child ☕',
      // CTA
      ctaTitle: 'Start helping with homework tonight',
      ctaSub:   'Download Snappy Study free. Your child can be taking their first snap in under 2 minutes.',
      // Nav links
      navFeatures:    'Features',
      navHow:         'How it works',
      navScreenshots: 'Screenshots',
      navPricing:     'Pricing',
      // Social proof
      proof1: 'Languages supported',
      proof2: 'Powered explanations',
      proof3: 'Clear sections per answer',
      proof4: 'Safe content filter',
      // Screenshots captions
      sc1Title: 'Parent activity feed',
      sc1Sub:   'See every scan your child makes, in real time.',
      sc2Title: 'Instant AI analysis',
      sc2Sub:   'Each section explained clearly with play-to-listen audio.',
      sc3Title: 'One tap for kids',
      sc3Sub:   'Kids point the camera and get answers in seconds.',
      sc4Title: 'QR code pairing',
      sc4Sub:   'Add a child in seconds — no passwords needed.',
      // Testimonials
      t1Text:   '"My daughter was struggling with German vocabulary exercises. Within seconds Snappy Study gave her a clear breakdown with audio. She nailed the test."',
      t1Author: 'Mum of two, London',
      t2Text:   '"The activity feed is what sold me. I can see exactly what my kids are studying without asking them twenty times. It keeps me involved without being intrusive."',
      t2Author: 'Dad of three, Manchester',
      t3Text:   '"We\'re a bilingual family and the language support is fantastic. My son switches between Estonian and English depending on the subject. Works perfectly every time."',
      t3Author: 'Mum of one, Tallinn',
      // Pricing titles & badges
      badgeFree:           'Start here',
      priceFreeTitle:      'Free Trial',
      badgeStandard:       'Standard',
      priceStandardTitle:  'Standard',
      badgePaid:           'Most popular',
      priceFamilyTitle:    'Family',
      pricePaidTitle:      'Family',         // legacy key kept for cached page versions
      pricingGuarantee: '🔒 \u00a0Secure payment via App Store / Google Play billing. Your subscription is managed entirely through your device\'s app store.',
      // Footer
      footerTagline:  'AI homework help for families. Simple, safe, and effective.',
      footerProduct:  'Product',
      footerDownload: 'Download',
      footerLegal:    'Legal',
      footerAppStore:   'App Store (iOS)',
      footerGooglePlay: 'Google Play (Android)',
      footerPrivacy:  'Privacy Policy',
      footerTerms:    'Terms of Service',
      footerCookies:  'Cookie Policy',
      footerCopy:     '© 2025 Snappy Study. All rights reserved.',
      footerMade:     'Made with ❤️ for curious kids everywhere.',
    },

    ru: {
      navCta: 'Скачать бесплатно',
      heroBadge:  '🎉 Бесплатно 7 дней · Карта не нужна',
      heroTitle:  'Домашние задания стали <span class="highlight">намного проще</span>',
      heroSub:    'Сфотографируйте любой листок с заданиями или страницу учебника. ИИ Snappy Study объяснит всё за секунды — на языке вашего ребёнка, разбив ответ на понятные разделы с озвучкой.',
      heroNote:   'Доступно на iOS и Android · Попробуйте бесплатно',
      howEyebrow: 'Просто и понятно',
      howTitle:   'Готово к работе менее чем за минуту',
      howSub:     'Никаких сложных настроек. Просто снимайте и учитесь.',
      step1Title: 'Создайте семейный аккаунт',
      step1Body:  'Зарегистрируйтесь как родитель и добавьте детей. Каждый ребёнок получает уникальный QR-код для мгновенного входа — пароли не нужны.',
      step2Title: 'Сфотографируйте задание',
      step2Body:  'Ребёнок открывает приложение, направляет камеру на рабочий лист или страницу учебника и нажимает кнопку съёмки.',
      step3Title: 'Получите понятное объяснение',
      step3Body:  'ИИ разбивает содержимое на 2–4 коротких раздела. У каждого раздела есть кнопка воспроизведения, так что дети могут слушать в своём темпе.',
      step4Title: 'Родители всегда в курсе',
      step4Body:  'Вы видите каждый снимок ваших детей в реальном времени в родительской панели — что изучали и когда.',
      featuresEyebrow: 'Всё, что нужно родителям',
      featuresTitle:   'Создано для занятых семей',
      featuresSub:     'Мощный ИИ под капотом — простой и безопасный интерфейс на поверхности.',
      feat1Title: 'Мгновенные объяснения от ИИ',
      feat1Body:  'Наведите камеру на любое домашнее задание. Наш ИИ читает, понимает тему и выдаёт понятное возрасту объяснение за секунды — без печатания.',
      feat1Li1:   'Математика, наука, языки и многое другое',
      feat1Li2:   'Пошаговые подсказки для сложных задач',
      feat1Li3:   'Язык, понятный ученику, всегда',
      feat2Title: 'Аудио по разделам',
      feat2Body:  'У каждой части объяснения есть своя кнопка воспроизведения. Дети могут слушать именно то место, где застряли, столько раз, сколько нужно.',
      feat3Title: '16 языков',
      feat3Body:  'От английского и испанского до арабского и японского — Snappy Study объясняет домашние задания на языке, который наиболее удобен вашему ребёнку.',
      feat4Title: 'Лента активности для родителей',
      feat4Body:  'Видите все снимки, сделанные вашими детьми, с временными метками и предпросмотром объяснения. Будьте в курсе учёбы ребёнка, не стоя за его спиной.',
      feat5Title: 'Безопасный фильтр контента',
      feat5Body:  'Каждое изображение проверяется перед анализом. Snappy Study работает только с реальным учебным контентом — фотографии питомцев или случайных объектов вежливо отклоняются.',
      feat6Title: 'Вход ребёнка по QR-коду',
      feat6Body:  'Никаких паролей. Каждый ребёнок получает личный QR-код. Сканирует — и готово. Безопасно, просто и незабываемо.',
      screenshotsEyebrow: 'Посмотрите в действии',
      screenshotsTitle:   'Понятный дизайн, которым дети действительно пользуются',
      testimonialsEyebrow: 'Родители в восторге',
      testimonialsTitle:   'Реальные семьи, реальные результаты',
      pricingEyebrow:   'Простые тарифы',
      pricingTitle:     'Два плана. Выберите то, что подходит вашей семье.',
      pricingSub:       'Попробуйте «Стандарт» бесплатно 7 дней. Карта не нужна.',
      // Free trial card
      priceFreeperiod:  '7 дней',
      priceFreeDesc:    'Попробуйте план «Стандарт» бесплатно. Без карты. Отмена в любой момент.',
      priceF1: '✓ Безлимитный анализ изображений',
      priceF2: '✓ Все 16 языков',
      priceF3: '✓ Аудио по разделам',
      priceF4: '✓ 1 профиль ребёнка',
      priceF5: '✓ Лента активности родителей',
      priceF6: '✓ Вход по QR-коду',
      priceFreeBtn:    'Начать бесплатно',
      // Standard card
      priceStandardperiod: '/ месяц',
      priceStandardDesc:   'Всё из пробного периода навсегда. Ежемесячная оплата. Отмена в любой момент.',
      priceS1: '✓ Безлимитный анализ изображений',
      priceS2: '✓ Все 16 языков',
      priceS3: '✓ Аудио по разделам',
      priceS4: '✓ 1 профиль ребёнка',
      priceS5: '✓ Лента активности родителей',
      priceS6: '✓ Вход по QR-коду',
      priceStandardBtn:    'Выбрать Стандарт',
      pricingNoteStandard: 'Меньше чашки кофе в месяц ☕',
      // Family card
      priceFamilyperiod: '/ месяц',
      priceFamilyDesc:   'Для семей с несколькими детьми. Ежемесячная оплата. Отмена в любой момент.',
      pricePaidperiod: '/ месяц',
      pricePaidDesc:   'Для семей с несколькими детьми. Ежемесячная оплата. Отмена в любой момент.',
      priceP1: '✓ Безлимитный анализ изображений',
      priceP2: '✓ Все 16 языков',
      priceP3: '✓ Аудио по разделам',
      priceP4: '✓ До 4 профилей детей',
      priceP5: '✓ Лента активности родителей',
      priceP6: '✓ Вход по QR-коду',
      priceP7: '✓ Приоритетная поддержка',
      pricePaidBtn:  'Выбрать Family',
      pricingNote:   'Всего €3,25 на ребёнка ☕',
      ctaTitle: 'Начните помогать с домашними заданиями сегодня вечером',
      ctaSub:   'Скачайте Snappy Study бесплатно. Ребёнок сделает первый снимок менее чем через 2 минуты.',
      // Nav links
      navFeatures:    'Функции',
      navHow:         'Как это работает',
      navScreenshots: 'Скриншоты',
      navPricing:     'Цены',
      // Social proof
      proof1: 'Поддерживаемых языков',
      proof2: 'Умные объяснения',
      proof3: 'Чётких раздела в каждом ответе',
      proof4: 'Безопасный фильтр контента',
      // Screenshots captions
      sc1Title: 'Лента активности',
      sc1Sub:   'Видите каждый снимок вашего ребёнка в реальном времени.',
      sc2Title: 'Мгновенный анализ ИИ',
      sc2Sub:   'Каждая часть объяснена чётко, с кнопкой озвучки.',
      sc3Title: 'Один клик для детей',
      sc3Sub:   'Ребёнок наводит камеру — и за секунды получает ответы.',
      sc4Title: 'Привязка по QR-коду',
      sc4Sub:   'Добавьте ребёнка за секунды — никаких паролей.',
      // Testimonials
      t1Text:   '«Моя дочь никак не могла справиться с упражнениями по немецкой лексике. За секунды Snappy Study дал ей чёткое объяснение с озвучкой. Она блестяще сдала тест.»',
      t1Author: 'Мама двоих детей, Лондон',
      t2Text:   '«Меня покорила лента активности. Я вижу, что изучают мои дети, не спрашивая их по двадцать раз. Остаюсь в курсе, не мешая.»',
      t2Author: 'Папа троих детей, Манчестер',
      t3Text:   '«Мы двуязычная семья, и поддержка языков просто замечательная. Мой сын переключается между эстонским и английским в зависимости от предмета. Работает идеально.»',
      t3Author: 'Мама одного ребёнка, Таллин',
      // Pricing titles & badges
      badgeFree:           'Начните здесь',
      priceFreeTitle:      'Бесплатный период',
      badgeStandard:       'Стандарт',
      priceStandardTitle:  'Стандарт',
      badgePaid:           'Самый популярный',
      priceFamilyTitle:    'Семейный',
      pricePaidTitle:      'Семейный',       // legacy key kept for cached page versions
      pricingGuarantee: '🔒 \u00a0Безопасная оплата через App Store / Google Play. Подпиской управляете через магазин приложений вашего устройства.',
      // Footer
      footerTagline:  'Помощь с домашними заданиями на базе ИИ. Просто, безопасно и эффективно.',
      footerProduct:  'Продукт',
      footerDownload: 'Скачать',
      footerLegal:    'Правовая информация',
      footerAppStore:   'App Store (iOS)',
      footerGooglePlay: 'Google Play (Android)',
      footerPrivacy:  'Политика конфиденциальности',
      footerTerms:    'Условия использования',
      footerCookies:  'Политика Cookie',
      footerCopy:     '© 2025 Snappy Study. Все права защищены.',
      footerMade:     'Сделано с ❤️ для любознательных детей по всему миру.',
    },

    et: {
      navCta: 'Laadi alla tasuta',
      heroBadge:  '🎉 7 päeva tasuta · Kaarti pole vaja',
      heroTitle:  'Kodutööd said <span class="highlight">palju lihtsamaks</span>',
      heroSub:    'Pildista töölehte või õpikulehekülje. Snappy Study tehisintellekt seletab selle sekunditega lahti — sinu lapse keeles, jaotades vastuse selgeteks osadeks koos lugemisfunktsiooniga.',
      heroNote:   'Saadaval iOS-il ja Androidil · Proovi tasuta',
      howEyebrow: 'Lihtne ja selge',
      howTitle:   'Käivita alla minuti',
      howSub:     'Keerulist seadistust pole. Lihtsalt pildista ja õpi.',
      step1Title: 'Loo perekonnakonto',
      step1Body:  'Registreeru lapsevanemana ja lisa oma lapsed. Iga laps saab ainulaadse QR-koodi kohe sisselogimiseks — paroole pole vaja.',
      step2Title: 'Pildista kodutöö',
      step2Body:  'Laps avab rakenduse, suunab kaamera tööleht- või õpikuleheküljele ja vajutab päästiku nuppu.',
      step3Title: 'Saa selge seletus',
      step3Body:  'Tehisintellekt jagab sisu 2–4 lühikeseks osaks. Igal osal on oma ettelugemise nupp, et lapsed saaksid omas tempos kuulata.',
      step4Title: 'Vanemad on kursis',
      step4Body:  'Näed kõiki laste tehtud pilte reaalajas oma vanemate armatuurlaualt — mida ja millal õpiti.',
      featuresEyebrow: 'Kõik, mida vanemad armastavad',
      featuresTitle:   'Loodud hõivatud peredele',
      featuresSub:     'Võimas tehisintellekt kapoti all — lihtne ja turvaline kasutajakogemus pinnal.',
      feat1Title: 'Kohesed tehisintellekti seletused',
      feat1Body:  'Suuna kaamera mis tahes kodutöö leheküljele. Meie tehisintellekt loeb selle, mõistab teemat ja annab sekunditega selge, eakohase seletuse — ilma trükkimiseta.',
      feat1Li1:   'Toimib matemaatika, loodusteaduste, keelte ja muuga',
      feat1Li2:   'Samm-sammuline juhendamine keeruliste ülesannete puhul',
      feat1Li3:   'Õpilasesõbralik keel alati',
      feat2Title: 'Osapõhine audio',
      feat2Body:  'Igal seletuse osal on oma esitusnupp. Lapsed saavad kuulata täpselt seda osa, kus nad kinni jäid, nii mitu korda kui vaja.',
      feat3Title: '16 keelt',
      feat3Body:  'Inglise ja hispaania keelest araabia ja jaapani keeleni — Snappy Study seletab kodutöid sinu lapsele kõige mugavamas keeles, toetades kakskeelseid perekondi.',
      feat4Title: 'Vanemate tegevusvoog',
      feat4Body:  'Näe kõiki laste tehtud pilte koos ajatemplite ja seletuse eelvaatega. Ole lapse õppimisega kursis, ilma nende õla taha seismata.',
      feat5Title: 'Turvaline sisufilter',
      feat5Body:  'Iga pilti kontrollitakse enne analüüsimist. Snappy Study töötab ainult päris õppematerjalidega — loomade, inimeste või juhuslike esemete fotod lükatakse viisakalt tagasi.',
      feat6Title: 'Lapse sisselogimine QR-koodiga',
      feat6Body:  'Paroole pole vaja meelde jätta. Iga laps saab isikliku QR-koodi. Skaneerib — ja ongi sisse logitud. Turvaline, lihtne ja unustamatu.',
      screenshotsEyebrow: 'Vaata tegevuses',
      screenshotsTitle:   'Puhas, intuitiivne disain, mida lapsed tegelikult kasutavad',
      testimonialsEyebrow: 'Vanemad armastavad seda',
      testimonialsTitle:   'Päris pered, päris tulemused',
      pricingEyebrow:   'Lihtne hinnakiri',
      pricingTitle:     'Kaks paketti. Vali oma perele sobiv.',
      pricingSub:       'Proovi Standardit 7 päeva tasuta. Kaarti pole vaja.',
      // Free trial card
      priceFreeperiod:  '7 päeva',
      priceFreeDesc:    'Proovi Standardit tasuta. Kaarti pole vaja. Tühista igal ajal.',
      priceF1: '✓ Piiramatu piltide analüüs',
      priceF2: '✓ Kõik 16 keelt',
      priceF3: '✓ Osapõhine audio',
      priceF4: '✓ 1 lapse profiil',
      priceF5: '✓ Vanemate tegevusvoog',
      priceF6: '✓ QR-koodiga sisselogimine',
      priceFreeBtn:    'Alusta tasuta',
      // Standard card
      priceStandardperiod: '/ kuus',
      priceStandardDesc:   'Kõik prooviperioodi funktsioonid igavesti. Kuumakse. Tühista igal ajal.',
      priceS1: '✓ Piiramatu piltide analüüs',
      priceS2: '✓ Kõik 16 keelt',
      priceS3: '✓ Osapõhine audio',
      priceS4: '✓ 1 lapse profiil',
      priceS5: '✓ Vanemate tegevusvoog',
      priceS6: '✓ QR-koodiga sisselogimine',
      priceStandardBtn:    'Vali Standard',
      pricingNoteStandard: 'Vähem kui tassi kohvi hind kuus ☕',
      // Family card
      priceFamilyperiod: '/ kuus',
      priceFamilyDesc:   'Mitme lapsega perele. Kuumakse. Tühista igal ajal.',
      pricePaidperiod: '/ kuus',
      pricePaidDesc:   'Mitme lapsega perele. Kuumakse. Tühista igal ajal.',
      priceP1: '✓ Piiramatu piltide analüüs',
      priceP2: '✓ Kõik 16 keelt',
      priceP3: '✓ Osapõhine audio',
      priceP4: '✓ Kuni 4 lapse profiili',
      priceP5: '✓ Vanemate tegevusvoog',
      priceP6: '✓ QR-koodiga sisselogimine',
      priceP7: '✓ Eelistatud tugi',
      pricePaidBtn:  'Vali Pere',
      pricingNote:   'Vaid €3,25 lapse kohta ☕',
      ctaTitle: 'Hakka täna õhtul kodutöödega aitama',
      ctaSub:   'Laadi Snappy Study alla tasuta. Laps saab alla 2 minutiga esimese pildi teha.',
      // Nav links
      navFeatures:    'Funktsioonid',
      navHow:         'Kuidas see töötab',
      navScreenshots: 'Ekraanipildid',
      navPricing:     'Hinnad',
      // Social proof
      proof1: 'Toetatud keelt',
      proof2: 'Nutikad seletused',
      proof3: 'Selget osa iga vastuse kohta',
      proof4: 'Turvaline sisufilter',
      // Screenshots captions
      sc1Title: 'Vanemate tegevusvoog',
      sc1Sub:   'Näete kõiki lapse tehtud pilte reaalajas.',
      sc2Title: 'Kohene tehisintellekti analüüs',
      sc2Sub:   'Iga osa selgelt lahti seletatud koos esitusnuppudega.',
      sc3Title: 'Ühe puudutusega lastele',
      sc3Sub:   'Laps suunab kaamera — ja saab vastused sekunditega.',
      sc4Title: 'QR-koodiga sidumine',
      sc4Sub:   'Lisa laps sekunditega — paroole pole vaja.',
      // Testimonials
      t1Text:   '"Mu tütar ei saanud saksa sõnavara harjutustega hakkama. Snappy Study andis sekunditega selge seletuse koos häälega. Ta sooritas testi suurepäraselt."',
      t1Author: 'Kahe lapse ema, London',
      t2Text:   '"Tegevusvoog oli see, mis mind võitis. Näen täpselt, mida lapsed õpivad, ilma neid kakskümmend korda küsimata. Olen kaasatud, häirimata."',
      t2Author: 'Kolme lapse isa, Manchester',
      t3Text:   '"Oleme kakskeelne pere ja keeletugi on suurepärane. Mu poeg vahetab eesti ja inglise keele vahel vastavalt ainele. Toimib iga kord täiuslikult."',
      t3Author: 'Ühe lapse ema, Tallinn',
      // Pricing titles & badges
      badgeFree:           'Alusta siit',
      priceFreeTitle:      'Tasuta prooviperiood',
      badgeStandard:       'Standard',
      priceStandardTitle:  'Standard',
      badgePaid:           'Kõige populaarsem',
      priceFamilyTitle:    'Pere',
      pricePaidTitle:      'Pere',           // legacy key kept for cached page versions
      pricingGuarantee: '🔒 \u00a0Turvaline makse App Store\'i / Google Play arvelduse kaudu. Tellimust hallatakse sinu seadme rakenduspoe kaudu.',
      // Footer
      footerTagline:  'Tehisintellektipõhine kodutöö abi peredele. Lihtne, turvaline ja tõhus.',
      footerProduct:  'Toode',
      footerDownload: 'Laadi alla',
      footerLegal:    'Õiguslik teave',
      footerAppStore:   'App Store (iOS)',
      footerGooglePlay: 'Google Play (Android)',
      footerPrivacy:  'Privaatsuspoliitika',
      footerTerms:    'Kasutustingimused',
      footerCookies:  'Küpsiste poliitika',
      footerCopy:     '© 2025 Snappy Study. Kõik õigused kaitstud.',
      footerMade:     'Tehtud ❤️-ga uudishimulikele lastele üle maailma.',
    },
  };

  /* ══════════════════════════════════════════════════════════════
     LANGUAGE DROPDOWN
  ══════════════════════════════════════════════════════════════ */
  var currentLang = 'en';
  try { currentLang = localStorage.getItem('ss_lang') || 'en'; } catch(e) {}

  var langDropdown  = document.getElementById('lang-dropdown');
  var langTrigger   = document.getElementById('lang-trigger');
  var langPanel     = document.getElementById('lang-panel');
  var langFlagEl    = document.getElementById('lang-flag');
  var langNameEl    = document.getElementById('lang-name');
  var langTitleEl   = document.getElementById('lang-panel-title');

  // Panel heading translations
  var selectLangLabel = { en: 'Select language', ru: 'Выберите язык', et: 'Vali keel' };

  function applyTranslations(lang) {
    var dict = T[lang] || T['en'];
    // Swap all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
    // Update trigger pill
    var activeOption = document.querySelector('.lang-option[data-lang="' + lang + '"]');
    if (activeOption && langFlagEl && langNameEl) {
      langFlagEl.textContent = activeOption.getAttribute('data-flag');
      langNameEl.textContent = activeOption.getAttribute('data-label');
    }
    // Update active state on options
    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.classList.toggle('lang-option--active', opt.getAttribute('data-lang') === lang);
    });
    // Update panel heading
    if (langTitleEl) langTitleEl.textContent = selectLangLabel[lang] || selectLangLabel.en;
    // html lang attr
    document.documentElement.lang = lang;
  }

  function closeDropdown() {
    if (!langDropdown) return;
    langDropdown.classList.remove('open');
    if (langTrigger) langTrigger.setAttribute('aria-expanded', 'false');
  }

  function openDropdown() {
    if (!langDropdown) return;
    langDropdown.classList.add('open');
    if (langTrigger) langTrigger.setAttribute('aria-expanded', 'true');
  }

  if (langTrigger) {
    langTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      if (langDropdown.classList.contains('open')) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });
  }

  // Option clicks
  if (langPanel) {
    langPanel.addEventListener('click', function (e) {
      var opt = e.target.closest('.lang-option');
      if (!opt) return;
      currentLang = opt.getAttribute('data-lang');
      try { localStorage.setItem('ss_lang', currentLang); } catch(e) {}
      applyTranslations(currentLang);
      closeDropdown();
    });
  }

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (langDropdown && !langDropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDropdown();
  });

  // Apply on load
  applyTranslations(currentLang);

  /* ══════════════════════════════════════════════════════════════
     MOBILE NAV TOGGLE
  ══════════════════════════════════════════════════════════════ */
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ══════════════════════════════════════════════════════════════
     SCROLL-BASED NAV SHADOW
  ══════════════════════════════════════════════════════════════ */
  var navWrapper = document.querySelector('.nav-wrapper');
  if (navWrapper) {
    window.addEventListener('scroll', function () {
      navWrapper.style.boxShadow = window.scrollY > 8
        ? '0 2px 16px rgba(0,0,0,0.10)'
        : 'none';
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════════════════
     INTERSECTION OBSERVER — FADE IN
  ══════════════════════════════════════════════════════════════ */
  var style = document.createElement('style');
  style.textContent = [
    '.fade-in{opacity:0;transform:translateY(24px);transition:opacity .55s ease,transform .55s ease}',
    '.fade-in.visible{opacity:1;transform:translateY(0)}',
    '.fade-in-delay-1{transition-delay:.08s}',
    '.fade-in-delay-2{transition-delay:.16s}',
    '.fade-in-delay-3{transition-delay:.24s}',
    '.fade-in-delay-4{transition-delay:.32s}',
  ].join('');
  document.head.appendChild(style);

  var animTargets = document.querySelectorAll(
    '.feature-card, .step, .screenshot-item, .testimonial-card, .pricing-card'
  );
  animTargets.forEach(function (el, i) {
    el.classList.add('fade-in', 'fade-in-delay-' + ((i % 4) + 1));
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    animTargets.forEach(function (el) { observer.observe(el); });
  } else {
    animTargets.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ══════════════════════════════════════════════════════════════
     STORE BUTTON PLACEHOLDER CLICK
  ══════════════════════════════════════════════════════════════ */
  document.querySelectorAll('.store-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (btn.getAttribute('href') === '#') {
        e.preventDefault();
        var msg = {
          en: 'Coming soon! Store link will be added at launch. 🚀',
          ru: 'Скоро! Ссылка на магазин появится при запуске. 🚀',
          et: 'Tulemas! Poelink lisatakse käivitamisel. 🚀',
        };
        showToast(msg[currentLang] || msg.en);
      }
    });
  });

  /* ══════════════════════════════════════════════════════════════
     TOAST
  ══════════════════════════════════════════════════════════════ */
  function showToast(message) {
    var existing = document.getElementById('ss-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.id = 'ss-toast';
    toast.textContent = message;
    toast.style.cssText = [
      'position:fixed', 'bottom:28px', 'left:50%',
      'transform:translateX(-50%) translateY(60px)',
      'background:#1a1a2e', 'color:#fff',
      'padding:12px 22px', 'border-radius:50px',
      'font-size:14px', 'font-family:inherit', 'font-weight:500',
      'box-shadow:0 8px 32px rgba(0,0,0,0.25)',
      'z-index:9999', 'transition:transform 0.3s ease,opacity 0.3s ease',
      'opacity:0', 'white-space:nowrap', 'max-width:90vw', 'text-align:center',
    ].join(';');
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
      });
    });

    setTimeout(function () {
      toast.style.transform = 'translateX(-50%) translateY(60px)';
      toast.style.opacity = '0';
      setTimeout(function () { toast.remove(); }, 350);
    }, 3000);
  }

  /* ══════════════════════════════════════════════════════════════
     ACTIVE NAV LINK ON SCROLL
  ══════════════════════════════════════════════════════════════ */
  var sections    = document.querySelectorAll('section[id]');
  var navLinkEls  = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navLinkEls.length) {
    window.addEventListener('scroll', function () {
      var scrollPos = window.scrollY + 100;
      sections.forEach(function (section) {
        var top    = section.offsetTop;
        var bottom = top + section.offsetHeight;
        var id     = section.getAttribute('id');
        if (scrollPos >= top && scrollPos < bottom) {
          navLinkEls.forEach(function (a) {
            a.style.color      = '';
            a.style.background = '';
          });
          var active = document.querySelector('.nav-links a[href="#' + id + '"]');
          if (active) {
            active.style.color      = '#085abe';
            active.style.background = '#eff6ff';
          }
        }
      });
    }, { passive: true });
  }

})();
