const mockPlants = [
  {
    id: 1,
    name: 'Snake Plant',
    description: 'A low-maintenance, air-purifying plant with striking, upright leaves that add a modern touch to any space. Ideal for low-light areas and infrequent watering.',
    image: '/Nursery/i3.jpg',
    category: 'indoor',
    price: 12.99, // Change price to a number
  },
  {
    id: 2,
    name: 'Zebra Plant',
    description: 'A stunning houseplant known for its bold, striped leaves and vibrant yellow or orange flowers. Prefers bright, indirect light and regular watering to maintain its striking appearance.',
    image: '/Nursery/i4.jpg',
    category: 'indoor',
    price: 8.99, // Change price to a number
  },
  {
    id: 3,
    name: 'Golden Money Plant',
    description: 'A hardy, trailing plant with vibrant green leaves splashed with golden-yellow highlights. Ideal for low-light conditions and easy to care for, making it a popular choice for indoor spaces.',
    image: '/Nursery/i5.jpg',
    category: 'indoor',
    price: 4.99, // Change price to a number
  },
  {
    id: 4,
    name: 'Peace Lily',
    description: 'A beautiful, low-maintenance plant with glossy green leaves and elegant white blooms. Thrives in low to bright indirect light and helps purify indoor air.',
    image: '/Nursery/i6.jpg',
    category: 'indoor',
    price: 15.99, // Change price to a number
  },
  {
    id: 5,
    name: 'Basil Plant',
    description: ' Revered for its aromatic leaves and spiritual significance, Tulasi (Holy Basil) thrives in sunlight and is known for its medicinal and religious value. Ideal for both gardens and indoor pots.',
    image: '/Nursery/m5.jpg',
    category: 'medicinal',
    price: 9.99, // Change price to a number
  },
  {
    id: 6,
    name: 'Mint',
    description: 'A fragrant herb with vibrant green leaves, perfect for adding fresh flavor to dishes and drinks. Thrives in both indoor pots and outdoor gardens with regular watering and partial sunlight.',
    image: '/Nursery/m4.jpg',
    category: 'medicinal',
    price: 5.99, // Change price to a number
  },
  {
    id: 7,
    name: 'Aloe Vera',
    description: 'A hardy succulent known for its fleshy, serrated leaves and soothing gel. Ideal for bright, indirect light and minimal watering, it’s perfect for both its aesthetic appeal and medicinal uses.',
    image: '/Nursery/m2.jpg',
    category: 'medicinal',
    price: 12.99, // Change price to a number
  },
  {
    id: 8,
    name: 'Butterfly Pea',
    description: ' An enchanting climbing plant with striking blue flowers and a rich history in traditional medicine. Known for its vibrant color and potential health benefits, it thrives in sunny spots and makes a stunning addition to gardens and teas.',
    image: '/Nursery/m6.jpg',
    category: 'medicinal',
    price: 8.99, // Change price to a number
  },
  {
    id: 9,
    name: 'Mango Plant',
    description: 'Mango plants thrive in tropical and subtropical climates, producing sweet, juicy fruits with a fragrant aroma. Known for their lush, green foliage, mango trees provide abundant shade and are prized for their delicious, succulent mangoes.',
    image: '/Nursery/fr1.jpg',
    category: 'fruits',
    price: 4.99, // Change price to a number
  },
  {
    id: 10,
    name: 'Jackfruit plant',
    description: 'Jackfruit plants are robust tropical trees that produce the largest fruit of any tree, with a sweet, fibrous flesh and a unique, tropical flavor. This versatile fruit is often used in both savory and sweet dishes, and the plant’s large leaves offer excellent shade.',
    image: '/Nursery/fr2.jpg',
    category: 'fruits',
    price: 15.99, // Change price to a number
  },
  {
    id: 11,
    name: 'Dragon Fruit Plant',
    description: 'Dragon fruit plants, or pitaya, are striking cacti that bear eye-catching fruits with a vibrant pink or yellow skin and a mildly sweet, creamy flesh. These plants are well-suited for warm climates and add an exotic touch to any garden.',
    image: '/Nursery/fr3.jpg',
    category: 'fruits',
    price: 9.99, // Change price to a number
  },
  {
    id: 12,
    name: 'Guava plant',
    description: 'Guava plants are hardy tropical trees known for their aromatic, green fruits with a sweet, tangy flavor. The plant’s glossy leaves and fragrant flowers make it a beautiful addition to gardens, while the guava fruit is a nutritional powerhouse.',
    image: '/Nursery/fr4.jpg',
    category: 'fruits',
    price: 5.99, // Change price to a number
  },
  {
    id: 13,
    name: 'Rose Plant',
    description: 'A classic, elegant flowering plant with a wide variety of colors and fragrances. Requires plenty of sunlight and regular watering to thrive, making it a cherished addition to any garden or indoor space.',
    image: '/Nursery/r4.jpg',
    category: 'flower',
    price: 9.99, // Change price to a number
  },
  {
    id: 14,
    name: 'Hibiscus Plant',
    description: ' A vibrant, tropical plant known for its large, colorful blooms and lush foliage. Thrives in sunny locations and requires regular watering, making it a striking choice for gardens and indoor spaces.',
    image: '/Nursery/h3.jpg',
    category: 'flower',
    price: 5.99, // Change price to a number
  },
  {
    id: 15,
    name: 'Marigold Plant',
    description: 'Marigold plants are vibrant, hardy annuals known for their bright, cheerful blooms in shades of orange, yellow, and red. They are perfect for adding a splash of color to gardens and are valued for their ability to repel pests, making them a practical choice for vegetable gardens.',
    image: '/Nursery/m1.jpg',
    category: 'flower',
    price: 9.99, // Change price to a number
  },
  {
    id: 16,
    name: 'Jasmine Plant',
    description: 'Jasmine plants are renowned for their delicate, fragrant white or pink flowers that bloom throughout the year. They are ideal for adding a sweet aroma to gardens or indoor spaces and can be grown as shrubs or climbing vines, making them versatile in garden design.',
    image: '/Nursery/j2.jpg',
    category: 'flower',
    price: 5.99, // Change price to a number
  },
  {
    id: 17,
    name: 'Cucumber seed',
    description: 'Cucumber seeds produce fast-growing, versatile plants that yield crisp, refreshing cucumbers. Ideal for both garden beds and containers, cucumbers thrive in warm weather and can be used fresh in salads or pickled.',
    image: '/Nursery/seed1.jpg',
    category: 'seeds',
    price: 9.99, // Change price to a number
  },
  {
    id: 18,
    name: 'Watermelon seed',
    description: 'Watermelon seeds grow into sprawling vines that produce large, sweet fruits with a juicy red interior and green rind. Best suited for warm climates, watermelons require plenty of space and sun for optimal fruit development.',
    image: '/Nursery/seed2.jpeg',
    category: 'seeds',
    price: 5.99, // Change price to a number
  },
  {
    id: 19,
    name: 'Pumpkin seed',
    description: 'Pumpkin seeds produce vibrant, sprawling vines that yield large, nutritious pumpkins with a rich, orange flesh. Ideal for warm climates, pumpkins are versatile for cooking and baking, and their seeds can be roasted for a healthy snack.',
    image: '/Nursery/seed3.jpg',
    category: 'seeds',
    price: 9.99, // Change price to a number
  },
  {
    id: 20,
    name: 'Radish Seed',
    description: 'Radish seeds generate quick-growing, crunchy roots with a peppery flavor, perfect for adding zest to salads. They are well-suited for cooler weather and can be harvested in just a few weeks from sowing.',
    image: '/Nursery/seed4.jpg',
    category: 'seeds',
    price: 5.99, // Change price to a number
  },
];

export default mockPlants;
