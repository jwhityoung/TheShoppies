import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Shoppies from '../../assets/Shoppies.png'
import './style.css';

const Jumbo = () => {
  return (
<Jumbotron fluid className="jumbotron" style={{backgroundColor: '#AD343E'}}>
  <Container className="jumbotron-container">
    <img src={Shoppies} alt="The Shoppies" />
  </Container>
</Jumbotron>
  );
};

export default Jumbo;