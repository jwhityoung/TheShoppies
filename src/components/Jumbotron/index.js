import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Shoppies from '../../assets/Shoppies.png'
import './style.css';

const Jumbo = () => {
  return (
<Jumbotron fluid className="jumbotron" style={{backgroundColor: '#14213D'}}>
  <Container className="jumbotron-container">
    <img className="logo" src={Shoppies} alt="The Shoppies" />
  </Container>
</Jumbotron>
  );
};

export default Jumbo;