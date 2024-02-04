import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeartFill as FillHeart, Heart } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ZoohCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const redHeartStyle = { color: 'red' };

  useEffect(() => {
    // Fetch user data to check if the event is in favorites
    fetch(`http://localhost:8080/user/get/3`)
      .then(response => response.json())
      .then(data => {
        const favoriteEventIds = data.favoriteEventIds || [];
        setIsFavorite(favoriteEventIds.includes(props.eventID));
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, [props.eventID]);

  const handleToggleFavorite = () => {
    if (props.eventID === undefined) {
      console.error('Event ID is undefined.');
      return;
    }

    // Call the endpoint to add/remove the event from favorites
    fetch(`http://localhost:8080/user/addFavorite/3/${props.eventID}`, {
      method: 'PUT',
    })
      .then(response => response.json())
      .then(data => {
        const favoriteEventIds = data.favoriteEventIds || [];
        setIsFavorite(favoriteEventIds.includes(props.eventID));
      })
      .catch(error => console.error('Error updating favorites:', error));
  };

  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <blockquote className="blockquote mb-0" style={{ flex: '1' }}>
            <p>{props.title}</p>
            <footer className="blockquote-footer">{props.desc}</footer>
          </blockquote>
          <Button variant="outline-light" onClick={handleToggleFavorite}>
            {isFavorite ? <FillHeart size={20} style={redHeartStyle} /> : <Heart size={20} />}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ZoohCard;
