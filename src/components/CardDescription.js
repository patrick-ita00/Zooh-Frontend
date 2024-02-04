// UserCard.js

import React from 'react';
import Card from 'react-bootstrap/Card';

const UserCard = ({ userData }) => {
  return (
    <Card style={{ margin: '10px' }}>
      <Card.Body>
        <Card.Title>User Information</Card.Title>
        <Card.Text>
          <strong>ID:</strong> {userData.id} <br />
          <strong>Username:</strong> {userData.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
