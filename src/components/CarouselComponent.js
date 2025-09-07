// src/components/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css';

const images = [
  '/Nursery/bg21.jpg', '/Nursery/r1.jpg', '/Nursery/r7.jpg',
  '/Nursery/e1.jpg', '/Nursery/e2.jpg', '/Nursery/e3.jpg',
  '/Nursery/e4.jpg', '/Nursery/r3.jpg', '/Nursery/e5.jpg'
  // Add more images as needed
];

const descriptions = [
  'Discover different kinds of plants in our nursery. From vibrant flowers to lush greenery, explore our diverse collection.',
  'Learn about the environment of our nursery. We provide a nurturing habitat for our plants, ensuring their health and vitality.',
  'Find out about our sustainable practices and how we maintain a balance with nature to promote eco-friendly gardening.'
];

const titles = [
  'Our Plant Collection', 
  'Nurturing Environment', 
  'Sustainable Practices'
];

const groupSize = 3;
const groups = Array.from({ length: Math.ceil(images.length / groupSize) }, (_, i) => images.slice(i * groupSize, i * groupSize + groupSize));

const CarouselComponent = () => {
  return (
    <Carousel>
      {groups.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-group">
            {group.map((src, idx) => (
              <img
                key={idx}
                className="carousel-image"
                src={src}
                alt={`Slide ${index * groupSize + idx}`}
              />
            ))}
          </div>
          <Carousel.Caption>
            <h3>{titles[index]}</h3> {/* Use titles for each slide */}
            <p>{descriptions[index]}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
