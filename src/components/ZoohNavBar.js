import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';

function ZoohNavBar() {
  const location = useLocation();
  const linkStyle = { color: 'white', marginRight: '0px' }; // Adjust the marginRight value as needed
  const activeLinkStyle = { fontWeight: 'bold', color: '#61dafb' }; // Customize active link styles

  return (
    <>
      <Nav className="justify-content-center" style={{ backgroundColor: '#171717' }}>
        <Nav.Item>
          <Nav.Link href="/events" style={location.pathname === '/events' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>
            Popular events
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/animals" style={location.pathname === '/animals' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>
            Animals
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/staff" style={location.pathname === '/staff' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>
            Staff
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about-us" style={location.pathname === '/about-us' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>
            About us
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default ZoohNavBar;
