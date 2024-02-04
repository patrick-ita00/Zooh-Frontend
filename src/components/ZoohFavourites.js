import React from 'react';

const ZoohFavourites = ({ userData }) => {
  return (
    <div>
      <h2>Favourites</h2>
      {userData ? (
        <p>Your user ID: {userData.id}</p>
      ) : (
        <p>Please log in to view your favourites.</p>
      )}
    </div>
  );
};

export default ZoohFavourites;
