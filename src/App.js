import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ZoohHeader from './components/ZoohHeader';
import ZoohFooter from './components/ZoohFooter';
import ZoohSearchBar from './components/ZoohSearchBar';
import ZoohHome from './components/ZoohHome';
import ZoohTickets from './components/ZoohTickets';
import ZoohProfile from './components/ZoohProfile';
import ZoohFavourites from './components/ZoohFavourites';
import ZoohNavBar from './components/ZoohNavBar';
import ZoohRegister from './components/ZoohRegister';
import ZoohGroup from './components/ZoohGroup';
import ZoohGrid from './components/ZoohGrid';
import ZoohFigure from './components/ZoohFigure';
import ZoohAboutUs from './components/ZoohAboutUs';
import ZoohStaff from './components/ZoohStaff'

import './App.css';
import ZoohTag from './components/ZoohTag';

function App() {
  const [showProfileOffcanvas, setShowProfileOffcanvas] = useState(false);
  
  return (
    <Router>
      <div className='phone-screen'>
        <ZoohHeader />
        <ZoohSearchBar />
        <ZoohNavBar onShowProfileOffcanvas={() => setShowProfileOffcanvas(true)} />
        <div className='content'>
          <Routes>
            <Route path="/home" element={<ZoohHome />} />
            <Route path="/tickets" element={<ZoohTickets />} />
            <Route path="/favourites" element={<ZoohFavourites />} />
            <Route path="/profile" element={<ZoohProfile show={showProfileOffcanvas} onHide={() => setShowProfileOffcanvas(false)} />} />
            <Route path="/register" element={<ZoohRegister />} />
            <Route path="/group" element={<ZoohGroup />} />
            <Route path="/events" element={<ZoohHome />} />
            <Route path="/animals" element={<ZoohGrid />} />
            <Route path="/test" element={<ZoohTag />} />
            <Route path="/about-us" element={<ZoohAboutUs />} />
            <Route path="/staff" element={<ZoohStaff />} />
            {/* Add a default route to handle other paths */}
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
        <ZoohFooter />
      </div>
    </Router>
  );
}

export default App;
