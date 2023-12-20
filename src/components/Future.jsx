import { Container, Row, Col, Card } from 'react-bootstrap';
import background from '../assets/images/futurebackground.png';
import meta from '../assets/images/meta.png';
import nft from '../assets/images/nft.png';
import moralis from '../assets/images/moralis.png';
import solidity from '../assets/images/solidity.png';
import ether from '../assets/images/ether.png';
import hardhat from '../assets/images/hardhat.png';

function Future() {
  return (
    <Container fluid className="p-5 text-center text-white pb-5" style={{ backgroundColor: '#110915', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h1>The Future of Web3 No Code</h1>
      <p>Web3Makr allows you to incorporate top-ranked blockchain platforms <br /> into your work through the drag and drop feature.</p>

      <Row>
        <Col></Col>
        <Col md={8} className="d-flex justify-content-center mt-5 pt-3"> {/* Reduce top margin here */}
          <Card className="text-center bg-transparent" style={{ width: 'calc(33.33% - 20px)', margin: '10px' }}>
            <Card.Img src={meta} className="img-fluid m-auto" alt="Meta Image" style={{ maxHeight: '80%', objectFit: 'contain' }} />
            <Card.Body>
              <Card.Text className="text-center text-white fw-bold">
                Metamask Support
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center bg-transparent" style={{ width: 'calc(33.33% - 20px)', margin: '10px' }}>
            <Card.Img src={nft} className="img-fluid m-auto" alt="NFT Image" style={{ maxHeight: '80%', objectFit: 'contain' }} />
            <Card.Body>
              <Card.Text className="text-center text-white fw-bold">
                NFT Search
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center bg-transparent" style={{ width: 'calc(33.33% - 20px)', margin: '10px' }}>
            <Card.Img src={moralis} className="img-fluid m-auto" alt="Moralis Image" style={{ maxHeight: '80%', objectFit: 'contain' }} />
            <Card.Body>
              <Card.Text className="text-center text-white fw-bold">
                Moralis Integration
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={8} className="d-flex justify-content-center mt-3 pt-3"> {/* Reduce top margin here */}
          <Card className="text-center bg-transparent" style={{ width: 'calc(33.33% - 20px)', margin: '10px' }}>
            <Card.Img src={solidity} className="img-fluid m-auto" alt="Meta Image" style={{ maxHeight: '80%', objectFit: 'contain' }} />
            <Card.Body>
              <Card.Text className="text-center text-white fw-bold">
                Solidity
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center bg-transparent" style={{ width: 'calc(33.33% - 20px)', margin: '10px' }}>
            <Card.Img src={ether} className="img-fluid m-auto" alt="NFT Image" style={{ maxHeight: '80%', objectFit: 'contain' }} />
            <Card.Body>
              <Card.Text className="text-center text-white fw-bold">
                Ether.js
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center bg-transparent" style={{ width: 'calc(33.33% - 20px)', margin: '10px' }}>
            <Card.Img src={hardhat} className="img-fluid m-auto" alt="Moralis Image" style={{ maxHeight: '80%', objectFit: 'contain' }} />
            <Card.Body>
              <Card.Text className="text-center text-white fw-bold">
                Hardhat
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Future;
