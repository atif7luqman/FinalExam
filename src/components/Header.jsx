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

  return (
    <Navbar collapseOnSelect expand="lg" className="header justify-content-center" style={{ backgroundColor: '#110915' }}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          
          <Navbar.Brand href="#home">
            <img
              src={brand}// Replace with the actual URL of your logo image
              className="d-inline-block align-center"
              alt="Logo"
            />
          </Navbar.Brand>

          <Nav className="mt-3 ms-auto me-5 ">
            <NavLink to={'/privacy'} rel='noopener' style={navLinkStyle} activeStyle={{ backgroundColor: 'green' }}>
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
            <NavLink to={'/doctors'} activeClassName='bg-primary' rel='noopener' style={navLinkStyle}>
              <p className='fs-5 px-2'>Contact us</p>
            </NavLink>
          </Nav>
          <Button style={buttonStyle}>Start for free</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
