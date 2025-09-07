import React, { useState, useEffect } from 'react';
import {  Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ExclusiveOffers.css'; // Import the CSS file for styling

const offers = [
  { id: 21, image: '/Nursery/pot1.jpg', title: 'Decorative Ceramic Pots', description: 'Get 20% off on our exclusive range of decorative ceramic pots.', discount: '20% OFF' },
  { id: 22, image: '/Nursery/pot2.jpg', title: 'Modern Concrete Pots', description: 'Stylish and durable concrete pots with 15% discount.', discount: '15% OFF' },
  { id: 23, image: '/Nursery/pot3.jpg', title: 'Vintage Terra Cotta Pots', description: 'Classic terra cotta pots now 25% off.', discount: '25% OFF' },
  { id: 24, image: '/Nursery/pot4.jpg', title: 'Elegant Glass Pots', description: 'Elegant glass pots with a 10% discount.', discount: '10% OFF' },
  { id: 25, image: '/Nursery/pot5.jpg', title: 'Handcrafted Wooden Pots', description: 'Unique handcrafted wooden pots at 30% off.', discount: '30% OFF' }
];

// Function to generate random time left for the countdown
const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 2);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);
  return (hours * 3600 + minutes * 60 + seconds) * 1000; // Time in milliseconds
};

const ExclusiveOffers = () => {
  const navigate = useNavigate();
  const [offersWithTimer, setOffersWithTimer] = useState(() =>
    offers.map(offer => ({ ...offer, timeLeft: getRandomTime() }))
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setOffersWithTimer(prevOffers =>
        prevOffers.map(offer => ({
          ...offer,
          timeLeft: offer.timeLeft <= 0 ? getRandomTime() : offer.timeLeft - 1000
        }))
      );
    }, 1000); // Update every second

    return () => clearInterval(countdownInterval);
  }, []);

  const formatTimeLeft = (time) => {
    const hours = Math.floor((time % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((time % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleShopNow = (offerId) => {
    navigate(`/shoppot/${offerId}`);
  };
  
  return (
    <div className="exclusive-offers">
      <h2 className="blinking">......Exclusive Offers on Pots.......</h2>
      <div className="offers-container">
        {offersWithTimer.map((offer) => (
          <div className="offer-item" key={offer.id}>
            <Card className="offer-card">
              <Card.Img variant="top" src={offer.image} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>
                  <strong>{offer.discount}</strong> - {offer.description}
                </Card.Text>
                <div className="countdown-timer">
                  <p>Time Left: {formatTimeLeft(offer.timeLeft)}</p>
                </div>
                <Button
                  variant="success"
                  onClick={() => handleShopNow(offer.id)}
                >
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
