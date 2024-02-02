import Nav from 'react-bootstrap/Nav';

function ZoohFooter() {
  return (
    <Nav className="justify-content-center" variant="pills">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/tickets">Tickets</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/favourites">Favourites</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/profile">Profile</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ZoohFooter;