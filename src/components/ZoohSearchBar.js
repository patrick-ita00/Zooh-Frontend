import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function ZoohSearchBar() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Container fluid>
        <Form inline className="w-100">
          <Form.Control
            type="text"
            placeholder="Things to do"
            className="mr-sm-2 w-100"
          />
        </Form>
      </Container>
    </Navbar>
  );
}

export default ZoohSearchBar;
