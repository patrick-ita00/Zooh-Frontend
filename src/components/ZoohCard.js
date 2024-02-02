import 'bootstrap/dist/css/bootstrap.min.css' //Import Bootstrap CSS
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ZoohCard(props) {
  return (
    <Card style={{ width: '18rem', margin: '20px'}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
      <blockquote className="blockquote mb-0">
          <p>
            {' '}
              {props.time}
            {' '}
          </p>
          <footer className="blockquote-footer">
            {props.desc}
          </footer>
        </blockquote>
        <Button variant="primary">Add to favourites</Button >
      </Card.Body>
    </Card>
  );
}

export default ZoohCard;