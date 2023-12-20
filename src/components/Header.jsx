import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

function Header() {
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="header" style={{backgroundColor:'#BE2E3E'}}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center align-items-center text-white">
            <Nav.Link href="https://web.facebook.com/" rel='noopenre' target='_blank' className='text-white'>
              <FacebookFilled />
            </Nav.Link>
            |            
            <Nav.Link href="https://youtube.com" rel='noopener' target='_blank' className='text-white'>
              <YoutubeFilled />
            </Nav.Link>
            |            
            <Nav.Link href="https://instagram.com" rel='noopener' target='_blank' className='text-white'>
              <InstagramFilled />
            </Nav.Link>
            |
            <Nav.Link href="https://www.linkedin.com/" rel='noopener' target='_blank' className='text-white'>
              <LinkedinFilled />
            </Nav.Link>
            </Nav>
            <Nav className="mt-3">
  <NavLink exact to={'/privacy'} activeClassName='bg-primary' rel='noopener' style={navLinkStyle} activeStyle={{backgroundColor:'green'}}><p className='fs-5 px-1'>Privacy Policy</p></NavLink>
  <NavLink to={'/departments'} activeClassName='bg-primary' rel='noopener' style={navLinkStyle}><p className='fs-5 px-2'>Disclaimer</p></NavLink>
  <NavLink to={'/doctors'} activeClassName='bg-primary' rel='noopener' style={navLinkStyle}><p className='fs-5 px-2'>Contact Us</p></NavLink>
</Nav>
          {/* <Nav className='d-flex  align-items-center text-white'>
          <Nav.Link href="#features" className='text-white'>
              Privacy Policy
            </Nav.Link>
            |
            <Nav.Link href="#features" className='text-white'>
              Disclaimer
            </Nav.Link>
            |
            <Nav.Link href="#features" className='text-white'>
              Contact Us
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;