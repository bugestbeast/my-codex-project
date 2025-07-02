export interface Listing {
  id: string;
  city: string;
  title: string;
  dateRange: string;
  hostType: 'Individual host';
  priceEur: number;
  nights: number;
  rating: number;
  img: string;
}

export const popularLondon: Listing[] = [
  {
    id: '1',
    city: 'London',
    title: 'Room in Wapping',
    dateRange: '19–21 Jun',
    hostType: 'Individual host',
    priceEur: 49,
    nights: 2,
    rating: 4.97,
    img: 'https://source.unsplash.com/random/255x210?apartment'
  },
  {
    id: '2',
    city: 'London',
    title: 'Bright studio',
    dateRange: '22–24 Jun',
    hostType: 'Individual host',
    priceEur: 59,
    nights: 2,
    rating: 4.8,
    img: 'https://source.unsplash.com/random/255x211?apartment'
  },
  {
    id: '3',
    city: 'London',
    title: 'Riverside flat',
    dateRange: '25–27 Jun',
    hostType: 'Individual host',
    priceEur: 79,
    nights: 2,
    rating: 4.9,
    img: 'https://source.unsplash.com/random/255x212?apartment'
  },
  {
    id: '4',
    city: 'London',
    title: 'Historic home',
    dateRange: '28–30 Jun',
    hostType: 'Individual host',
    priceEur: 89,
    nights: 2,
    rating: 5,
    img: 'https://source.unsplash.com/random/255x213?apartment'
  },
  {
    id: '5',
    city: 'London',
    title: 'Stylish loft',
    dateRange: '1–3 Jul',
    hostType: 'Individual host',
    priceEur: 69,
    nights: 2,
    rating: 4.95,
    img: 'https://source.unsplash.com/random/255x214?apartment'
  },
  {
    id: '6',
    city: 'London',
    title: 'Cozy house',
    dateRange: '4–6 Jul',
    hostType: 'Individual host',
    priceEur: 99,
    nights: 2,
    rating: 4.85,
    img: 'https://source.unsplash.com/random/255x215?apartment'
  },
  {
    id: '7',
    city: 'London',
    title: 'Penthouse view',
    dateRange: '7–9 Jul',
    hostType: 'Individual host',
    priceEur: 129,
    nights: 2,
    rating: 4.99,
    img: 'https://source.unsplash.com/random/255x216?apartment'
  }
];

export const availableParis: Listing[] = [
  {
    id: 'p1',
    city: 'Paris',
    title: 'Elegant studio',
    dateRange: '10–12 Jun',
    hostType: 'Individual host',
    priceEur: 55,
    nights: 2,
    rating: 4.9,
    img: 'https://source.unsplash.com/random/255x217?apartment'
  },
  {
    id: 'p2',
    city: 'Paris',
    title: 'Charming flat',
    dateRange: '13–15 Jun',
    hostType: 'Individual host',
    priceEur: 65,
    nights: 2,
    rating: 4.8,
    img: 'https://source.unsplash.com/random/255x218?apartment'
  },
  {
    id: 'p3',
    city: 'Paris',
    title: 'Central apartment',
    dateRange: '16–18 Jun',
    hostType: 'Individual host',
    priceEur: 75,
    nights: 2,
    rating: 4.88,
    img: 'https://source.unsplash.com/random/255x219?apartment'
  },
  {
    id: 'p4',
    city: 'Paris',
    title: 'Rooftop room',
    dateRange: '19–21 Jun',
    hostType: 'Individual host',
    priceEur: 85,
    nights: 2,
    rating: 4.97,
    img: 'https://source.unsplash.com/random/255x220?apartment'
  },
  {
    id: 'p5',
    city: 'Paris',
    title: 'Modern loft',
    dateRange: '22–24 Jun',
    hostType: 'Individual host',
    priceEur: 95,
    nights: 2,
    rating: 4.94,
    img: 'https://source.unsplash.com/random/255x221?apartment'
  },
  {
    id: 'p6',
    city: 'Paris',
    title: 'Quiet retreat',
    dateRange: '25–27 Jun',
    hostType: 'Individual host',
    priceEur: 58,
    nights: 2,
    rating: 4.82,
    img: 'https://source.unsplash.com/random/255x222?apartment'
  },
  {
    id: 'p7',
    city: 'Paris',
    title: 'Classic studio',
    dateRange: '28–30 Jun',
    hostType: 'Individual host',
    priceEur: 70,
    nights: 2,
    rating: 4.86,
    img: 'https://source.unsplash.com/random/255x223?apartment'
  },
  {
    id: 'p8',
    city: 'Paris',
    title: 'Artistic flat',
    dateRange: '1–3 Jul',
    hostType: 'Individual host',
    priceEur: 80,
    nights: 2,
    rating: 4.91,
    img: 'https://source.unsplash.com/random/255x224?apartment'
  }
];
