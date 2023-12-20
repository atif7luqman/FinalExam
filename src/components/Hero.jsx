import { Container, Row, Col, Button} from 'react-bootstrap';
import { RightOutlined, PhoneFilled} from '@ant-design/icons';
import { Image } from 'react-bootstrap';
import IconImage from '../assets/images/icon.png'
import HospitalImg from '../assets/images/hospital-image.png'

const Home = () => {

  const phoneNumber = "1860-500-1066";
  const emergency = "1066";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className='home' style={{backgroundColor: '#81BAEE' }}>
        <Container fluid>
            <Row className='text-center justify-content-end align-items-center m-0'>
              
            <Col>
                <p className='fs-3 fw-bold py-2 mb-0  text-white'>Health + Lifeline</p>
                <span onClick={handlePhoneClick} className="border border-light px-4 py-1 rounded-5" style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  <PhoneFilled className='p-1' style={{ transform: 'rotate(90deg)', color: '#002B9A' }} />
                  {phoneNumber}
                </span>
              </Col>
              <Col>
                <Image src={IconImage} height={90} className='pt-3 align-items-'></Image>
              </Col>
              <Col>
                <p className='fs-3 fw-bold py-2 mb-0 text-white'>Emergency</p>
                <span onClick={handlePhoneClick} className="border border-light px-4 py-1 rounded-5" style={{cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  <PhoneFilled className='p-1' style={{ transform: 'rotate(90deg)', color: '#002B9A' }} />
                  {emergency}
                </span>
              </Col>

            </Row>
        </Container>
      <div className='mt-3 p-5 ' style={{ backgroundColor: '#81BAEE', backgroundImage: `url(${HospitalImg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <h2 className='fs-1 fw-bold pb-3' style={{color: '#BE2E3E'}}>Your Partner in <br /> Health and Wellness</h2>
           <p className='fs-5 text-white'>
            We are commiteed to providing youwith the best medical <br />
            and healthcare services to help you live healthier and happier
            </p> 

          <Button className='text-white mt-5' style={{ height: '4rem', background: '#BE2E3E', fontSize: '1.5rem', display: 'flex', alignItems: 'center', borderRadius: '1rem'}}>
            BOOK AN APPOINTMENT <RightOutlined />
          </Button>
      </div>
    </div>
  );
};

export default Home;