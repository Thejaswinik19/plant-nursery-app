import React from 'react';
import { Card } from 'react-bootstrap';
import './PlantCard.css';
const PlantCard = ({ plant }) => {
  return (
    <Card>
      <Card.Img variant="top" src={plant.image} />
      <Card.Body>
        <Card.Title>{plant.name}</Card.Title>
        <Card.Text>{plant.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlantCard;
