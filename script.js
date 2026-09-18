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
      'pd.overline': 'Вмятины без покраски',
      'pd.h2': 'Удаление вмятин без покраски',
      'pd.lead': 'Выдавливаем металл изнутри специальным инструментом - без шпаклёвки, грунта и краски. Заводское покрытие остаётся на месте, и машина не теряет в цене.',
      'pd.before': 'до', 'pd.after': 'после', 'pd.cap': 'реальная работа студии',
      'pd.p1t': 'Родная краска', 'pd.p1d': 'Не шлифуем и не красим - заводской слой остаётся на месте.',
      'pd.p2t': 'Толщиномер чист', 'pd.p2d': 'Слой не меняется: при продаже ремонт не найти.',
      'pd.p3t': 'Быстрее окраса', 'pd.p3d': 'Нет шпаклёвки, грунта и сушки - меньше работы и меньше счёт.',
      'pd.p4t': 'Цена по фото', 'pd.p4d': 'Пришлите снимок вмятины в WhatsApp - назовём стоимость.',
      'pd.note': 'Град, парковка, дверь соседа - берём вмятины, где краска не треснула.',
      'pd.cta': 'Отправить фото вмятины',
      'ra.overline': 'Галерея', 'ra.h2': 'Наши работы',
      'ra.lead': 'Mercedes-Maybach, BMW M, Lexus LX, Land Cruiser, GMC - премиум-седаны и внедорожники Астаны выходят от нас под плёнкой.',
      'ra.v1': 'Перелив плёнки', 'ra.coupe': 'Купе в работе',
      'ra.ig': 'больше — в Instagram →',
      'fab.gis': '2ГИС', 'fab.gisAria': 'Маршрут в 2ГИС',
      'rv.overline': 'Отзывы', 'rv.h2': 'Что о нас пишут в 2ГИС',
      'rv.lead': 'Оценка студии - 5,0 из 5 по 28 отзывам. Ниже - цитаты с карточки 2ГИС без единой правки.',
      'rv.cnt': '28 отзывов в 2ГИС',
      'rv.all': 'все отзывы в 2ГИС →',
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

  // Казахский словарь лежит отдельным файлом и грузится только по явному выбору KZ.
  // Версия файла берётся из ?v= самого script.js - бампается вместе с остальными ассетами.
  var ASSET_V = ((document.currentScript && document.currentScript.src.match(/[?&]v=([^&]+)/)) || [])[1] || '';
  function loadLang(lang, done) {
    if (I18N[lang] || lang !== 'kk') return done();
    var s = document.createElement('script');
    s.src = 'assets/lang/kk.js' + (ASSET_V ? '?v=' + ASSET_V : '');
    s.onload = function () { if (window.SITE_KK) I18N.kk = window.SITE_KK; done(); };
    s.onerror = function () { done(); };
    document.head.appendChild(s);
  }
  function setLang(lang) { loadLang(lang, function () { applyLang(lang); }); }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  // Восстановление выбора языка: ?lang= в адресе имеет приоритет над localStorage
  var saved = null;
  try { saved = localStorage.getItem('bs-lang'); } catch (e) { /* ок */ }
  var urlLang = (location.search.match(/[?&]lang=(ru|kk)\b/) || [])[1];
  var startLang = urlLang || saved;
  if (startLang && startLang !== 'ru') setLang(startLang);
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

  /* ── Вмятины без покраски: видео грузится у блока, подпись «до/после» идёт за кадром ── */
  var pdv = document.querySelector('.pd-photo video');
  if (pdv) {
    var pdFig = pdv.closest('.pd-photo');
    var PD_AFTER = 2.7; // с этой секунды ролика вмятины уже нет
    pdv.addEventListener('timeupdate', function () {
      pdFig.classList.toggle('is-after', pdv.currentTime >= PD_AFTER);
    });
    var pio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          if (!pdv.getAttribute('src')) pdv.setAttribute('src', pdv.getAttribute('data-src'));
          pdv.play().catch(function () { /* автоплей запрещён - остаётся постер */ });
        } else if (pdv.getAttribute('src')) { pdv.pause(); }
      });
    }, { threshold: 0.3 });
    pio.observe(pdv);
  }

  /* ── Галерея: кнопки и drag-прокрутка ────────────────────── */
  /* Общая механика горизонтальной ленты: стрелки, гашение на краях,
     перетаскивание мышью. Используется галереей работ и лентой отзывов. */
  function initStrip(stripId, prevId, nextId, itemSel, perStep) {
    var strip = document.getElementById(stripId);
    var prev = document.getElementById(prevId);
    var next = document.getElementById(nextId);
    if (!strip || !prev || !next) return;

    function step() {
      var item = strip.querySelector(itemSel);
      var gap = parseFloat(getComputedStyle(strip).columnGap || getComputedStyle(strip).gap) || 20;
      return item ? (item.offsetWidth + gap) * perStep : 600;
    }
    function sync() {
      var max = strip.scrollWidth - strip.clientWidth;
      var fits = max <= 2;                       // всё влезло — стрелки не нужны
      prev.hidden = next.hidden = fits;
      prev.disabled = strip.scrollLeft <= 2;
      next.disabled = strip.scrollLeft >= max - 2;
    }
    prev.addEventListener('click', function () { strip.scrollBy({ left: -step(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { strip.scrollBy({ left: step(), behavior: 'smooth' }); });
    strip.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();

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

  initStrip('raStrip', 'raPrev', 'raNext', '.ra-item', 2);
  initStrip('rvStrip', 'rvPrev', 'rvNext', '.rv-card', 1);

  /* ── Конверсии Google Ads (AW-18437509987) ───────────────── */
  function fireConv(sendTo) {
    if (typeof gtag !== 'function') return;
    gtag('event', 'conversion', {
      'send_to': 'AW-18437509987/' + sendTo,
      'value': 1.0,
      'currency': 'USD'
    });
  }
  var CONV_TEL  = '1Ql9CIuSi_EcEOOm2NdE'; // Интерактивные номера телефонов
  var CONV_FORM = '5GYtCIm2gPEcEOOm2NdE'; // Отправка формы для потенциальных клиентов
  var CONV_WA   = 'i-T0CIC_gPEcEOOm2NdE'; // Контакт (переход в WhatsApp)

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
    fireConv(CONV_FORM);
    window.open(url, '_blank', 'noopener');
    openThanks();
  }
  form.addEventListener('submit', onFormSubmit);

  /* ── Делегированные клики tel: / WhatsApp ────────────────── */
  function onTelClick(link) { fireConv(CONV_TEL); }
  function onWaClick(link) { fireConv(CONV_WA); }

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
