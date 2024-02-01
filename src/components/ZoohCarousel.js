import Carousel from 'react-bootstrap/Carousel';
import ZoohCard from './ZoohCard';
import logo from '../imgs/img1.jpg';

function ZoohCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <ZoohCard text="test111" image={logo}/>
      </Carousel.Item>
      <Carousel.Item>
      <ZoohCard text="test222" image={logo}/>
      </Carousel.Item>
      <Carousel.Item>
      <ZoohCard text="test333" image={logo}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ZoohCarousel;