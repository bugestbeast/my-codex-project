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
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=255&h=210'
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
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=255&h=211'
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
    img: 'https://images.unsplash.com/photo-1505691723518-36a8a26516a3?auto=format&fit=crop&w=255&h=212'
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
    img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=255&h=213'
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
    img: 'https://images.unsplash.com/photo-1560448070-bb1a7e2481c1?auto=format&fit=crop&w=255&h=214'
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
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=255&h=215'
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
    img: 'https://images.unsplash.com/photo-1582268611959-379b7a6c8550?auto=format&fit=crop&w=255&h=216'
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
    img: 'https://images.unsplash.com/photo-1468252534325-b76c1d9582ab?auto=format&fit=crop&w=255&h=217'
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
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=255&h=218'
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
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=255&h=219'
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
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=255&h=220'
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
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=255&h=221'
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
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=255&h=222'
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
    img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=255&h=223'
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
    img: 'https://images.unsplash.com/photo-1559599239-0f81a63948c0?auto=format&fit=crop&w=255&h=224'
  }
];
