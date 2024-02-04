import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import logo from '../imgs/example.jpg'

function ZoohFigure(props) {
  return (
    <div style={{ position: 'relative' }}>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={props.image}
          
        />
        
      </Figure>
      
    </div>
  );
}

export default ZoohFigure;
