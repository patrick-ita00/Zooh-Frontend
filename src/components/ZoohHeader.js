import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../imgs/logo.png';

function ZoohHeader() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width=""
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="/register">Not logged in</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ZoohHeader;