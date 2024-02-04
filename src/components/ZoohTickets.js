import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AlertSuccess from './AlertSuccess';

const PriceList = () => (
  <div style={{ marginTop: '20px', color: 'white' }}>
    <h5>Price List:</h5>
    <ul>
      <li>Kids (6-17): $10</li>
      <li>Adults (18-60): $20</li>
      <li>Elderly (60+): $15</li>
    </ul>
  </div>
);

function ZoohTickets() {
  const [kidsCount, setKidsCount] = useState(0);
  const [adultsCount, setAdultsCount] = useState(0);
  const [elderlyCount, setElderlyCount] = useState(0);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleIncrement = (type) => {
    switch (type) {
      case 'kids':
        setKidsCount(kidsCount + 1);
        break;
      case 'adults':
        setAdultsCount(adultsCount + 1);
        break;
      case 'elderly':
        setElderlyCount(elderlyCount + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type) => {
    switch (type) {
      case 'kids':
        if (kidsCount > 0) setKidsCount(kidsCount - 1);
        break;
      case 'adults':
        if (adultsCount > 0) setAdultsCount(adultsCount - 1);
        break;
      case 'elderly':
        if (elderlyCount > 0) setElderlyCount(elderlyCount - 1);
        break;
      default:
        break;
    }
  };

  const handleCheckout = async () => {
    const totalPrice = kidsCount * 10 + adultsCount * 20 + elderlyCount * 15;
    console.log('Selected Tickets:', { kidsCount, adultsCount, elderlyCount });
    console.log('Total Price:', totalPrice);

    // Replace '1' with the actual userId from your application state or context
    const userId = 3;

    const requestData = {
      kidsCount,
      adultsCount,
      elderlyCount,
      totalPrice,
      userId,
    };

    try {
      const response = await fetch('http://localhost:8080/ticket/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const createdTickets = await response.json();
        console.log('Tickets created successfully:', createdTickets);
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 2000);
      } else {
        console.error('Failed to create tickets:', response.statusText);
        // Handle the error as needed
      }
    } catch (error) {
      console.error('Error creating tickets:', error.message);
      // Handle the error as needed
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px', color: 'white' }}>
      {/* Render the success alert when showSuccessAlert is true */}
      {showSuccessAlert && <AlertSuccess text="Tickets purchased successfully!" />}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ marginRight: '10px' }}>Kids (6-17)</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="outline-secondary" onClick={() => handleDecrement('kids')} disabled={kidsCount === 0}>
            -
          </Button>
          <Form.Control
            value={kidsCount}
            readOnly
            aria-label="Kids Count"
            style={{ textAlign: 'center', width: '50px', marginLeft: '5px', marginRight: '5px', fontSize: '14px', padding: '5px' }}
          />
          <Button variant="outline-secondary" onClick={() => handleIncrement('kids')}>
            +
          </Button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ marginRight: '10px' }}>Adults (18-60)</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="outline-secondary" onClick={() => handleDecrement('adults')} disabled={adultsCount === 0}>
            -
          </Button>
          <Form.Control
            value={adultsCount}
            readOnly
            aria-label="Adults Count"
            style={{ textAlign: 'center', width: '50px', marginLeft: '5px', marginRight: '5px', fontSize: '14px', padding: '5px' }}
          />
          <Button variant="outline-secondary" onClick={() => handleIncrement('adults')}>
            +
          </Button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ marginRight: '10px' }}>Elderly (60+)</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="outline-secondary" onClick={() => handleDecrement('elderly')} disabled={elderlyCount === 0}>
            -
          </Button>
          <Form.Control
            value={elderlyCount}
            readOnly
            aria-label="Elderly Count"
            style={{ textAlign: 'center', width: '50px', marginLeft: '5px', marginRight: '5px', fontSize: '14px', padding: '5px' }}
          />
          <Button variant="outline-secondary" onClick={() => handleIncrement('elderly')}>
            +
          </Button>
        </div>
      </div>

      <Button variant="success" onClick={handleCheckout} style={{ marginBottom: '20px' }}>
        Checkout
      </Button>

      <PriceList />
    </div>
  );
}

export default ZoohTickets;
