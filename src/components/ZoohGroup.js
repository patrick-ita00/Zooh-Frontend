import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ZoohGroup(props) {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.time}</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default ZoohGroup;

