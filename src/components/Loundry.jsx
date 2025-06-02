import React from 'react';
import './loundry.css';


// Components
import Banner from './banner/Banner';
import About from './about/About';
import Service from './Service/Service';
import Promotion from './promotion/Promotion'
import Costumers from './costumer/Costumer';
import Testimonials from './testimonials/Testimonials';
import Footer from './footer/Footer';

const Loundry = () => {
  return (
    <>
      <Banner />
      <Promotion/>
      <Service/>
      <Costumers/>
      <Testimonials/>
      <About />
      <Footer/>

  {/* 
    A fazer:

    criar o footer. - feito
    condicionar quando chegar no footer a seta apra de descer - a fazer
    criar um texto genérico na página Sobre. - a fazer
    criar a transição de página com o framer motion. - a fazer
    refazer o menu sidebar sem a opção contato. - a fazer

  */}
    </>
  );
};


export default Loundry;