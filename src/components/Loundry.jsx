import React from 'react';
import './loundry.css';


// Components
import Banner from './banner/Banner';
import About from './about/About';

const Loundry = () => {
  return (
    <>
      <Banner />
      <About />
      {/* Future sections:
        - preços
        - Nossos diferenciais
        - serviços
        - nossos clientes
      */}
    </>
  );
};

export default Loundry;