import './App.css';
import ZoohCard from './components/ZoohCard';
import logo from './imgs/img1.jpg';
import ZoohNavBar from './components/ZoohNavBar';
import SearchBar from './components/SearchBar';
import Buttons from './components/Buttons';

function App() {
  return (
    <>
    <div className="phone-frame">
      <ZoohNavBar/>
      <SearchBar/>
      <div className="d-flex flex-row">
        <ZoohCard text="test" image={logo}/>
        <ZoohCard text="test2" image={logo}/>
      </div>
      <Buttons sticky="bottom"/>
    </div>
    
    </>
  );
}

export default App;