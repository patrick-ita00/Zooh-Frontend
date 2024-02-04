import { HeartFill, HouseDoorFill, PersonFill, TicketFill } from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';

function ZoohFooter() {
  const location = useLocation();
  const iconStyle = { color: 'white', marginRight: '20px' }; // Adjust the marginRight value as needed
  const activeIconStyle = { ...iconStyle, borderBottom: '2px solid #61dafb' }; // Customize active icon styles

  return (
    <Nav className="justify-content-center" variant="pills" style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#171717', padding: '10px' }}>
      <Nav.Item>
        <Nav.Link href="/home" style={location.pathname === '/home' ? { ...iconStyle, ...activeIconStyle } : iconStyle}>
          <HouseDoorFill size={20} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/tickets" style={location.pathname === '/tickets' ? { ...iconStyle, ...activeIconStyle } : iconStyle}>
          <TicketFill size={20} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/favourites" style={location.pathname === '/favourites' ? { ...iconStyle, ...activeIconStyle } : iconStyle}>
          <HeartFill size={20} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/profile" style={location.pathname === '/profile' ? { ...iconStyle, ...activeIconStyle } : iconStyle}>
          <PersonFill size={20} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ZoohFooter;
