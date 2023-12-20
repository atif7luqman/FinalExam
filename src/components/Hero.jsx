import { Container, Button, Image } from "react-bootstrap"
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import brand from '../assets/images/screen.png';

function Hero() {
  return (
    <Container fluid className="text-center">
      <p className='text-center fw-bold fs-1 mt-5 pt-5'>Web3Makr Redefining <br /> How You Create</p>
      <p className="mt-2">Unlock the blockchain potential to create <br /> Web3 Applications</p>
      <Button className="rounded-5 my-5"  style={{backgroundColor:'#E7534E'}}> <PlayCircleFilledWhiteIcon  /> </Button>
      <div className="m-5 p-5 border" style={{ border: '2px solid black' }} >
        <Image src={brand} className="m-5 d-block mx-auto" fluid />
      </div>
    </Container>
  )
}

export default Hero;
