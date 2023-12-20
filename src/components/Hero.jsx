import { Container, Button } from "react-bootstrap"
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

function Hero() {
  return (
    <Container fluid className="text-center">
      <p className='text-center fw-bold fs-1 mt-5 pt-5'>Web3Makr Redefining <br /> How You Create</p>
      <p className="mt-2">Unlock the blockchain potential to create <br /> Web3 Applications</p>
      <Button> <PlayCircleFilledWhiteIcon /> </Button>

    </Container>
  )
}

export default Hero
