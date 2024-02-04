import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ZoohForm = ({ onRegister, onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    id: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login button clicked');

    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        
        // Update state with the received user data
        setFormData({
          ...formData,
          id: responseData.id,
        });

        // Print out user data
        console.log('Login successful. User ID:', responseData.id);
        console.log('Login successful. User Name:', responseData.name);

        // You can perform additional actions with the user data if needed

      } else {
        const errorMessage = await response.text();
        console.error('Login failed:', errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleRegister}>
              Register
            </Button>

            <Button variant="success" type="submit">
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ZoohForm;
