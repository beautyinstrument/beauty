(function () {
  'use strict';

  var EMAIL = 'director@beautyinstrument.ru';
  var PRICE_DATE = '07.10.2026';

  // Данные — по официальным карточкам (research/products.json, product-N.txt).
  var MODELS = {
    0: {
      line: 'z059', format: 'desktop',
      short: 'Z-059 Sketch настольный',
      lineLabel: 'Z-059 Sketch · настольный',
      name: 'Аппарат Z-059 Sketch (настольный) для роликового массажа по телу и лицу',
      desc: 'Компактный вход в технологию: три манипулы — большая, средняя и малая — для работы по телу и лицу. Для массажа лица используют специальные маленькие насадки.',
      price: 162750, badge: '3 манипулы',
      img: 'assets/product-0.webp',
      srcset: '',
      w: 929, h: 925, fit: 'cover', pos: '50% 50%',
      alt: 'Настольный аппарат Z-059 Sketch: белый корпус с сенсорным экраном и роликовыми манипулами на держателе',
      url: 'https://beautyinstrument.ru/catalog/apparat-z-059-sketch-nastolnyy-dlya-rolikovogo-massazha-po-telu-i-litsu-3-manipuly-v-komplekte/',
      specs: [
        ['Манипулы', '3 шт.: большая, средняя, малая'],
        ['Насадки', 'A1, B1, C1 в комплекте; на выбор доступно 15 вариантов'],
        ['Свет', 'LED в манипулах, красный 625–740 нм'],
        ['Управление', 'Сенсорный экран на корпусе и экраны на манипулах'],
        ['Ролики', 'до 600 об/мин'],
        ['Габариты, вес', '59 × 48 × 34 см, 15 кг'],
        ['Питание', '220 В, 50 Гц, 1200 Вт']
      ]
    },
    1: {
      line: 'z059', format: 'floor',
      short: 'Z-059 Sketch напольный',
      lineLabel: 'Z-059 Sketch · напольный',
      name: 'Аппарат Z-059 Sketch (напольный) для роликового массажа по телу и лицу',
      desc: 'Максимальная комплектация линейки: пять манипул и десять насадок, чтобы собирать набор под зоны тела и лица. Для лица предусмотрены специальные маленькие насадки.',
      price: 208950, badge: '5 манипул',
      img: 'assets/product-1.webp',
      srcset: '',
      w: 1448, h: 1086, fit: 'cover', pos: '66% 62%',
      alt: 'Напольный аппарат Z-059 Sketch в кабинете: белая стойка с сенсорным экраном и пятью роликовыми манипулами рядом с кушеткой',
      url: 'https://beautyinstrument.ru/catalog/apparat-z-059-sketch-napolnyy-dlya-rolikovogo-massazha-po-telu-i-litsu-5-manipul-v-komplekte/',
      specs: [
        ['Манипулы', '5 шт.'],
        ['Насадки', '10 в комплекте; набор собирается из 15 вариантов'],
        ['Свет', 'LED в манипулах: красный 625–740 нм и синий 380–500 нм'],
        ['Управление', 'Сенсорный экран на корпусе и экраны на манипулах'],
        ['Ролики', 'до 600 об/мин'],
        ['Габариты, вес', '113 × 58 × 46 см, 35 кг'],
        ['Питание', '220 В, 50 Гц, 1200 Вт']
      ]
    },
    2: {
      line: 'iq', format: 'floor',
      short: 'IQ-Sketch напольный',
      lineLabel: 'IQ-Sketch · напольный',
      name: 'Аппарат IQ-Sketch (напольный): 2 манипулы роликового массажа с LED-светом',
      desc: 'Для оснащения кабинета: две манипулы с LED-светом, экран 10,1″ и роликовые блоки с контактными элементами-многогранниками для работы по телу.',
      price: 408450, badge: '2 манипулы · LED',
      img: 'assets/product-2.webp',
      srcset: '',
      w: 1200, h: 1800, fit: 'cover', pos: '50% 82%',
      alt: 'Напольный аппарат IQ-Sketch: чёрно-белый корпус на колёсах, сенсорный экран и две роликовые манипулы на держателе',
      url: 'https://beautyinstrument.ru/catalog/apparat-iq-sketch-2-manipuly-rolikovogo-massazha-s-led-svetom/',
      specs: [
        ['Манипулы', '2 шт., с LED-светом'],
        ['Ролики', '12 вращающихся роликов, 192 контактных элемента; до 600 об/мин'],
        ['Экран', 'Сенсорный, 10,1″; экраны на манипулах'],
        ['Функция', 'Роликовый массаж по телу с LED-светом'],
        ['Габариты, вес', '116 × 47 × 53 см, 60 кг'],
        ['Питание', '220 В, 50 Гц']
      ]
    },
    3: {
      line: 'iq', format: 'desktop',
      short: 'IQ-Sketch настольный',
      lineLabel: 'IQ-Sketch · настольный',
      name: 'Аппарат IQ-Sketch (настольный): 2 манипулы роликового массажа с LED-светом',
      desc: 'Технология IQ-Sketch в настольном корпусе: те же две манипулы с LED-светом и экран 10,1″ при меньших габаритах.',
      price: 366450, badge: '2 манипулы · LED',
      img: 'assets/product-3.webp',
      srcset: '',
      w: 427, h: 800, fit: 'contain', pos: '50% 50%',
      alt: 'Настольный аппарат IQ-Sketch: бело-чёрный корпус с вертикальным сенсорным экраном и двумя роликовыми манипулами сверху',
      url: 'https://beautyinstrument.ru/catalog/apparat-iq-sketch-2-manipuly-rolikovogo-massazha-s-led-svetom-nastolnyy/',
      specs: [
        ['Манипулы', '2 шт., с LED-светом'],
        ['Ролики', '12 вращающихся роликов, 192 контактных элемента; до 600 об/мин'],
        ['Экран', 'Сенсорный, 10,1″; экраны на манипулах'],
        ['Функция', 'Роликовый массаж по телу с LED-светом'],
        ['Габариты, вес', '63,4 × 31 × 57 см, 30 кг'],
        ['Питание', '220 В, 50 Гц']
      ]
    }
  };

  var nf = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });
  var nf1 = new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  function rub(n) { return nf.format(n) + ' ₽'; }
  function $(s, root) { return (root || document).querySelector(s); }
  function $$(s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); }

  function idFor(line, format) {
    for (var k in MODELS) {
      if (MODELS[k].line === line && MODELS[k].format === format) return Number(k);
    }
    return 0;
  }

  function mailtoFor(m) {
    var subject = 'Sketch: хочу на бесплатный тест-драйв — ' + m.short + ' (' + nf.format(m.price) + ' ₽)';
    var body = [
      'Здравствуйте!',
      '',
      'Интересует аппарат: ' + m.name + '.',
      'Цена на ' + PRICE_DATE + ' при оплате наличными: ' + nf.format(m.price) + ' ₽.',
      'Карточка на сайте: ' + m.url,
      '',
      'Прошу рассказать о стоимости и сроках поставки аппарата, бесплатном тест-драйве и обучении «Специалист по коррекции фигуры» с дипломом ДПО в подарок при покупке.',
      '',
      'Имя:',
      'Телефон:',
      'Город:'
    ].join('\n');
    return 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  var current = 0;

  function select(id, opts) {
    opts = opts || {};
    var m = MODELS[id];
    if (!m) return;
    current = id;

    // Переключатели линейки и формата
    var lineInput = $('input[name="line"][value="' + m.line + '"]');
    var fmtInput = $('input[name="format"][value="' + m.format + '"]');
    if (lineInput) lineInput.checked = true;
    if (fmtInput) fmtInput.checked = true;

    // Фото
    var media = $('#stage-media');
    var img = $('#stage-img');
    if (img && img.getAttribute('src') !== m.img) {
      media.classList.add('is-loading');
      var done = function () { media.classList.remove('is-loading'); };
      img.onload = done; img.onerror = done;
      if (m.srcset) img.setAttribute('srcset', m.srcset); else img.removeAttribute('srcset');
      img.setAttribute('width', m.w);
      img.setAttribute('height', m.h);
      img.src = m.img;
      img.alt = m.alt;
      if (img.complete) done();
    }
    if (img) img.style.objectPosition = m.pos;
    if (media) media.setAttribute('data-fit', m.fit);

    $('#stage-badge').textContent = m.badge;
    $('#stage-line').textContent = m.lineLabel;
    $('#stage-name').textContent = m.name;
    $('#stage-desc').textContent = m.desc;
    $('#stage-price').textContent = rub(m.price);

    var specs = $('#stage-specs');
    specs.textContent = '';
    m.specs.forEach(function (row) {
      var d = document.createElement('div');
      var dt = document.createElement('dt'); dt.textContent = row[0];
      var dd = document.createElement('dd'); dd.textContent = row[1];
      d.appendChild(dt); d.appendChild(dd); specs.appendChild(d);
    });

    // Ссылки и письма
    var mail = mailtoFor(m);
    $$('[data-mailto]').forEach(function (a) { a.href = mail; });
    $$('[data-official]').forEach(function (a) { a.href = m.url; });
    var cm = $('#contact-model'); if (cm) cm.textContent = m.short;
    if (!opts.silent) $('#stage-status').textContent = 'Выбрано: ' + m.short + ', ' + rub(m.price);

    // Таблица сравнения
    $$('.pick').forEach(function (b) {
      var on = Number(b.getAttribute('data-pick')) === id;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.closest('tr').classList.toggle('is-active', on);
    });

    // Калькулятор
    var sel = $('#c-model');
    if (sel && Number(sel.value) !== id) sel.value = String(id);
    if (!opts.skipCalc) calc();
  }

  // ---------- Калькулятор ----------
  var form = $('#calc-form');
  var fields = {
    check: $('#c-check'), variable: $('#c-var'), fixed: $('#c-fixed'),
    clients: $('#c-clients'), days: $('#c-days')
  };

  function readNum(el, min, max) {
    var raw = String(el.value).trim().replace(',', '.');
    var v = raw === '' ? NaN : Number(raw);
    var ok = isFinite(v) && v >= min && (max === undefined || v <= max);
    el.setAttribute('aria-invalid', ok ? 'false' : 'true');
    return ok ? v : null;
  }

  function setOut(html, opts) {
    var big = $('#o-months');
    big.classList.toggle('is-none', !!opts.none);
    big.innerHTML = html;
  }

  function calc() {
    var m = MODELS[current];
    var check = readNum(fields.check, 0);
    var variable = readNum(fields.variable, 0);
    var fixed = readNum(fields.fixed, 0);
    var clients = readNum(fields.clients, 0);
    var days = readNum(fields.days, 0, 31);

    $('#o-price').textContent = rub(m.price);

    if ([check, variable, fixed, clients, days].some(function (v) { return v === null; })) {
      setOut('Проверьте значения', { none: true });
      $('#o-sessions-m').textContent = '—';
      $('#o-monthly').textContent = '—';
      $('#o-sessions').textContent = '—';
      $('#o-formula').textContent = 'Все поля — неотрицательные числа, рабочих дней не больше 31.';
      setBar(0, 12);
      return;
    }

    var perMonth = clients * days;                       // сеансов в месяц
    var monthly = (check - variable) * clients * days - fixed;

    $('#o-sessions-m').textContent = nf.format(perMonth);
    $('#o-monthly').textContent = (monthly < 0 ? '−' : '') + rub(Math.abs(monthly));
    $('#o-formula').textContent =
      '(' + nf.format(check) + ' − ' + nf.format(variable) + ') × ' + nf.format(clients) + ' × ' +
      nf.format(days) + ' − ' + nf.format(fixed) + ' = ' + (monthly < 0 ? '−' : '') + rub(Math.abs(monthly)) + ' в месяц';

    if (!(monthly > 0)) {
      setOut('Нет возврата при таких параметрах', { none: true });
      $('#o-sessions').textContent = '—';
      setBar(0, 12);
      return;
    }

    var monthsExact = m.price / monthly;
    var months = Math.ceil(monthsExact * 10 - 1e-9) / 10;       // вверх до 0,1 мес.
    // Сеансы до возврата: за время возврата идут и фиксированные расходы каждого месяца
    var sessions = Math.ceil(monthsExact * perMonth - 1e-9);

    setOut(nf1.format(months) + ' <span>мес.</span>', { none: false });
    $('#o-sessions').textContent = nf.format(sessions);
    setBar(months, Math.max(12, Math.ceil(months / 6) * 6));
  }

  function setBar(months, scale) {
    var p = Math.max(0, Math.min(100, (months / scale) * 100));
    $('#o-bar').style.setProperty('--p', p.toFixed(1) + '%');
    $('#o-scale').textContent = scale + ' мес.';
  }

  // ---------- События ----------
  $$('input[name="line"], input[name="format"]').forEach(function (r) {
    r.addEventListener('change', function () {
      var line = $('input[name="line"]:checked').value;
      var fmt = $('input[name="format"]:checked').value;
      select(idFor(line, fmt));
    });
  });

  $$('.pick').forEach(function (b) {
    b.addEventListener('click', function () { select(Number(b.getAttribute('data-pick'))); });
  });

  $('#c-model').addEventListener('change', function (e) { select(Number(e.target.value)); });

  form.addEventListener('input', function (e) { if (e.target !== $('#c-model')) calc(); });
  form.addEventListener('submit', function (e) { e.preventDefault(); calc(); });
  form.addEventListener('reset', function () {
    // после сброса браузером: сохранить выбранную модель и пересчитать
    setTimeout(function () {
      $('#c-model').value = String(current);
      calc();
    }, 0);
  });

  select(0, { silent: true });
})();

 document.querySelectorAll('[data-quick]').forEach(function(a){a.addEventListener('click',function(){var n=Number(a.dataset.quick);var v=[['z059','desktop'],['z059','floor'],['iq','floor'],['iq','desktop']][n];var l=document.querySelector('input[name="line"][value="'+v[0]+'"]');var t=document.querySelector('input[name="format"][value="'+v[1]+'"]');l.checked=true;t.checked=true;t.dispatchEvent(new Event('change',{bubbles:true}));});});
