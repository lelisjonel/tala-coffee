// All placeholder content lives here so it's easy to swap for real details.

export const site = {
  name: 'Tala Coffee',
  tagline: 'Slow coffee for busy mornings.',
  description:
    'Tala Coffee is a neighborhood café roasting single-origin Philippine beans in small batches. Espresso, pour-overs, and pastries baked every morning.',
  email: 'hello@example.com',
  phone: '+63 917 123 4567',
  address: ['123 Maginhawa St.', 'Quezon City, Metro Manila'],
  mapUrl: 'https://maps.google.com/?q=Maginhawa+St+Quezon+City',
  instagram: 'https://instagram.com/',
  hours: [
    { days: 'Mon – Fri', time: '7:00 AM – 9:00 PM' },
    { days: 'Saturday', time: '8:00 AM – 10:00 PM' },
    { days: 'Sunday', time: '8:00 AM – 6:00 PM' },
  ],
};

export type Drink = {
  name: string;
  description: string;
  price: number;
  /** Colors for the illustrated cup */
  liquid: string;
  foam?: string;
  tag?: string;
};

export const featured: Drink[] = [
  {
    name: 'Tala Signature Latte',
    description: 'Double espresso, steamed milk, and our house muscovado syrup.',
    price: 185,
    liquid: '#b27b52',
    foam: '#f1dfc7',
    tag: 'Best seller',
  },
  {
    name: 'Barako Cold Brew',
    description: 'Batangas Liberica steeped for 18 hours. Bold, chocolatey, smooth.',
    price: 170,
    liquid: '#3a2418',
    tag: 'Local bean',
  },
  {
    name: 'Ube Cloud Latte',
    description: 'House-made ube halaya, espresso, and a cloud of cold foam.',
    price: 210,
    liquid: '#8a6aa8',
    foam: '#efe6f5',
    tag: 'Seasonal',
  },
];

export type MenuSection = {
  title: string;
  note?: string;
  items: { name: string; description?: string; price: number }[];
};

export const menu: MenuSection[] = [
  {
    title: 'Espresso',
    note: 'Single-origin Benguet Arabica. Oat milk +₱30.',
    items: [
      { name: 'Espresso', description: 'Double shot', price: 120 },
      { name: 'Americano', description: 'Hot or iced', price: 140 },
      { name: 'Flat White', price: 165 },
      { name: 'Cappuccino', price: 165 },
      { name: 'Tala Signature Latte', description: 'Muscovado & sea salt', price: 185 },
      { name: 'Spanish Latte', description: 'Condensed milk, iced', price: 180 },
    ],
  },
  {
    title: 'Slow Bar',
    note: 'Brewed to order, about 4 minutes.',
    items: [
      { name: 'Pour-over', description: 'Rotating single origin', price: 190 },
      { name: 'Barako Cold Brew', description: '18-hour steep', price: 170 },
      { name: 'Kapeng Barako', description: 'Traditional, with muscovado on the side', price: 130 },
    ],
  },
  {
    title: 'Not Coffee',
    items: [
      { name: 'Ube Cloud Latte', description: 'Can be made without espresso', price: 210 },
      { name: 'Tablea Hot Chocolate', description: 'Cebu tablea, steamed milk', price: 175 },
      { name: 'Calamansi Sparkler', description: 'Calamansi, honey, soda', price: 150 },
      { name: 'Matcha Latte', price: 190 },
    ],
  },
  {
    title: 'Baked Daily',
    note: 'Baked fresh every morning. While supplies last.',
    items: [
      { name: 'Butter Croissant', price: 120 },
      { name: 'Ensaymada', description: 'Queso de bola & butter', price: 110 },
      { name: 'Banana Bread', description: 'With walnuts', price: 95 },
      { name: 'Ube Cheese Pandesal', description: 'Set of 3', price: 90 },
    ],
  },
];

export const origins = [
  { region: 'Benguet', altitude: '1,500 m', notes: 'Citrus, honey, cacao nib', bean: 'Arabica' },
  { region: 'Batangas', altitude: '300 m', notes: 'Dark chocolate, smoky, bold', bean: 'Liberica (Barako)' },
  { region: 'Sagada', altitude: '1,600 m', notes: 'Red berry, brown sugar, floral', bean: 'Arabica' },
];

export const testimonials = [
  { quote: 'The barako cold brew ruined every other cold brew for me. In a good way.', author: 'Mika R.', source: 'Google review' },
  { quote: 'Quiet enough to work, cozy enough to stay. The ensaymada is the best in QC.', author: 'Paolo D.', source: 'Instagram' },
  { quote: 'You can taste that they actually care about the farmers and the beans.', author: 'Andrea L.', source: 'Google review' },
];
