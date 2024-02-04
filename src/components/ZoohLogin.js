// ZoohLogin.js
import React, { useState, useEffect } from 'react';
import ZoohForm from './ZoohForm';
import AlertSuccess from './AlertSuccess';
import ZoohHeader from './ZoohHeader';

const ZoohLogin = () => {
  const [userData, setUserData] = useState({
    id: null,
    name: null,
  });

  const handleLogin = async (formData) => {
    try {
      console.log('Form data submitted:', formData);
  
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      console.log('Full response:', response);
  
      // Log status code
      console.log('Status Code:', response.status);
  
      // Log headers
      console.log('Headers:', response.headers);
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Login successful:', responseData);
  
        // Update the userData state with the received data
        setUserData({
          id: responseData.id,
          name: responseData.name,
        });
      } else {
        const errorMessage = await response.text();
        console.error('Login failed:', errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  
  
  
  

  const handleRegister = (formData) => {
    // Implement registration logic if needed
    console.log('Registering user:', formData);
  };

  const handleLogout = () => {
    // Clear user data on logout
    setUserData({
      id: null,
      name: null,
    });
  };

  useEffect(() => {
    // Log userData whenever it changes
    console.log('UserData changed:', userData);
  }, [userData]);

  return (
    <div>
      <h2>Login</h2>
      {/* Pass onLogin prop with the handleLogin function */}
      <ZoohForm onRegister={handleRegister} onLogin={handleLogin} />
      
      {/* Display success message using the AlertSuccess component */}
      {/* You can conditionally render ZoohHeader with the updated user data */}
      {userData.id && (
        <div>
          <AlertSuccess text="Login successful!" />
          <ZoohHeader userData={userData} onLogout={handleLogout} />
        </div>
      )}
    </div>
  );
};

export default ZoohLogin;
