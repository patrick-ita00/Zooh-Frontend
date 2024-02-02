import React from 'react';
import ZoohForm from './ZoohForm';

const ZoohRegister = () => {
  const handleRegister = async (formData) => {
    try {
      const response = await fetch('localhost:8080/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <ZoohForm onRegister={handleRegister} />
    </div>
  );
};

export default ZoohRegister;
