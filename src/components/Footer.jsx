import { Container, Row, Col, Image } from 'react-bootstrap';
import { CopyrightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import brand from '../assets/images/brandlogo.png';

export default function Footer() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 10px', // Adjust the spacing as needed
  };
  
  return (
    <Container fluid className='text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
      <Row className='text-center'>
        <Image src={brand} width={20} height={100}></Image>
      </Row>
      <Row className='d-flex align-items-center justify-content-center'>
        
        <Col className='d-flex align-items-center justify-content-center'>
        <Link to="/web3maker" style={linkStyle}>Web3Maker</Link>
        <Link to="/whitepaper" style={linkStyle}>White3Maker</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/tool" style={linkStyle}>Tool</Link>
        <Link to="/contact" style={linkStyle}>Contact Us</Link>
      </Col>
      </Row>
      <Row>
      <Col xs={12} md={4}>
          <p className='pt-2'>Copyright 2022 <CopyrightOutlined className='px-2 fs-6'/> Web3maker</p>
        </Col>
      </Row>
    </Container>
  );
}
