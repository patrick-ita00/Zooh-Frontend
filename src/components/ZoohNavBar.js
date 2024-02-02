import Nav from 'react-bootstrap/Nav';

function ZoohNavBar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/events">Popular events</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/animals">Animals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/staff">Staff</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about-us">About us</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default ZoohNavBar;