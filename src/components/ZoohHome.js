import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ZoohCard from './ZoohCard';
import ZoohFigure from './ZoohFigure';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CardDescription from './CardDescription';
import ZoohTag from './ZoohTag';
import logo from '../imgs/pet-goats.jpg';
import kangaroo from '../imgs/kangaroo.jpg';
import elephant from '../imgs/elephant.jpg';
import giraffe from '../imgs/giraffe-wild.jpg';
import lion from '../imgs/lion.jpg';
import pinguins from '../imgs/pinguins.jpeg';

function ZoohHome() {
  const [events, setEvents] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const animalImages = [lion, elephant, giraffe, pinguins, kangaroo];

  useEffect(() => {
    // Fetch events data from the backend
    fetch('http://localhost:8080/events/all')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching event data:', error));

    // Fetch animals data from the backend
    fetch('http://localhost:8080/animal/all')
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => console.error('Error fetching animal data:', error));
  }, []);

  // Function to handle click on a ZoohCard
  const handleCardClick = (eventID) => {
    // Fetch data for the clicked card from the backend
    fetch(`http://localhost:8080/events/get/${eventID}`)
      .then(response => response.json())
      .then(data => {
        setSelectedCardData(data);
        setShowOffcanvas(true); // Show the Offcanvas when a card is clicked
      })
      .catch(error => console.error('Error fetching selected card data:', error));
  };

  // Function to hide the Offcanvas
  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  return (
  <div>
    {/* Events Carousel */}
    <h2 style={{ color: 'white' }}>Events</h2>
    <Carousel indicators={false}>
      {events.map((event) => (
        <Carousel.Item key={event.eventID} onClick={() => handleCardClick(event.eventID)}>
        <ZoohCard
          title={event.name}
          text={event.name}
          time={new Date(event.time).toLocaleString()}
          image={logo}
          eventID={event.eventID} // Pass the eventID as a prop
        />
      </Carousel.Item>
      ))}
    </Carousel>

    {/* Animals Carousel with Figures */}
    <h2 style={{ color: 'white' }}>Animals</h2>
    <Carousel indicators={false}>
      {animalImages.map((animalImage, index) => (
        <Carousel.Item key={index}>
          <ZoohFigure image={animalImage} />
          <Carousel.Caption>
            {animals[index] && <h1 style={{ color: 'white' }}>{animals[index].name}</h1>}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);
}

export default ZoohHome;
