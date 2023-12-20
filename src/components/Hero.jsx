import { Container, Button, Image } from "react-bootstrap"
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import brand from '../assets/images/screen.png';
import background from '../assets/images/herobackground.png';

function Hero() {
  return (
    <Container fluid className="text-center text-white pb-5" style={{ backgroundColor: '#81BAEE', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <p className='text-center fw-bold fs-1  pt-5'>Web3Makr Redefining <br /> How You Create</p>
      <p className="mt-2">Unlock the blockchain potential to create <br /> Web3 Applications</p>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button className="p-4 m-5" style={{ backgroundColor: '#E7534E', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid transparent' }}>
          <PlayCircleFilledWhiteIcon />
        </Button>
      </div>


      <div className="m-5 mb-3 px-5 border rounded-5 h-100" style={{ border: '2px solid black' }} >
        <Image src={brand} className="m-5 d-block mx-auto" fluid />
      </div>
    </Container>
  )
}

export default Hero;
