import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { CopyrightOutlined, InstagramOutlined, TwitterOutlined} from '@ant-design/icons';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';''
import brand from '../assets/images/brandlogo.png';
import background from '../assets/images/footerbackground.png'


export default function Footer() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 10px', // Adjust the spacing as needed
  };

  return (
    <Container fluid className="text-center text-white  h-5" style={{ backgroundColor: '#110915', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <Row className='text-center'>
        <p className='my-2'><Image src={brand} width='100px' height='46px' ></Image></p>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center '>
          <Link to="/web3maker" style={linkStyle}>Web3Maker</Link>
          <Link to="/whitepaper" style={linkStyle}>White3Maker</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/tool" style={linkStyle}>Tool</Link>
          <Link to="/contact" style={linkStyle}>Contact Us</Link>
        </Col>
      </Row>
      <Row className='pt-2 d-flex justify-content-center align-items-center'>
        <Col xs={12} md={4}>
          <p className='d-flex justify-content-center align-items-center'>Copyright 2022 <CopyrightOutlined className='px-2 fs-5'/> Web3maker</p>
        </Col>
        <Col></Col>
        <Col xs={12} md={4} className='d-flex align-items-center justify-content-center pb-3'>
      <NavLink to={'https://web.instagram.com/'} rel='noopener' target='_blank' style={{ color: 'white' }}>
        <InstagramOutlined className='fs-4 px-1' />
      </NavLink>
      <NavLink to={'https://web.twitter.com/'} rel='noopener' target='_blank' style={{ color: 'white' }}>
        <TwitterOutlined className='fs-5 px-1' />
      </NavLink>
      <NavLink to={'https://web.facebook.com/'} rel='noopener' target='_blank' style={{ color: 'white' }}>
        <FacebookRoundedIcon className='fs-2 px-1' />
      </NavLink>
    </Col>
      </Row>
    </Container>
  );
}
