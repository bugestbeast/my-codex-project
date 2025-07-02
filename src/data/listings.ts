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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
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
    img: 'https://a0.muscache.com/im/pictures/airflow/Hosting-2524440/original/85576ecf-9476-44a4-8374-82195ad7c3ba.jpg?im_w=1200'
  }
];
