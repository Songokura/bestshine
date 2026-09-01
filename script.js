/* ═══════════════════════════════════════════════════════════════
   BestShine — механика страницы: i18n RU/KZ, меню, reveal-анимации,
   шкала толщиномера, галерея, форма → WhatsApp.
   Без внешних зависимостей.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var WA = 'https://wa.me/77071062613';

  /* ── Словари ─────────────────────────────────────────────── */
  var I18N = {
    ru: {
      'meta.title': 'BestShine - оклейка авто плёнкой и покраска за 3 часа, Астана',
      'meta.desc': 'Два основных направления BestShine: оклейка авто плёнкой от 35 000 ₸ и покраска детали за 3 часа под толщиномер от 60 000 ₸. Студия под ТРЦ «Сауран», Астана, ул. Алматы 3/1, ежедневно 10:00–20:00.',
      'nav.sauran': 'Студия', 'nav.plenka': 'Оклейка', 'nav.okras': 'Покраска',
      'nav.uslugi': 'Цены', 'nav.raboty': 'Работы', 'nav.contact': 'Контакты',
      'hdr.wa': 'WhatsApp',
      'fab.wa': 'WhatsApp', 'fab.aria': 'Написать в WhatsApp',
      'cta.wa': 'Написать в WhatsApp', 'cta.prices': 'Услуги и цены',
      'hero.overline': 'Астана · ул. Алматы 3/1 · детейлинг-студия под ТРЦ «Сауран»',
      'hero.h1': 'Оклейка авто плёнкой и покраска за 3 часа',
      'hero.lead': 'Два основных направления студии под ТРЦ «Сауран»: оклейка плёнкой от 35 000 ₸ и локальный окрас под толщиномер - деталь готова от 3 часов. Оставьте машину внизу и поднимитесь наверх.',
      'hero.st1': 'лет опыта', 'hero.st2t': '5', 'hero.st2': 'форматов оклейки',
      'hero.st3t': '3 ч', 'hero.st3': 'окрас детали',
      'hero.down': 'вниз, на этаж −1',
      'np.overline': 'Два основных направления',
      'np.c1b': '5 форматов',
      'np.c1t': 'Оклейка авто плёнкой',
      'np.c1d': 'Весь кузов, передняя часть или отдельные детали. Защита от сколов и смена цвета.',
      'np.c1p': 'от 35 000 ₸', 'np.c1g': 'форматы и цены →',
      'np.c2b': 'в тот же день',
      'np.c2t': 'Покраска за 3 часа',
      'np.c2d': 'Локальный окрас под толщиномер: слой остаётся в заводских значениях.',
      'np.c2p': 'от 60 000 ₸', 'np.c2g': 'как это работает →',
      'mq.1': 'Круговая оклейка', 'mq.2': 'Смена цвета', 'mq.3': 'Люкс-пакет',
      'mq.4': 'Детальная оклейка', 'mq.5': 'Замена плёнки', 'mq.6': 'Покраска за 3 часа',
      'mq.7': 'ПДР без покраски', 'mq.8': 'Полировка', 'mq.9': 'Шумоизоляция',
      'pl.overline': 'Направление 01',
      'pl.h2': 'Всё начинается с плёнки',
      'pl.lead': 'Прозрачная броня поверх заводской краски: кузов не собирает сколы, а цвет можно поменять и вернуть обратно.',
      'pl.c1t': 'Держит удар',
      'pl.c1d': 'Гравий, реагенты и щётки моек бьют в плёнку, а не в краску.',
      'pl.c2t': 'Меняет цвет',
      'pl.c2d': 'Мат, сатин, глянец - новый цвет без перекраса кузова.',
      'pl.c3t': 'Бережёт цену',
      'pl.c3d': 'Краска под плёнкой заводская - при продаже это видно по толщиномеру.',
      'pl.c4t': 'Снимается без следа',
      'pl.c4d': 'Отслужившую плёнку сняли - кузов под ней как в день оклейки.',
      'pl.cta': 'Выбрать формат оклейки',
      'pl.note': 'от 35 000 ₸ за деталь до 650 000 ₸ за весь кузов',
      'sa.overline': 'Главное о нас',
      'sa.h2': 'Студия под ТРЦ «Сауран»',
      'sa.lead': 'Редкий случай, когда автостудия находится прямо под торговым центром. Машина спускается к нам — вы поднимаетесь наверх. Мы работаем, пока вы живёте своей жизнью.',
      'sa.f0t': 'ТРЦ «Сауран»', 'sa.f0d': 'кофе, кино, покупки, примерочные',
      'sa.f1d': 'ваша машина уже в работе',
      'sa.q1': '«Заменим плёнку, пока вы закупаетесь»',
      'sa.q2': '«Оклеим фары, пока вы обедаете»',
      'sa.cap': 'ул. Алматы 3/1 — заезд со стороны улицы',
      'sa.t1t': 'Заехали, оставили ключи',
      'sa.t1d': 'Осмотр и расчёт за 10 минут — дальше машиной занимаемся мы.',
      'sa.t2t': 'Вы уже в «Сауране»',
      'sa.t2d': 'Кофе, кино, покупки — торговый центр прямо над нами.',
      'sa.t3time': '+3 часа', 'sa.t3t': 'Мелкие работы готовы',
      'sa.t3d': 'Детальную оклейку и локальный окрас отдаём в тот же день - к вашему возвращению.',
      'sa.t4time': 'до 20:00', 'sa.t4t': 'Забираете машину',
      'sa.t4d': 'Работаем каждый день с 10:00 до 20:00 — удобно и после работы.',
      'us.overline': 'Прайс', 'us.h2': 'Оклейка и цены',
      'us.lead': 'Пять форматов оклейки - от одной детали до всего кузова. Цены стартовые, точный расчёт делаем по фото вашего авто в WhatsApp за 10 минут.',
      'us.c1t': 'Круговая оклейка плёнкой',
      'us.c1d': 'Весь кузов под плёнкой: защита от сколов, реагентов и следов моек.',
      'us.c1p': 'от 650 000 ₸',
      'us.c2t': 'Люкс-пакет: передняя часть',
      'us.c2d': 'Плёнка на переднюю часть кузова — туда, куда прилетает чаще всего.',
      'us.c2p': 'от 200 000 ₸',
      'us.c3t': 'Детальная оклейка',
      'us.c3d': 'Отдельные элементы: от фар и стоек до любой детали на выбор.',
      'us.c3p': 'от 35 000 ₸',
      'us.c4t': 'Смена цвета плёнкой',
      'us.c4d': 'Новый цвет без покраски — с возможностью вернуть всё как было.',
      'us.c5t': 'Замена плёнки',
      'us.c5d': 'Снимем старую, подготовим кузов и оклеим заново.',
      'us.c6t': 'Локальный окрас под толщиномер',
      'us.c6d': 'Прибор не увидит разницы: слой остаётся в заводских значениях.',
      'us.c6p': 'от 60 000 ₸',
      'us.req': 'по запросу', 'us.go': 'рассчитать →', 'us.more': 'подробнее ↓',
      'us.exH': 'Кроме плёнки',
      'us.e1t': 'ПДР — вмятины без покраски',
      'us.e1d': 'Выправляем вмятину изнутри — родная краска остаётся нетронутой.',
      'us.e2t': 'Полировка кузова',
      'us.e2d': 'Снимаем паутинку и мелкие царапины — цвет снова становится глубоким.',
      'us.e3t': 'Шумоизоляция',
      'us.e3d': 'Тише в салоне: меньше гула трассы, двери закрываются глухо и мягко.',
      'ok.overline': 'Направление 02',
      'ok.h2': 'Покраска за 3 часа под толщиномер',
      'ok.lead': 'Красим отдельный элемент так, что слой остаётся в заводских значениях. При проверке перед продажей прибор не показывает перекрас — машина не теряет в цене.',
      'ok.gauge': 'показание толщиномера', 'ok.gaugeOk': '✓ заводской слой',
      'ok.gaugeMid': 'заводской диапазон',
      'ok.p1t': 'Слой — как заводской',
      'ok.p1d': 'Толщина покрытия в пределах заводских значений — придирчивый замер не выдаст ремонт.',
      'ok.p2t': 'Цвет в тон',
      'ok.p2d': 'Подбираем оттенок под ваш кузов — границы окраса не видно.',
      'ok.p3t': 'От 3 часов',
      'ok.p3d': 'Небольшой элемент отдаём в тот же день — подождите в «Сауране».',
      'ok.p4t': 'От 60 000 ₸',
      'ok.p4d': 'Точную цену считаем по фото повреждения в WhatsApp.',
      'ok.cta': 'Отправить фото повреждения',
      'ok.cap': 'свет ложится ровно — значит, слой ровный',
      'ra.overline': 'Галерея', 'ra.h2': 'Наши работы',
      'ra.lead': 'Mercedes-Maybach, BMW M, Lexus LX, Land Cruiser, GMC - премиум-седаны и внедорожники Астаны выходят от нас под плёнкой.',
      'ra.v1': 'Перелив плёнки', 'ra.coupe': 'Купе в работе',
      'ra.ig': 'больше — в Instagram →',
      'ct.overline': 'Контакты', 'ct.h2': 'Оставьте машину нам',
      'ct.lead': 'Напишите в WhatsApp — пришлём расчёт за 10 минут. Или заезжайте: левый берег, ул. Алматы 3/1, под ТРЦ «Сауран».',
      'ct.addr': 'Адрес',
      'ct.addrV': 'Астана, левый берег, ул. Алматы 3/1<br>помещение под ТРЦ «Сауран»',
      'ct.hours': 'График', 'ct.hoursV': 'ежедневно 10:00 – 20:00',
      'ct.phone': 'Телефон', 'ct.call': 'Позвонить',
      'f.name': 'Ваше имя', 'f.namePh': 'Асел, Андрей…',
      'f.car': 'Марка и модель авто', 'f.carPh': 'Lexus LX 570',
      'f.service': 'Услуга', 'f.s0': '— выберите —',
      'f.s1': 'Круговая оклейка', 'f.s2': 'Люкс-пакет: передняя часть',
      'f.s3': 'Детальная оклейка', 'f.s4': 'Локальный окрас под толщиномер',
      'f.s5': 'Замена плёнки', 'f.s6': 'Смена цвета плёнкой',
      'f.s8': 'ПДР — вмятины без покраски', 'f.s9': 'Полировка кузова',
      'f.s10': 'Шумоизоляция', 'f.s7': 'Другое',
      'f.msg': 'Комментарий', 'f.msgPh': 'Что нужно сделать? Можно коротко.',
      'f.submit': 'Получить расчёт в WhatsApp',
      'f.note': 'Нажмёте кнопку — откроется WhatsApp с готовым сообщением. Ничего никуда не сохраняем.',
      'th.h': 'Спасибо!',
      'th.p': 'Открыли WhatsApp — сообщение уже собрано, просто отправьте его.',
      'th.close': 'Закрыть',
      'ft.tag': 'Студия оклейки и локального окраса, Астана',
      'ft.addr': 'ул. Алматы 3/1, под ТРЦ «Сауран»',
      'ft.hours': 'ежедневно 10:00 – 20:00',
      'wa.hello': 'Здравствуйте! Пишу с сайта BestShine.',
      'wa.name': 'Имя', 'wa.car': 'Авто', 'wa.service': 'Услуга', 'wa.msg': 'Комментарий'
    },
    kk: {
      'meta.title': 'BestShine - көлікті үлдірмен қаптау және 3 сағатта бояу, Астана',
      'meta.desc': 'BestShine студиясының екі негізгі бағыты: көлікті үлдірмен қаптау 35 000 теңгеден және өлшегішке білінбейтін жергілікті бояу 60 000 теңгеден, 3 сағаттан. «Сауран» СОО астында, Астана, Алматы көшесі 3/1, күн сайын 10:00–20:00.',
      'nav.sauran': 'Студия', 'nav.plenka': 'Қаптау', 'nav.okras': 'Бояу',
      'nav.uslugi': 'Бағалар', 'nav.raboty': 'Жұмыстар', 'nav.contact': 'Байланыс',
      'hdr.wa': 'WhatsApp',
      'fab.wa': 'WhatsApp', 'fab.aria': 'WhatsApp арқылы жазу',
      'cta.wa': 'WhatsApp арқылы жазу', 'cta.prices': 'Қызметтер мен бағалар',
      'hero.overline': 'Астана · Алматы көшесі, 3/1 · «Сауран» СОО астындағы детейлинг-студия',
      'hero.h1': 'Көлікті үлдірмен қаптау және 3 сағатта бояу',
      'hero.lead': '«Сауран» СОО астындағы студияның екі негізгі бағыты: үлдірмен қаптау 35 000 ₸-ден және өлшегішке білінбейтін жергілікті бояу - элемент 3 сағаттан кейін дайын. Көлікті төменде қалдырып, жоғары көтеріліңіз.',
      'hero.st1': 'жыл тәжірибе', 'hero.st2t': '5', 'hero.st2': 'қаптау форматы',
      'hero.st3t': '3 сағ', 'hero.st3': 'элементті бояу',
      'hero.down': 'төменге, −1 қабатқа',
      'np.overline': 'Екі негізгі бағыт',
      'np.c1b': '5 формат',
      'np.c1t': 'Көлікті үлдірмен қаптау',
      'np.c1d': 'Толық шанақ, алдыңғы бөлік немесе жеке элементтер. Тас тиюден қорғау және түсті өзгерту.',
      'np.c1p': '35 000 ₸-ден', 'np.c1g': 'форматтар мен бағалар →',
      'np.c2b': 'сол күні',
      'np.c2t': '3 сағатта бояу',
      'np.c2d': 'Өлшегішке білінбейтін жергілікті бояу: қабат зауыттық мөлшерде қалады.',
      'np.c2p': '60 000 ₸-ден', 'np.c2g': 'қалай жұмыс істейді →',
      'mq.1': 'Толық қаптау', 'mq.2': 'Түсті өзгерту', 'mq.3': 'Люкс-пакет',
      'mq.4': 'Жеке элементтерді қаптау', 'mq.5': 'Үлдірді ауыстыру', 'mq.6': '3 сағатта бояу',
      'mq.7': 'Бояусыз PDR', 'mq.8': 'Жылтырату', 'mq.9': 'Шуылдан оқшаулау',
      'pl.overline': '01 бағыт',
      'pl.h2': 'Бәрі үлдірден басталады',
      'pl.lead': 'Зауыттық бояудың үстіндегі мөлдір қорған: шанаққа тас тимейді, ал түсті өзгертіп, кейін бұрынғы қалпына қайтаруға болады.',
      'pl.c1t': 'Соққыны өзі алады',
      'pl.c1d': 'Қиыршық тас, жол реагенттері мен жуу қылшақтары бояуға жетпейді.',
      'pl.c2t': 'Түсті өзгертеді',
      'pl.c2d': 'Мат, сатин, жылтыр - шанақты қайта бояусыз жаңа түс.',
      'pl.c3t': 'Бағасын сақтайды',
      'pl.c3d': 'Үлдірдің астындағы бояу зауыттық - сатқанда бұл өлшегіштен көрінеді.',
      'pl.c4t': 'Ізсіз алынады',
      'pl.c4d': 'Мерзімі біткен үлдірді сыдырып алдық - шанақ қаптаған күнгідей.',
      'pl.cta': 'Қаптау форматын таңдау',
      'pl.note': 'бір элементке 35 000 ₸-ден, толық шанаққа 650 000 ₸-ден',
      'sa.overline': 'Біз туралы ең бастысы',
      'sa.h2': '«Сауран» СОО астындағы студия',
      'sa.lead': 'Автостудияның сауда орталығының дәл астында орналасуы — сирек жағдай. Көлік бізге түседі, сіз жоғары көтерілесіз. Сіз өз ісіңізбен жүргенде, біз жұмыс істейміз.',
      'sa.f0t': '«Сауран» СОО', 'sa.f0d': 'кофе, кино, сауда, киім өлшеп көру',
      'sa.f1d': 'көлігіңізбен жұмыс жүріп жатыр',
      'sa.q1': '«Сіз дүкен аралағанша, үлдірді ауыстырамыз»',
      'sa.q2': '«Сіз түскі ас ішкенше, фараларды қаптап береміз»',
      'sa.cap': 'Алматы көшесі, 3/1 — кіреберіс көше жағынан',
      'sa.t1t': 'Келдіңіз, кілтті қалдырдыңыз',
      'sa.t1d': 'Қарап шығу мен есептеу — 10 минут, әрі қарай көлікпен біз айналысамыз.',
      'sa.t2t': 'Сіз «Сауранда» жүрсіз',
      'sa.t2d': 'Кофе, кино, сауда — орталық дәл біздің үстімізде.',
      'sa.t3time': '+3 сағат', 'sa.t3t': 'Шағын жұмыстар дайын',
      'sa.t3d': 'Жеке элементтерді қаптау мен жергілікті бояуды сол күні-ақ, сіз оралғанша бітіреміз.',
      'sa.t4time': '20:00-ге дейін', 'sa.t4t': 'Көлікті алып кетесіз',
      'sa.t4d': 'Күн сайын 10:00-ден 20:00-ге дейін жұмыс істейміз — жұмыстан кейін де ыңғайлы.',
      'us.overline': 'Бағалар', 'us.h2': 'Қаптау және бағалар',
      'us.lead': 'Қаптаудың бес форматы - бір элементтен бүкіл шанаққа дейін. Бағалар бастапқы, нақты есепті көлігіңіздің фотосы бойынша WhatsApp арқылы 10 минутта жасаймыз.',
      'us.c1t': 'Көлікті толық қаптау',
      'us.c1d': 'Бүкіл шанақ үлдір астында: тас соққысынан, реагенттерден және жуу іздерінен қорғайды.',
      'us.c1p': '650 000 теңгеден',
      'us.c2t': 'Люкс-пакет: алдыңғы бөлік',
      'us.c2d': 'Шанақтың алдыңғы бөлігіне үлдір — соққы жиі тиетін жерге.',
      'us.c2p': '200 000 теңгеден',
      'us.c3t': 'Жеке элементтерді қаптау',
      'us.c3d': 'Жеке элементтер: фара мен тіректен бастап кез келген бөлшекке дейін.',
      'us.c3p': '35 000 теңгеден',
      'us.c4t': 'Үлдірмен түсті өзгерту',
      'us.c4d': 'Бояусыз жаңа түс — қалауыңызша бастапқы қалпына қайтаруға болады.',
      'us.c5t': 'Үлдірді ауыстыру',
      'us.c5d': 'Ескісін сыдырып алып, шанақты дайындап, қайта қаптаймыз.',
      'us.c6t': 'Өлшегішке білінбейтін жергілікті бояу',
      'us.c6d': 'Құрал айырмашылықты байқамайды: қабат зауыттық мән шегінде қалады.',
      'us.c6p': '60 000 теңгеден',
      'us.req': 'сұраныс бойынша', 'us.go': 'есептеу →', 'us.more': 'толығырақ ↓',
      'us.exH': 'Үлдірден бөлек',
      'us.e1t': 'PDR — бояусыз ойық түзету',
      'us.e1d': 'Ойықты іштен көтереміз — зауыттық бояу орнында қалады.',
      'us.e2t': 'Шанақты жылтырату',
      'us.e2d': 'Ұсақ сызаттар мен «өрмек» іздерін кетіреміз — түс қайта тереңдейді.',
      'us.e3t': 'Шуылдан оқшаулау',
      'us.e3d': 'Салонда тыныштық: жол гуілі басылады, есік жұмсақ әрі тұйық жабылады.',
      'ok.overline': '02 бағыт',
      'ok.h2': '3 сағатта өлшегішке білінбейтін бояу',
      'ok.lead': 'Жеке элементті бояғанда қабат қалыңдығы зауыттық деңгейде қалады. Сату алдындағы тексерісте құрал қайта бояуды көрсетпейді — көлік бағасын жоғалтпайды.',
      'ok.gauge': 'қалыңдық өлшегіш көрсеткіші', 'ok.gaugeOk': '✓ зауыттық қабат',
      'ok.gaugeMid': 'зауыттық ауқым',
      'ok.p1t': 'Қабат — зауыттағыдай',
      'ok.p1d': 'Жабын қалыңдығы зауыттық мән шегінде — мұқият өлшегеннің өзінде жөндеу білінбейді.',
      'ok.p2t': 'Түсі дәл',
      'ok.p2d': 'Реңкті шанағыңызға дәл келтіреміз — бояу шекарасы көрінбейді.',
      'ok.p3t': '3 сағаттан бастап',
      'ok.p3d': 'Шағын элементті сол күні-ақ бітіреміз — «Сауранда» күте тұрыңыз.',
      'ok.p4t': '60 000 теңгеден',
      'ok.p4d': 'Нақты бағаны зақым фотосы бойынша WhatsApp арқылы есептейміз.',
      'ok.cta': 'Зақым фотосын жіберу',
      'ok.cap': 'жарық тегіс түседі — демек, қабат тегіс',
      'ra.overline': 'Галерея', 'ra.h2': 'Біздің жұмыстар',
      'ra.lead': 'Mercedes-Maybach, BMW M, Lexus LX, Land Cruiser, GMC - Астананың премиум седандары мен жол талғамайтын көліктері бізден үлдір астында шығады.',
      'ra.v1': 'Үлдір құбылуы', 'ra.coupe': 'Жұмыстағы купе',
      'ra.ig': 'көбірек — Instagram парақшамызда →',
      'ct.overline': 'Байланыс', 'ct.h2': 'Көлікті бізге қалдырыңыз',
      'ct.lead': 'WhatsApp арқылы жазыңыз — есепті 10 минутта жібереміз. Немесе тікелей келіңіз: сол жағалау, Алматы көшесі 3/1, «Сауран» СОО астында.',
      'ct.addr': 'Мекенжай',
      'ct.addrV': 'Астана, сол жағалау, Алматы көшесі, 3/1<br>«Сауран» СОО астындағы үй-жай',
      'ct.hours': 'Жұмыс уақыты', 'ct.hoursV': 'күн сайын 10:00 – 20:00',
      'ct.phone': 'Телефон', 'ct.call': 'Қоңырау шалу',
      'f.name': 'Есіміңіз', 'f.namePh': 'Әсел, Андрей…',
      'f.car': 'Көліктің маркасы мен үлгісі', 'f.carPh': 'Lexus LX 570',
      'f.service': 'Қызмет', 'f.s0': '— таңдаңыз —',
      'f.s1': 'Толық қаптау', 'f.s2': 'Люкс-пакет: алдыңғы бөлік',
      'f.s3': 'Жеке элементтерді қаптау', 'f.s4': 'Өлшегішке білінбейтін жергілікті бояу',
      'f.s5': 'Үлдірді ауыстыру', 'f.s6': 'Үлдірмен түсті өзгерту',
      'f.s8': 'PDR — бояусыз ойық түзету', 'f.s9': 'Шанақты жылтырату',
      'f.s10': 'Шуылдан оқшаулау', 'f.s7': 'Басқа',
      'f.msg': 'Түсініктеме', 'f.msgPh': 'Не істеу керек? Қысқаша жазсаңыз болады.',
      'f.submit': 'WhatsApp арқылы есеп алу',
      'f.note': 'Түймені бассаңыз, хабарлама дайын күйде WhatsApp ашылады. Ештеңе еш жерге сақталмайды.',
      'th.h': 'Рахмет!',
      'th.p': 'WhatsApp ашылды — хабарлама дайын, жіберсеңіз болғаны.',
      'th.close': 'Жабу',
      'ft.tag': 'Қаптау және жергілікті бояу студиясы, Астана',
      'ft.addr': 'Алматы көшесі, 3/1, «Сауран» СОО астында',
      'ft.hours': 'күн сайын 10:00 – 20:00',
      'wa.hello': 'Сәлеметсіз бе! BestShine сайтынан жазып отырмын.',
      'wa.name': 'Есімім', 'wa.car': 'Көлік', 'wa.service': 'Қызмет', 'wa.msg': 'Түсініктеме'
    }
  };

  var currentLang = 'ru';

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'ru';
    currentLang = lang;
    var dict = I18N[lang];

    document.documentElement.lang = (lang === 'kk') ? 'kk' : 'ru';
    document.title = dict['meta.title'];
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', dict['meta.desc']);

    // Тексты
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = dict[key];
      if (val == null) return;
      if (val.indexOf('<') !== -1) el.innerHTML = val;
      else el.textContent = val;
    });
    // aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = dict[el.getAttribute('data-i18n-aria')];
      if (val != null) el.setAttribute('aria-label', val);
    });
    // Плейсхолдеры
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var val = dict[el.getAttribute('data-i18n-ph')];
      if (val != null) el.setAttribute('placeholder', val);
    });
    // Кнопки переключателя
    document.querySelectorAll('.lang button').forEach(function (b) {
      var active = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try { localStorage.setItem('bs-lang', lang); } catch (e) { /* приватный режим */ }
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  // Восстановление выбора языка: ?lang= в адресе имеет приоритет над localStorage
  var saved = null;
  try { saved = localStorage.getItem('bs-lang'); } catch (e) { /* ок */ }
  var urlLang = (location.search.match(/[?&]lang=(ru|kk)\b/) || [])[1];
  var startLang = urlLang || saved;
  if (startLang && startLang !== 'ru') applyLang(startLang);
  else if (startLang === 'ru' && saved !== 'ru') applyLang('ru');

  /* ── Шапка: фон при скролле ──────────────────────────────── */
  var header = document.getElementById('header');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Мобильное меню ──────────────────────────────────────── */
  var burger = document.getElementById('burger');
  var mnav = document.getElementById('mnav');

  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    mnav.setAttribute('aria-hidden', open ? 'false' : 'true');
  }
  burger.addEventListener('click', function () {
    setMenu(!document.body.classList.contains('menu-open'));
  });
  mnav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  /* ── Появление при скролле ───────────────────────────────── */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal, .reveal-img').forEach(function (el) { io.observe(el); });

  /* ── Шкала толщиномера: стрелка едет в «заводскую зону» ──── */
  var gauge = document.querySelector('.gauge');
  if (gauge) {
    var gio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          gauge.classList.add('is-on');
          gio.disconnect();
        }
      });
    }, { threshold: 0.5 });
    gio.observe(gauge);
  }

  /* ── Видео в галерее: играть только на экране ────────────── */
  var vio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { v.play().catch(function () { /* автоплей запрещён — остаётся постер */ }); }
      else { v.pause(); }
    });
  }, { threshold: 0.25 });
  document.querySelectorAll('.ra-item video').forEach(function (v) { vio.observe(v); });

  /* ── Галерея: кнопки и drag-прокрутка ────────────────────── */
  var strip = document.getElementById('raStrip');
  if (strip) {
    var step = function () {
      var item = strip.querySelector('.ra-item');
      return item ? (item.offsetWidth + 20) * 2 : 600;
    };
    document.getElementById('raPrev').addEventListener('click', function () {
      strip.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    document.getElementById('raNext').addEventListener('click', function () {
      strip.scrollBy({ left: step(), behavior: 'smooth' });
    });

    // Перетаскивание мышью (на тач-экранах скролл нативный)
    var isDown = false, startX = 0, startLeft = 0, moved = false;
    strip.addEventListener('mousedown', function (e) {
      isDown = true; moved = false;
      startX = e.pageX; startLeft = strip.scrollLeft;
      strip.classList.add('is-drag');
    });
    window.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      var dx = e.pageX - startX;
      if (Math.abs(dx) > 4) moved = true;
      strip.scrollLeft = startLeft - dx;
    });
    window.addEventListener('mouseup', function () {
      isDown = false;
      strip.classList.remove('is-drag');
    });
    // Не даём клику сработать после перетаскивания
    strip.addEventListener('click', function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
    }, true);
  }

  /* ── Форма → WhatsApp (без бэкенда) ──────────────────────── */
  var form = document.getElementById('waForm');
  var thanks = document.getElementById('thanks');

  function openThanks() {
    thanks.classList.add('is-open');
    thanks.setAttribute('aria-hidden', 'false');
  }
  function closeThanks() {
    thanks.classList.remove('is-open');
    thanks.setAttribute('aria-hidden', 'true');
  }
  document.getElementById('thanksClose').addEventListener('click', closeThanks);
  thanks.addEventListener('click', function (e) { if (e.target === thanks) closeThanks(); });

  // Чистый обработчик submit — сюда Opus повесит gtag-конверсию
  function onFormSubmit(e) {
    e.preventDefault();
    var dict = I18N[currentLang];
    var name = document.getElementById('fName').value.trim();
    var car = document.getElementById('fCar').value.trim();
    var service = document.getElementById('fService').value.trim();
    var msg = document.getElementById('fMsg').value.trim();

    var lines = [dict['wa.hello']];
    if (name) lines.push(dict['wa.name'] + ': ' + name);
    if (car) lines.push(dict['wa.car'] + ': ' + car);
    if (service) lines.push(dict['wa.service'] + ': ' + service);
    if (msg) lines.push(dict['wa.msg'] + ': ' + msg);

    var url = WA + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');
    openThanks();
  }
  form.addEventListener('submit', onFormSubmit);

  /* ── Делегированные клики tel: / WhatsApp ────────────────── */
  // Чистые хуки — сюда Opus повесит gtag-конверсии (звонок / переход в WhatsApp)
  function onTelClick(link) { /* заглушка для gtag('event', ...) */ }
  function onWaClick(link) { /* заглушка для gtag('event', ...) */ }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) onTelClick(a);
    else if (href.indexOf('wa.me') !== -1) onWaClick(a);
  });

  /* ── Escape закрывает меню и «Спасибо» ───────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setMenu(false);
      closeThanks();
    }
  });
})();
