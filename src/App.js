import './App.css';
import ZoohHeader from './components/ZoohHeader';
import ZoohFooter from './components/ZoohFooter';
import ZoohSearchBar from './components/ZoohSearchBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ZoohHome from './components/ZoohHome';
import ZoohTickets from './components/ZoohTickets';
import ZoohProfile from './components/ZoohProfile';
import ZoohFavourites from './components/ZoohFavourites';
import ZoohNavBar from './components/ZoohNavBar';
import ZoohRegister from './components/ZoohRegister';

function App() {
  return (
    <Router>
        <div className='App'>
          <ZoohHeader />
          <ZoohSearchBar />
          <ZoohNavBar />
          <div className='content'>
            <Routes>
              <Route path="/home" element={<ZoohHome />} />
              <Route path="/tickets" element={<ZoohTickets />} />
              <Route path="/favourites" element={<ZoohFavourites />} />
              <Route path="/profile" element={<ZoohProfile />} />
              <Route path="/register" element={<ZoohRegister />} />
            </Routes>
          </div>
          <ZoohFooter />
        </div>
    </Router>
  );
}

export default App;
