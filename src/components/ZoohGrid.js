import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function ZoohGrid() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/animal/all')
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {animals.map(animal => (
        <Col key={animal.animalID}>
          <Card>
            <Card.Img variant="top" src={animal.image} alt='' />
            <Card.Body>
              <Card.Title>{animal.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ZoohGrid;
