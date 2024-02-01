import './App.css';
import ZoohHeader from './components/ZoohHeader';
import ZoohFooter from './components/ZoohFooter';
import ZoohSearchBar from './components/ZoohSearchBar';
import ZoohCarousel from './components/ZoohCarousel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <div className='App'>
          <ZoohHeader />
          <ZoohSearchBar />
          <div className='content'>
            <Routes>
              <Route path="/home" element={<ZoohCarousel />} />
              <Route path="/tickets" element={<ZoohCarousel />} />
            </Routes>
          </div>
          <ZoohFooter />
        </div>
      </>
    </Router>
  );
}

export default App;
