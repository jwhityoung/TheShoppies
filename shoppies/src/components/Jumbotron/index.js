import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Shoppies from '../../assets/Shoppies.png'
import './style.css'

const Jumbo = () => {
  return (
<Jumbotron fluid className="jumbotron" style={{backgroundColor: '#655353'}}>
  <Container className="jumbotron-container">
    <img src={Shoppies} alt="The Shoppies" />
    {/* <p>
    Movie awards for entrepreneurs
    </p> */}
  </Container>
</Jumbotron>
  );
};

export default Jumbo;