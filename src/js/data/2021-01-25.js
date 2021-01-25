dataSetVersion = '2021-01-15' // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {}

dataSet[dataSetVersion].options = [
  {
    name: 'Отфильтровать по фракциям',
    key: 'origin',
    tooltip: '????????????',
    checked: false,
    sub: [
      { key: 'nix', name: 'OG Деоникс коммьюнити', tooltip: 'Олдфаги, происходящие из коммьюнити Деоникса 2014-2016' },
      { key: 'neo', name: 'OG Неономи коммьюнити', tooltip: 'Бывшие или настоящие члены коммьюнити Неономи' },
      { key: 'post', name: 'Пост-Нео коммьюнити', tooltip: 'aka "Постнина". Коммьюнити отвергнутых и добровольных отшельников. Или просто тех, кому поебать' },
      { key: 'ntrcr', name: 'Русское NT коммьюнити', tooltip: 'Русская диаспора в коммьюнити игры Nuclear Throne' },
      { key: 'offcom', name: 'Независимые', tooltip: 'Хуй знает как и откуда пришли\nили\nНе удалось выделить в отдельную категорию' }
    ]
  },
  {
    name: 'Отфильтровать по лагерям внутри пост-нео',
    key: 'postneo',
    tooltip: '????????????',
    checked: false,
    sub: [
      { key: 'britain', name: 'Британцы', tooltip: 'Планета русских националистов и дебатный клуб Императора Интеграла' },
      { key: 'hidden', name: 'Григорианцы', tooltip: 'Shitpost Central, неофициальный сервер фанатов Юралапа и Григория Краштеста' },
      { key: 'cake', name: 'Ламповые', tooltip: 'Лампово-ориентированное коммьюнити друзей под управлением нацистского диктатора Хиры' },
      { key: 'neoplus', name: 'Неономианцы', tooltip: 'Отряды нормисов, существующие в коммьюнити, постренным по образу и подобию общества Неономи' },
      { key: 'toxic', name: 'Токсик-быдловцы', tooltip: 'Группа бешеных животных' },
      { key: 'apple', name: 'NT-сепаратисты', tooltip: 'Коммьюнити, появившиеся в результате кризиса НТРК 2019 года' },
      { key: 'kefir', name: 'Кефирня', tooltip: 'Коммьюнити стримера Граф Кефир' },
      { key: 'vitas', name: 'Коптильня', tooltip: 'Психбольница Деда (Витаса), наследие Оригинальной Драмы' },
      { key: 'offcom', name: 'Независимые', tooltip: 'Хуй знает как и откуда пришли\nили\nНе удалось выделить в отдельную категорию' }
    ]
  },
  {
    name: 'Исключить неактуальных',
    key: 'past',
    tooltip: 'Исключить архивные записи, отражающие резкие личностные перемены, оставив только актуальные данные',
  },
  {
    name: 'Исключить вымышленных',
    key: 'surreal',
    tooltip: 'Исключить всех ботов, твинков и мифических личностей',
    checked: false
  },
  {
    name: 'Исключить дохлых',
    key: 'dead',
    tooltip: 'Исключить всех инактивов в нео и пост-нео',
    checked: false
  }
]

dataSet[dataSetVersion].characterData = [
  // {
  //   name: 'default',
  //   img: 'sHHzB2H.png', // def
  //   opts: {
  //     origin: ['nix', 'neo', 'post', 'ntrcr', 'offcom'],
  //     postneo: ['britain', 'hidden', 'cake', 'neoplus', 'toxic', 'apple', 'kefir', 'vitas', 'offcom'],
  //   },
  //   tooltip: 'default' // def
  // },
  {
    name: 'Integral | Александр Максвелл',
    img: 'h5wGCiu.png',
    opts: {
      origin: ['nix', 'neo', 'post', 'ntrcr'],
      postneo: ['britain', 'hidden', 'cake', 'vitas', 'offcom'],
    },
    tooltip: 'Император Малой Британии, амбассадор шитпостинга, человек-свастика, главный модератор двача, его величество Интеграл'
  },
  {
    name: 'Integral [2018]',
    img: 'UgpVlKs.png',
    opts: {
      origin: ['nix', 'neo', 'post'],
      postneo: ['britain', 'vitas', 'offcom'],
      past: true,
      dead: true
    },
    tooltip: 'Президент Новой Британии'
  },
  {
    name: 'The_Lost42 / Thelost_Desu [2014-2016]',
    img: 'lC2dRWT.png',
    opts: {
      origin: ['nix', 'neo'],
      postneo: ['offcom'],
      past: true,
      dead: true
    },
    tooltip: 'Познаю Двач'
  },
  {
    name: 'Tenshi | Канаде [Britain]',
    img: 'qZ4HMVi.png',
    opts: {
      origin: ['post', 'offcom'],
      postneo: ['britain'],
      surreal: true
    },
    tooltip: 'Написал хуйню'
  },
  {
    name: 'Канаде Тачибана [Angel Beats]',
    img: 'Sdg3yjS.png',
    opts: {
      origin: ['offcom'],
      postneo: ['offcom'],
      past: true,
      surreal: true,
      dead: true
    },
    tooltip: 'Я не ангел...'
  },
  {
    name: 'The_Lost42 | Лост',
    img: 'bi2lvhm.png',
    opts: {
      origin: ['post', 'offcom'],
      postneo: ['britain'],
      surreal: true
    },
    tooltip: 'Школа колбасы'
  },
  {
    name: 'Лост [Монголия]',
    img: 'tJdwIMV.png',
    opts: {
      origin: ['nix', 'neo', 'post'],
      postneo: ['britain'],
      past: true,
      surreal: true,
      dead: true
    },
    tooltip: 'Смертельный Икарус'
  },
  {
    name: 'ErwinHilbertLorentz',
    img: 'l5VsdJ9.png',
    opts: {
      origin: ['post'],
      postneo: ['britain', 'hidden', 'vitas', 'offcom'],
      surreal: true
    },
    tooltip: 'Товарищи...'
  },
  {
    name: 'NotSoBot | Брат',
    img: 'h91XSfO.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'neoplus', 'toxic', 'apple', 'kefir', 'vitas', 'offcom'],
      surreal: true
    },
    tooltip: 'Tax evasion'
  },
  {
    name: 'Cripplingral | Дон',
    img: '6eoIvon.png',
    opts: {
      origin: ['nix', 'post', 'offcom'],
      postneo: ['britain', 'offcom'],
    },
    tooltip: 'Вечность пахнет нефтью...'
  },
  {
    name: 'Don_Yoku | Дон [2015-2016]',
    img: 'Mp7iWEx.png',
    opts: {
      origin: ['nix', 'neo', 'post'],
      postneo: ['britain', 'offcom'],
      past: true,
      dead: true
    },
    tooltip: 'Наци аморал форчан ебу сестру'
  },
  {
    name: 'makzorr | Макзор',
    img: 'qvnEVyx.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['britain', 'neoplus', 'vitas'],
    },
    tooltip: 'Мавроди и Хокинг это один великий человек'
  },
  {
    name: 'pirog | Жора',
    img: 'G3FqCT2.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['britain', 'hidden', 'toxic', 'apple', 'offcom'],
    },
    tooltip: 'Ленин\nНет блять Трудолюбин'
  },
  {
    name: 'Пирог Докоммунистический',
    img: 'SpOkFQk.png',
    opts: {
      origin: ['nix', 'neo', 'post'],
      postneo: ['britain', 'toxic', 'vitas', 'offcom'],
      past: true,
      dead: true
    },
    tooltip: 'Я ГЕЙ'
  },
  {
    name: 'Po4tiCobalt | Кобальт',
    img: 'vSDASrj.png',
    opts: {
      origin: ['nix', 'neo', 'post'],
      postneo: ['britain'],
      surreal: true,
      dead: true
    },
    tooltip: 'ХУЙ'
  },
  {
    name: 'Nightbot',
    img: 'ewvXPw6.png',
    opts: {
      origin: ['nix', 'neo', 'post', 'offcom'],
      postneo: ['britain', 'hidden', 'neoplus', 'toxic', 'cake', 'kefir', 'vitas', 'offcom'],
      surreal: true,
      dead: true
    },
    tooltip: '--Нет\n--Пидора ответ'
  },
  {
    name: 'hiraeth | Хира',
    img: 'RtOvJDi.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['britain', 'hidden', 'cake', 'apple', 'vitas', 'offcom'],
    },
    tooltip: 'Младший брат Шевцова'
  },
  {
    name: 'prikol kot | Прикол кот',
    img: 'OpL1Yp9.png',
    opts: {
      origin: ['post', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'toxic'],
      surreal: true
    },
    tooltip: 'Тебе пиздец'
  },
  {
    name: 'Renquital | Рен',
    img: 'AJk0yjQ.png',
    opts: {
      origin: ['neo', 'post'],
      postneo: ['cake', 'neoplus'],
    },
    tooltip: 'Клон Хиры'
  },
  {
    name: 'uralap | Юра',
    img: 'BYqvovU.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'apple', 'vitas', 'offcom'],
    },
    tooltip: 'Яркое расчеловечество нейронного зитоморфия'
  },
  {
    name: 'Юралап Фнаф УльтраХП [pre-2019]',
    img: 'MFTgRnN.png',
    opts: {
      origin: ['neo', 'ntrcr'],
      postneo: ['hidden', 'toxic', 'offcom'],
      past: true,
      dead: true
    },
    tooltip: 'Голден Фредди'
  },
  {
    name: 'Григорий Краштест',
    img: 'rg6DKYD.png',
    opts: {
      origin: ['post'],
      postneo: ['hidden', 'offcom'],
      surreal: true
    },
    tooltip: 'Критекум...'
  },
  {
    name: 'Макук (Федор Чизбургер)',
    img: '8CPZYa1.png',
    opts: {
      origin: ['post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'apple', 'offcom'],
    },
    tooltip: 'На канале Григория Краштеста'
  },
  {
    name: 'Kri☦erus | Сергей Критек',
    img: 'nRMxjGw.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'vitas', 'offcom'],
      dead: true
    },
    tooltip: 'Путин вписан в русских\nРусские вписаны в говно'
  },
  {
    name: 'Критек-нигилист [pre-2019]',
    img: 'PNjXG3m.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'toxic', 'offcom'],
      past: true,
      dead: true
    },
    tooltip: 'Я анализирую себя как анального человека'
  },
  {
    name: 'Шурик',
    img: 'IPLzUnv.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'cake', 'toxic', 'vitas', 'offcom'],
    },
    tooltip: 'Я шарю в социальной инжинерии'
  },
  {
    name: 'GepardT | Гепард',
    img: 'Pgzx5rm.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'vitas', 'offcom'],
    },
    tooltip: 'Хз, я квантовую физику не приму, пока там не сделают определённость'
  },
  {
    name: 'Cannabis | Конопля',
    img: 'ZS8u5FL.png',
    opts: {
      origin: ['neo', 'post'],
      postneo: ['britain', 'hidden', 'cake', 'apple', 'vitas', 'offcom'],
    },
    tooltip: 'Где этот чёртов конопля?'
  },
  {
    name: 'Harisn',
    img: 'pr6u5iM.png',
    opts: {
      origin: ['neo', 'ntrcr'],
      postneo: ['neoplus', 'offcom'],
    },
    tooltip: 'Прогер моддер'
  },
  {
    name: 'Ara~Ara~Stara | Старк',
    img: 'm4CQwup.png',
    opts: {
      origin: ['neo', 'post', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'toxic', 'vitas', 'offcom'],
    },
    tooltip: 'НУ ДАВАЙ ДАВАЙ СУКА ДАВАЙ'
  },
  {
    name: 'archiplectes | Лабм',
    img: 'He4uRUF.png',
    opts: {
      origin: ['nix', 'neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['cake', 'toxic', 'kefir', 'vitas', 'offcom'],
    },
    tooltip: 'Высушу и выебу'
  },
  {
    name: 'Neonomi | Неономи',
    img: 'mvdaOGz.png',
    opts: {
      origin: ['neo'],
      postneo: ['offcom'],
    },
    tooltip: 'Neonomi Klub über alles'
  },
  {
    name: 'Неономи [Пре-драма]',
    img: 'RSz6ZnH.png',
    opts: {
      origin: ['neo'],
      postneo: ['toxic', 'offcom'],
      past: true,
      dead: true
    },
    tooltip: 'Привет Лост!'
  },
  {
    name: 'Пашканчек',
    img: 'N8ONlUm.png',
    opts: {
      origin: ['neo', 'ntrcr', 'post'],
      postneo: ['neoplus', 'kefir', 'vitas'],
    },
    tooltip: 'Монтирую, монтирую, а он взял и взорвался...'
  },
  {
    name: 'Killols | Кила',
    img: 'eb0clpi.png',
    opts: {
      origin: ['nix', 'neo', 'post', 'ntrcr'],
      postneo: ['britain', 'neoplus', 'vitas'],
    },
    tooltip: 'Детей любил, я педофил!'
  },
  {
    name: 'Кила-долбаеб [pre-Debate] [2016]',
    img: 'tr1KJ5y.png',
    opts: {
      origin: ['nix', 'post',],
      postneo: ['britain', 'toxic'],
      past: true,
      dead: true
    },
    tooltip: 'Мамку твою ебал))))0)00))0'
  },
  {
    name: 'Deonix | Деоникс',
    img: 'Jkciz5N.png',
    opts: {
      origin: ['nix'],
      postneo: ['offcom'],
      dead: true
    },
    tooltip: 'А знаешь что, Лост...'
  },
  {
    name: 'JustAPie | Пирог',
    img: 'NLQ0Vrf.png',
    opts: {
      origin: ['nix'],
      postneo: ['britain'],
      dead: true
    },
    tooltip: 'Какой у меня охуенный комп ептыбля'
  },
  {
    name: 'rimGOGA | Гоги',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['nix'],
      postneo: ['britain'],
      dead: true
    },
    tooltip: 'Лост?'
  },
  {
    name: 'MEE6 | УЁБИЩЕ',
    img: 'Q7b7Aax.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'neoplus', 'toxic', 'apple', 'kefir', 'vitas', 'cake', 'offcom'],
      surreal: true
    },
    tooltip: 'Типа'
  },
  {
    name: 'Rythm | Музыкальный негр',
    img: 'LLRgUPu.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'neoplus', 'toxic', 'apple', 'kefir', 'vitas', 'offcom'],
      surreal: true
    },
    tooltip: 'Now playing...'
  },
  {
    name: 'Yggdrasil',
    img: '0ofJ40s.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'neoplus', 'toxic', 'apple', 'kefir', 'vitas', 'offcom'],
      surreal: true
    },
    tooltip: 'Now fight!'
  },
  {
    name: 'Tatsu | Тацумаки',
    img: 'ITSxPJX.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'neoplus', 'toxic', 'apple', 'kefir', 'vitas', 'offcom'],
      surreal: true
    },
    tooltip: 'Цундерка'
  },
  {
    name: 'RemBot | Рем',
    img: 'snLa3QR.png',
    opts: {
      origin: ['post'],
      postneo: ['britain', 'offcom'],
      surreal: true,
      dead: true
    },
    tooltip: 'Олдскул диджей 2016'
  },
  {
    name: 'Борусо',
    img: 'bT5NHVW.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'apple', 'vitas', 'offcom'],
    },
    tooltip: 'За Бога, Царя и Отечество'
  },
  {
    name: 'Casual | Казуал',
    img: 'oN8mSSf.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['hidden', 'cake', 'apple', 'vitas', 'offcom'],
    },
    tooltip: 'Аниме девочки на аватарке'
  },
  {
    name: 'Hell | Хелл',
    img: 'BJpuoG9.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['toxic', 'vitas', 'offcom'],
    },
    tooltip: 'Петух'
  },
  {
    name: 'Отчим Хелла',
    img: 'rWBDDlP.png',
    opts: {
      origin: ['offcom'],
      postneo: ['vitas'],
      surreal: true
    },
    tooltip: 'Чуркистанский батя'
  },
  {
    name: 'Vitas | Дед',
    img: 'gxiv2Iu.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['cake', 'neoplus', 'toxic', 'vitas'],
    },
    tooltip: 'BORN IN FASHISTLAND'
  },
  {
    name: 'Дед [Эра модерки на Нео]',
    img: 'NpjKApR.png',
    opts: {
      origin: ['neo', 'post', 'offcom'],
      postneo: ['vitas'],
      past: true,
      dead: true
    },
    tooltip: 'Чуть менее сумасшедший'
  },
  {
    name: 'Dyadko_Traha4 | Орк',
    img: 'Iz7vzwM.png',
    opts: {
      origin: ['post', 'offcom'],
      postneo: ['hidden', 'toxic', 'offcom'],
      dead: true
    },
    tooltip: 'Хуйло'
  },
  {
    name: 'Pterodactil | Птир',
    img: 'Mng93Yl.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['kefir', 'offcom'],
    },
    tooltip: 'Бунтарь'
  },
  {
    name: 'Pteradactel | Птер',
    img: 'd4HgA6E.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['neoplus', 'toxic'],
    },
    tooltip: 'Фашист'
  },
  {
    name: 'moondancer | Лисков',
    img: 'GW82En1.png',
    opts: {
      origin: ['post', 'ntrcr'],
      postneo: ['hidden', 'toxic', 'apple', 'offcom'],
    },
    tooltip: 'С террористами...'
  },
  {
    name: 'Kazan9sh | Казах',
    img: 'C282Jbp.png',
    opts: {
      origin: ['neo', 'post', 'offcom'],
      postneo: ['britain', 'neoplus', 'offcom'],
      dead: true
    },
    tooltip: 'Как там в Лондоне живется?'
  },
  {
    name: 'Казах Доармейский',
    img: 'W5tR37b.png',
    opts: {
      origin: ['neo', 'post', 'offcom'],
      postneo: ['britain', 'offcom'],
      past: true,
      dead: true
    },
    tooltip: 'Добро пожаловать в Ванино'
  },
  {
    name: 'KazzzMiller | Каз',
    img: '125NvF4.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['cake', 'apple', 'kefir', 'offcom'],
      dead: true
    },
    tooltip: 'Изобретатель Джекбокса'
  },
  {
    name: 'Livo4 | Ливоч',
    img: '9aaKsWf.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['britain', 'neoplus', 'vitas'],
    },
    tooltip: '130 IQ'
  },
  {
    name: 'Vitas2222 | Витас',
    img: 'MUmRJAq.png',
    opts: {
      origin: ['neo', 'post', 'offcom'],
      postneo: ['neoplus', 'vitas', 'offcom'],
    },
    tooltip: 'Синяя точка на лбу'
  },
  {
    name: 'reeviec | Ривик',
    img: 'QUE2fcy.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['britain', 'cake', 'offcom'],
    },
    tooltip: 'Реконструкция Нацистской Германии'
  },
  {
    name: 'Hank Swoonatra | Хэнк',
    img: 'd2T9p5B.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['britain', 'cake', 'offcom'],
    },
    tooltip: 'Хочу умереть'
  },
  {
    name: 'Пчела/Куртка',
    img: 'G96WaGG.png',
    opts: {
      origin: ['neo', 'post', 'offcom'],
      postneo: ['britain', 'cake', 'hidden', 'apple', 'offcom'],
    },
    tooltip: 'Нойз концерт'
  },
  {
    name: 'GreenEyed',
    img: 'VbhZfHM.png',
    opts: {
      origin: ['post', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'toxic', 'apple', 'offcom'],
      surreal: true
    },
    tooltip: 'Смертельный МакБургер'
  },
  {
    name: 'xen0 | Трансгуманист',
    img: 'LFNoNeg.png',
    opts: {
      origin: ['post', 'offcom'],
      postneo: ['britain', 'cake'],
      dead: true
    },
    tooltip: 'We have technology...'
  },
  {
    name: 'CupTea | Чай',
    img: 'rp4eL1v.png',
    opts: {
      origin: ['post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'cake', 'toxic', 'offcom'],
    },
    tooltip: 'Я НЕ АНКАП!'
  },
  {
    name: 'pelkres | Пелкрес',
    img: 'PG4wg1G.png',
    opts: {
      origin: ['post'],
      postneo: ['britain', 'hidden', 'cake', 'toxic'],
    },
    tooltip: 'Девочкой быть хочет наверное'
  },
  {
    name: 'Delirium | Денис',
    img: 'NmVJex8.png',
    opts: {
      origin: ['neo', 'post', 'offcom'],
      postneo: ['britain', 'cake', 'offcom'],
      dead: true
    },
    tooltip: 'Ливоч лох'
  },
  {
    name: 'Камут',
    img: 'QjWaEzK.png',
    opts: {
      origin: ['neo', 'post', 'offcom'],
      postneo: ['britain', 'cake', 'toxic', 'offcom'],
      dead: true
    },
    tooltip: '...'
  },
  {
    name: 'VargWiZZ | Варг',
    img: 'TjkMT57.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['neoplus', 'vitas'],
    },
    tooltip: 'Профессиональный мемолог'
  },
  {
    name: 'I_jony_I | Жони',
    img: 'nxoou8B.png',
    opts: {
      origin: ['nix', 'neo', 'post', 'offcom'],
      postneo: ['britain'],
    },
    tooltip: 'sudo rm -rf /'
  },
  {
    name: 'One_eyed_Joe | Джо',
    img: 'n5vVlrv.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['britain', 'vitas'],
    },
    tooltip: 'Хочу увидеть апокалипсис'
  },
  {
    name: 'Wonderis | Вондер',
    img: 'S44MSkt.png',
    opts: {
      origin: ['neo', 'ntrcr'],
      postneo: ['neoplus', 'toxic', 'vitas'],
    },
    tooltip: 'Татарин'
  },
  {
    name: 'dymaruskos | Ковер',
    img: 'xZlKnWH.png',
    opts: {
      origin: ['post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'apple', 'vitas', 'offcom'],
    },
    tooltip: 'Башкарский маньяк'
  },
  {
    name: 'MrDivan | Диван',
    img: '6DoRli9.png',
    opts: {
      origin: ['nix', 'neo', 'post', 'ntrcr'],
      postneo: ['britain', 'apple', 'offcom'],
    },
    tooltip: 'Сталина на вас нет. И не надо'
  },
  {
    name: 'Leopolc | Леопольк',
    img: 'aOwrTCE.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['hidden', 'toxic', 'apple', 'offcom'],
      dead: true
    },
    tooltip: 'CoolStoryLetov'
  },
  {
    name: 'GroundScool',
    img: '21h3ReJ.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'toxic', 'apple', 'offcom'],
    },
    tooltip: 'оПОГирую'
  },
  {
    name: 'Gans | Ганс',
    img: 'Nf1EkaU.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['cake', 'neoplus', 'kefir', 'vitas', 'offcom'],
      dead: true
    },
    tooltip: 'Ультрапохуизм'
  },
  {
    name: 'LOWQUALITYOWL | Сова',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'toxic', 'kefir', 'vitas', 'offcom'],
      dead: true
    },
    tooltip: 'Я пидор-анимешник'
  },
  {
    name: 'Скелетик',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'cake', 'toxic', 'apple', 'vitas', 'offcom'],
    },
    tooltip: 'Скелетик'
  },
  {
    name: 'Afo',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['hidden', 'apple', 'offcom'],
      dead: true
    },
    tooltip: '???'
  },
  {
    name: 'Сотби',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'offcom'],
      dead: true
    },
    tooltip: 'Сначала я нарисую спрайты к трону, а после поставлю жопу на аватарку'
  },
  {
    name: 'kcalbCube | Куб',
    img: '8fJlzeL.png',
    opts: {
      origin: ['post', 'offcom'],
      postneo: ['britain', 'toxic', 'offcom'],
    },
    tooltip: 'НАЧАЛЬНИК ДА ОН ЖЕ ПОЕХАВШИЙ'
  },
  {
    name: 'Билл',
    img: '34Kai8k.png',
    opts: {
      origin: ['post', 'offcom'],
      postneo: ['hidden', 'offcom'],
    },
    tooltip: 'YEEEAAAAAAAH BAAABYYYYYYYY'
  },
  {
    name: 'shulga | Шульга',
    img: 'HkRWxrQ.png',
    opts: {
      origin: ['post', 'ntrcr'],
      postneo: ['hidden', 'apple', 'offcom'],
    },
    tooltip: '???'
  },
  {
    name: 'xydzina | Худзина',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'apple', 'vitas', 'offcom'],
    },
    tooltip: 'True HOHOL'
  },
  {
    name: 'Dyno | Рабочий негр',
    img: '3PTDnyj.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'neoplus', 'toxic', 'apple', 'kefir', 'vitas', 'offcom'],
      surreal: true
    },
    tooltip: 'Режим терминатора активиро... HTML 500... *dead*'
  },
  {
    name: 'Огник',
    img: 'EJoO1hQ.png',
    opts: {
      origin: ['nix', 'neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain'],
    },
    tooltip: 'Курю с Илоном Маском'
  },
  {
    name: 'Лидзен',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'toxic', 'cake', 'apple', 'vitas', 'offcom'],
      dead: true
    },
    tooltip: 'Сумасшедший украинец'
  },
  {
    name: 'CyberFlowey | Флави',
    img: '1Y2M7Fs.png',
    opts: {
      origin: ['neo', 'ntrcr'],
      postneo: ['neoplus', 'toxic', 'offcom'],
    },
    tooltip: 'Я модер-долбаеб\nЯ должен танцевать'
  },
  {
    name: 'RichardGargini | Картошка',
    img: 'oTgC3ch.png',
    opts: {
      origin: ['post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'toxic', 'apple', 'offcom'],
      dead: true
    },
    tooltip: 'ЧСВ выше гор'
  },
  {
    name: 'Baicherra | Баи',
    img: 'f67F85a.png',
    opts: {
      origin: ['post', 'ntrcr'],
      postneo: ['hidden', 'offcom'],
    },
    tooltip: 'Операция "Обсидиан"'
  },
  {
    name: 'Сабуро',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['post', 'ntrcr'],
      postneo: ['hidden', 'toxic'],
      dead: true
    },
    tooltip: 'Твой рисунок говно и вот почему...'
  },
  {
    name: 'destabilizer0 | Дест',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['neo', 'ntrcr'],
      postneo: ['neoplus', 'vitas', 'offcom'],
    },
    tooltip: 'Лопата 666'
  },
  {
    name: 'SENO',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'cake', 'offcom'],
    },
    tooltip: 'Милый Терран'
  },
  {
    name: 'Leatryx',
    img: 'JIjvwkB.png',
    opts: {
      origin: ['neo', 'post', 'offcom'],
      postneo: ['neoplus', 'toxic', 'offcom'],
      dead: true
    },
    tooltip: 'Мистический'
  },
  {
    name: 'Maximkoroch | Максим',
    img: '6Lwhowb.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['britain', 'toxic', 'kefir', 'offcom'],
      dead: true
    },
    tooltip: 'Овнер Старой Британии'
  },
  {
    name: 'bojagi',
    img: 'wBNzTu5.png',
    opts: {
      origin: ['neo', 'post', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'offcom'],
      dead: true
    },
    tooltip: 'Наркоман'
  },
  {
    name: 'Феликс',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['hidden', 'cake', 'neoplus', 'kefir', 'vitas', 'offcom'],
    },
    tooltip: 'Не Пьюдипай'
  },
  {
    name: 'sleedim',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr'],
      postneo: ['hidden', 'cake', 'toxic', 'apple', 'kefir', 'vitas', 'offcom'],
    },
    tooltip: 'Нет бля не следим'
  },
  {
    name: 'Blackmesa | Меса',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['toxic', 'vitas', 'offcom'],
    },
    tooltip: 'Злой'
  },
  {
    name: 'Виктор Вишняков',
    img: 'fCGv81p.png',
    opts: {
      origin: ['post', 'offcom'],
      postneo: ['britain', 'hidden', 'cake', 'toxic', 'apple', 'offcom'],
      surreal: true
    },
    tooltip: 'Виктор Вишняков'
  },
  {
    name: 'Сага | sagatovek',
    img: 'JKuctJ3.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['cake', 'toxic', 'offcom'],
    },
    tooltip: 'Первооткрыватель домов'
  },
  {
    name: 'Граф Кефир',
    img: '4JoJ7aD.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['kefir', 'offcom'],
    },
    tooltip: 'Кефир'
  },
  {
    name: 'Andeez',
    img: 'sHHzB2H.png',
    opts: {
      origin: ['neo', 'post', 'ntrcr', 'offcom'],
      postneo: ['toxic', 'vitas', 'offcom'],
    },
    tooltip: 'Хватит делать тирлисты они оскорбляют людей!'
  },
]
