import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PlantCard from './PlantCard';
import plantService from '../services/plantService';

const PlantList = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const result = await plantService.getPlants();
      setPlants(result);
    };
    fetchPlants();
  }, []);

  return (
    <Container>
      <Row>
        {plants.map(plant => (
          <Col md={4} key={plant.id}>
            <PlantCard plant={plant} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlantList;
