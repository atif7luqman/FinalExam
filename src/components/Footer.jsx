import { Container, Row, Col } from 'react-bootstrap';
import { CopyrightOutlined, FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Container fluid className='text-white text-center' style={{ background: '#BE2E3E' }}>
      <Row className='pt-2'>
        <Col xs={12} md={4}>
          <p className='pt-2'><CopyrightOutlined className='px-2 fs-6'/> Copyright 2023. Kamalesh J. All Rights Reserved. </p>
        </Col>
        <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
          <FacebookFilled className='fs-5 px-1' />
          <YoutubeFilled className='fs-5 px-1' />
          <InstagramFilled className='fs-5 px-1' />
          <LinkedinFilled className='fs-5 p-3 px-1' />
        </Col>
        <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
          
            <p>Privacy Policy</p>
            <p className='mx-2'>|</p>
            <p>Disclaimer</p>
            <p className='mx-2'>|</p>
            <p>Contact Us</p>
        </Col>
      </Row>
    </Container>
  );
}
