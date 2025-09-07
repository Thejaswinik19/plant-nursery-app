import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarouselComponent from '../components/CarouselComponent';
import ExclusiveOffers from '../components/ExclusiveOffers'; // Import the ExclusiveOffers component
import Footer from '../components/Footer';
import './Home.css'; // Import the CSS file for Home page styling

const categories = [
  { id: 'indoor', name: 'Indoor Plants', image: '/Nursery/i1.jpg' },
  { id: 'medicinal', name: 'Medicinal Plants', image: '/Nursery/h5.jpg' },
  { id: 'fruits', name: 'Fruit Plants', image: '/Nursery/fr.jpg' },
  { id: 'flower', name: 'Flower Plants', image: '/Nursery/f1.jpg' },
  { id: 'seeds', name: 'Seeds', image: '/Nursery/s2.jpg' }
  // Add more categories if needed
];

const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <Container>
        <h2 className="section-heading">Explore Our Categories</h2> {/* Section Heading */}
        <Row className="categories-row">
          {categories.map((category) => (
            <Col md={2} key={category.id} className="mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src={category.image} />
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                  <Link to={`/products/${category.id}`} className="btn btn-primary">View Products</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
         {/* Exclusive Offers on Pots Section */}
         <ExclusiveOffers />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
