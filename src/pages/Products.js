import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import mockPlants from '../services/mockData'; // Import your mock data
import './Products.css'; // Import the CSS file for styling

const Products = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Filter plants based on categoryId
    const filteredPlants = mockPlants.filter(plant => plant.category === categoryId);
    setPlants(filteredPlants);
  }, [categoryId]);

  const handleOrderClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Container>
      <Row>
        {plants.map((plant) => (
          <Col md={3} key={plant.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={plant.image} />
              <Card.Body>
                <Card.Title>{plant.name}</Card.Title>
                <Card.Text>{plant.description}</Card.Text>
                <Card.Text className="price">${plant.price}</Card.Text> {/* Display price */}
                <Button variant="primary" onClick={() => handleOrderClick(plant.id)}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
