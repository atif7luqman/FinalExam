import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Row, Col, Image, Button, ListGroup } from 'react-bootstrap';
import background from '../assets/images/secbackground.png';
import aave from '../assets/images/Aave-logo.png';
import infura from '../assets/images/infura.png';
import ethereum from '../assets/images/ethereum.png';
import sandbok from '../assets/images/sandbok.png';
import solana from '../assets/images/solana.png';
import polygon from '../assets/images/polygon.png';
import opensea from '../assets/images/opensea.png';
import img from '../assets/images/one.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const images = [aave, infura, ethereum, sandbok, solana, polygon, opensea];
  const items = [
    'NFT(ERC721)',
    'DEFI',
    'Smart Contracts',
    'GameFi',
    'Metaverse'
  ];

  return (
    <Container fluid className="p-5 pt-0 bg-white" style={{ backgroundColor: '#110915', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
     <Row>
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            {images.map((image, index) => (
              <Tab
                key={index}
                icon={<img src={image} alt={`Tab ${index + 1}`} style={{ width: '20rem', height: '3rem' }} />}
                sx={{
                  backgroundColor: value === index ? theme.palette.primary.main : 'transparent',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
            ))}
          </Tabs>
        </AppBar>
        {images.map((image, index) => (
          <TabPanel key={index} value={value} index={index} dir={theme.direction}>
            {`Item ${index + 1}`}
          </TabPanel>
        ))}
     </Row>
     <Row className='m-5 py-5'>
        <Col className="d-flex align-items-center">
            <div className='pe-3'>
                <h1 className='fw-bold mb-4'>Create <br /> your own Web3 Masterpiece</h1>
                <p>Most entrepreneurs want to create their own web3 sites, unfortunately, they don't know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.</p>
                <Button className='my-3' style={{ backgroundColor: '#6F348E'}}>Start building</Button>
            </div>
        </Col>
        <Col md={9}>
            <div className="text-end">
              <Image src={img} fluid style={{ width:'50rem', height: '40rem' }} />
            </div>
        </Col>
      </Row>
      <Row className='py-5'>
        <Col>
        </Col>
        <Col md={4}>
          <h1 >Can be <br /> changed to customizable <br /> ready made <br /> web3 dapps templates.</h1>
          <ListGroup as="ol">
            {items.map((item, index) => (
              <ListGroup.Item
                as="li"
                key={index}
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <span style={{ color: '#18ADE4', fontWeight: 'bold' }}>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span> {'\u00A0\u00A0'}
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button className='mt-3 ms-3' style={{ backgroundColor: '#6F348E'}}>Start building</Button>
        </Col>
      </Row>
    </Container>
  );
}
