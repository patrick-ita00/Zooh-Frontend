import './App.css';
import ZoohHeader from './components/ZoohHeader';
import ZoohFooter from './components/ZoohFooter';
import ZoohSearchBar from './components/ZoohSearchBar';
import ZoohCarousel from './components/ZoohCarousel';

function App() {
  return (
    <>
    <div className='App'>
      <ZoohHeader/>
      <ZoohSearchBar/>
      <ZoohCarousel/>
      <div className='navbar'>
        <ZoohFooter/>
      </div>
    </div>

    </>
  );
}

export default App;