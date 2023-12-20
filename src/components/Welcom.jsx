import Card from 'react-bootstrap/Card';

import { Container, Row, Col, Image } from 'react-bootstrap';
function Welcome() {
  return (
    <Container className='mb-5'>
      <Row className="centered-heading">
        <h1 className='text-center my-5 fw-bold'>
          Adding Alpha through
          <span className="text-primary fw-normal" style={{fontStyle: 'italic'}}> Estee's <br /> 3 fundamental advantages</span>
        </h1>
      </Row>
      <Row className='container'>
          <Col >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"/imgcomputer.png"} />
                <Card.Body>
                    <div style={{ position: 'absolute', top: '72%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Image src={"/Icontech.png"} width={50}/>
                    </div>
                    <Card.Text className="text-center pt-3 fw-bold">Technology</Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col >
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"/imgteam.png"} />
                <Card.Body>
                    <div style={{ position: 'absolute', top: '72%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Image src={"/Iconteam.png"} width={50}/>
                    </div>
                    <Card.Text className="text-center pt-3 fw-bold">Team</Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col >
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"/imgdata.png"} />
                <Card.Body>
                    <div style={{ position: 'absolute', top: '72%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Image src={"/Icondata.png"} width={50}/>
                    </div>
                    <Card.Text className="text-center pt-3 fw-bold">Technology</Card.Text>
                </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  );
}

export default Welcome;