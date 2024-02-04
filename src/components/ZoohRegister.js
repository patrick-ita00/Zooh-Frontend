// ZoohRegister.js

import React, { useState } from 'react';
import ZoohForm from './ZoohForm';
import AlertSuccess from './AlertSuccess';

const ZoohRegister = ({ onLogin }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleRegister = async (formData) => {
    try {
      const response = await fetch('http://localhost:8080/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registered successfully');

        // Assuming the response contains user data after registration
        const userData = await response.json();

        // Call the onLogin prop with user data
        onLogin(userData);

        // Set state to show success message
        setShowSuccessMessage(true);

        // Hide success message after 2 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 2000);
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      <ZoohForm onRegister={handleRegister} onLogin={onLogin} />
      
      {/* Display success message using the AlertSuccess component */}
      {showSuccessMessage && (
        <AlertSuccess text="Registration successful!" />
      )}
    </div>
  );
};

export default ZoohRegister;
