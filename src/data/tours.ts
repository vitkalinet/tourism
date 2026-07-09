export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  category: string;
  categoryLabel: string;
  icon: string;
  highlights: string[];
  gradient: string;
  season: string;
}

export const tours: Tour[] = [
  {
    id: "khurul",
    title: "Буддизм легко и доступно",
    subtitle: "Экскурсия по центральным хурулам",
    description: "Экскурсия по центральному хурулу «Золотая обитель Будды Шакьямуни» и «Геден Шеддуп Чой Корлинг» (Аршанский хурул «Сякюсн сюме»). Погрузитесь в атмосферу буддийской духовности.",
    duration: "2 часа",
    price: "от 1500 ₽",
    category: "culture",
    categoryLabel: "Культура",
    icon: "☸",
    highlights: ["Золотая обитель Будды Шакьямуни", "Аршанский хурул", "Горловое пение"],
    gradient: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)",
    season: "Круглогодично",
  },
  {
    id: "elista-walk",
    title: "Прогулка по Элисте",
    subtitle: "Пешая экскурсия по столице Калмыкии",
    description: "Увлекательная пешая прогулка по центру города. Маршрут от Пагоды семи дней до парка «Дружба».",
    duration: "3 часа",
    price: "от 1200 ₽",
    category: "city",
    categoryLabel: "Город",
    icon: "🏛",
    highlights: ["Пагода семи дней", "Парк «Дружба»", "История и культура"],
    gradient: "linear-gradient(135deg, #2d7a7a 0%, #4da8a8 100%)",
    season: "Круглогодично",
  },
  {
    id: "topol",
    title: "Одинокий тополь и родники",
    subtitle: "Место силы и целебные источники",
    description: "Посетим место силы Одинокий тополь с каскадом родников. По желанию проведём ритуал подношения духам земли и воды.",
    duration: "Полдня",
    price: "от 2000 ₽",
    category: "nature",
    categoryLabel: "Природа",
    icon: "🌳",
    highlights: ["Место силы", "Целебные родники", "Ритуал подношения"],
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    season: "Апрель — Октябрь",
  },
  {
    id: "palmov-museum",
    title: "Музей Пальмова",
    subtitle: "Национальный музей им. Пальмова",
    description: "Богатый артефактами и экспонатами Национальный музей. Экспозиция «Степь как жизненное пространство».",
    duration: "2 часа",
    price: "от 800 ₽",
    category: "culture",
    categoryLabel: "Культура",
    icon: "🏺",
    highlights: ["Экспозиция «Степь»", "Артефакты кочевников", "История Калмыкии"],
    gradient: "linear-gradient(135deg, #b8651f 0%, #d4a574 100%)",
    season: "Круглогодично",
  },
  {
    id: "dunes-saigas",
    title: "Поющие барханы и сайгаки",
    subtitle: "Заповедная зона и антилопы-ровесники мамонтов",
    description: "Заказник заповедника «Чёрные земли», этнокомплекс «Адык — страна Бумба». Поющие барханы, розовое озеро, сайгаки.",
    duration: "Полный день",
    price: "от 4500 ₽",
    category: "nature",
    categoryLabel: "Природа",
    icon: "🏜",
    highlights: ["Поющие барханы", "Розовое озеро", "Сайгаки", "Горящий источник"],
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    season: "Май — Сентябрь",
  },
  {
    id: "nomads-camels",
    title: "Кочевники и верблюды",
    subtitle: "Поход на верблюдах и чай в юрте",
    description: "Поход на верблюдах посреди степи! Чаепитие в аутентичной монгольской юрте аратов-кочевников.",
    duration: "Полдня",
    price: "от 3500 ₽",
    category: "adventure",
    categoryLabel: "Приключения",
    icon: "🐫",
    highlights: ["Поход на верблюдах", "Чаепитие в юрте", "Степь кочевников"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    season: "Апрель — Октябрь",
  },
  {
    id: "horse-riding",
    title: "Конные прогулки",
    subtitle: "Оздоровительные прогулки верхом",
    description: "Конные прогулки на 2 часа или целый день с пикником на свежем воздухе, песнями под гитару.",
    duration: "2–8 часов",
    price: "от 2500 ₽",
    category: "adventure",
    categoryLabel: "Приключения",
    icon: "🐎",
    highlights: ["Конная прогулка", "Пикник на природе", "Песни у костра"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    season: "Апрель — Октябрь",
  },
  {
    id: "lotus",
    title: "Цветение лотосов",
    subtitle: "Священные цветы и речная прогулка",
    description: "Экскурсия на цветение священных лотосов с речной прогулкой на катере и посещением храма Майтреи.",
    duration: "Полдня",
    price: "от 3000 ₽",
    category: "nature",
    categoryLabel: "Природа",
    icon: "🪷",
    highlights: ["Цветение лотосов", "Прогулка на катере", "Статуя Майтреи"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    season: "Июль — Август",
  },
  {
    id: "tibetan-medicine",
    title: "Тибетская медицина и астрология",
    subtitle: "Оздоровительные программы",
    description: "Оздоровительные программы с посещением врача-астролога и врача тибетской медицины.",
    duration: "Индивидуально",
    price: "от 2500 ₽",
    category: "wellness",
    categoryLabel: "Оздоровление",
    icon: "🌿",
    highlights: ["Врач тибетской медицины", "Астролог", "Оздоровление"],
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    season: "Круглогодично",
  },
  {
    id: "massage",
    title: "Массаж и отдых",
    subtitle: "Релаксация после дороги",
    description: "Массаж: классический, точечный тибетский, баночный, лимфодренажный.",
    duration: "1–2 часа",
    price: "от 1500 ₽",
    category: "wellness",
    categoryLabel: "Оздоровление",
    icon: "💆",
    highlights: ["Классический массаж", "Тибетский точечный", "Лимфодренажный"],
    gradient: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)",
    season: "Круглогодично",
  },
  {
    id: "yurt-night",
    title: "Ночевка в юрте",
    subtitle: "Погружение в быт кочевника",
    description: "Проживание в юрте. Вечер у костра, звёздное небо, Млечный путь, встреча рассвета в степи.",
    duration: "1 ночь",
    price: "от 4000 ₽",
    category: "adventure",
    categoryLabel: "Приключения",
    icon: "⛺",
    highlights: ["Проживание в юрте", "Вечер у костра", "Млечный путь"],
    gradient: "linear-gradient(135deg, #2d7a7a 0%, #4da8a8 100%)",
    season: "Май — Сентябрь",
  },
  {
    id: "chess-bender",
    title: "Шахматы и Остап Бендер",
    subtitle: "Шахматная олимпиада в Элисте",
    description: "Шахматные достопримечательности Элисты. Сеанс одновременной игры с чемпионом Калмыкии.",
    duration: "2 часа",
    price: "от 1000 ₽",
    category: "culture",
    categoryLabel: "Культура",
    icon: "♟",
    highlights: ["Шахматные достопримечательности", "Сеанс игры", "История Остапа Бендера"],
    gradient: "linear-gradient(135deg, #b8651f 0%, #d4a574 100%)",
    season: "Круглогодично",
  },
];

export const getToursByCategory = (category: string): Tour[] => {
  if (category === "all") return tours;
  return tours.filter((tour) => tour.category === category);
};

export const getTourById = (id: string): Tour | undefined => {
  return tours.find((tour) => tour.id === id);
};

export const categories = [
  { id: "all", label: "Все туры" },
  { id: "culture", label: "Культура" },
  { id: "nature", label: "Природа" },
  { id: "adventure", label: "Приключения" },
  { id: "wellness", label: "Оздоровление" },
];