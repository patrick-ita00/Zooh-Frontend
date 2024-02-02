import Carousel from 'react-bootstrap/Carousel';
import ZoohCard from './ZoohCard';
import logo from '../imgs/pet-goats.jpg';

function ZoohHome() {
  return (
    <Carousel>
      <Carousel.Item>
      <ZoohCard time="8:00 - 20:00" desc="Pet the goats" image={logo}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ZoohHome;