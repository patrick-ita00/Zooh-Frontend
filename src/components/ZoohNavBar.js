import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';


function ZoohNavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary" style={{borderTopLeftRadius: "36px", borderTopRightRadius: "36px"}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Zoo Zürich Logo"
              src="logo.png"
              width=""
              height="30"
              className="d-inline-block align-top"
            />{'  '}
          </Navbar.Brand>
        </Container>

      </Navbar>

    </>
  );
}

export default ZoohNavBar;