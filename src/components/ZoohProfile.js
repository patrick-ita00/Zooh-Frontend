import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ZoohProfile() {
  const [name, setName] = useState('John Doe');
  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  
  const [originalName, setOriginalName] = useState('John Doe');
  const [originalPassword, setOriginalPassword] = useState('');

  const handleSave = () => {
    // Send a PUT request to update the name and password on the server
    // You can implement the API call here
    console.log('Saving changes:', name, password, currentPassword);
  };

  const handleCancel = () => {
    // Restore the original data without sending anything to the server
    setName(originalName);
    setPassword(originalPassword);
    setCurrentPassword('');
    console.log('Canceling changes');
  };

  return (
    <Row>
      <Col md={6}>
        <ListGroup>
          <ListGroup.Item>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </ListGroup.Item>
          
          <ListGroup.Item>
            <Button variant="primary" onClick={handleSave}>Save</Button>{' '}
            <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default ZoohProfile;
