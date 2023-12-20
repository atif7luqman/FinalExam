import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import brand from '../assets/images/brandlogo.png'

function Header() {
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#18ADE4',
    border: '1px solid #18ADE4',
  };

  const collapseButtonStyle = {
    backgroundColor:'rgba(200, 200, 200, 0.8)', // Set the color of the collapse button to white
    border: 'none',
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="header" style={{ backgroundColor: '#110915' }}>
      <Container>
        <Navbar.Brand href="#home" className="me-lg-5">
          <img
            src={brand}
            className="d-inline-block align-center"
            alt="Logo"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={collapseButtonStyle} />

        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mt-3 ms-lg-auto me-lg-5">
            <NavLink to={'/privacy'} rel='noopener' style={navLinkStyle}>
              <p className='fs-5 px-1'>Web3Maker</p>
            </NavLink>
            <NavLink to={'/departments'}  rel='noopener' style={navLinkStyle}>
              <p className='fs-5 px-2'>White paper</p>
            </NavLink>
            <NavLink to={'/doctors'}  rel='noopener' style={navLinkStyle}>
              <p className='fs-5 px-2'>Services</p>
            </NavLink>
            <NavLink to={'/doctors'}  rel='noopener' style={navLinkStyle}>
              <p className='fs-5 px-2'>Tool</p>
            </NavLink>
            <NavLink to={'/doctors'} rel='noopener' style={navLinkStyle}>
              <p className='fs-5 px-2'>Contact us</p>
            </NavLink>
          </Nav>
                    
          <Button style={buttonStyle} className="ms-lg-4">Start for free</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
