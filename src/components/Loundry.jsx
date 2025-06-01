import React from 'react';
import './loundry.css';


// Components
import Banner from './banner/Banner';
import About from './about/About';
import Service from './Service/Service';
import Promotion from './promotion/Promotion'
import Costumers from './costumer/Costumer';
import Testimonials from './testimonials/Testimonials';
import Footer from './footer/footer';

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

    quando a barra de menu sumir, uma outra aparecerá para acompanhar durante a rolagem do usuário.
    criar o footer.
    criar um texto genérico na página Sobre.
    criar a transição de página com o framer motion.
    refazer o menu sidebar sem a opção contato.
  */}
    </>
  );
};


export default Loundry;