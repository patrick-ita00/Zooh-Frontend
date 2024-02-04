import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../imgs/logo.png';

function ZoohHeader({ userData, onLogout }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (userData) {
      setLoggedIn(true);
      setUserId(userData.id);
    } else {
      setLoggedIn(false);
      setUserId(null);
    }
  }, [userData]);

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width=""
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {loggedIn ? (
                <>
                  Welcome, <span>{userData.name}</span>! |{' '}
                  <a href="#" onClick={onLogout}>Logout</a>
                </>
              ) : (
                <>
                  Not logged in | <a href="/register">Login</a> or{' '}
                  <a href="/register">Register</a>
                </>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ZoohHeader;
