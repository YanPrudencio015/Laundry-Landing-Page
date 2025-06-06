import React from 'react';
import './loundry.css';

import transiton from '../transition';
// Components
import Banner from './banner/Banner';
import About from './about/About';
import Service from './Service/Service';
import Promotion from './promotion/Promotion'
import Costumers from './costumer/Costumer';
import Testimonials from './testimonials/Testimonials';
import Footer from './footer/Footer';
import GetInTouch from '../components/getInTouch/GetInTouth'
const Loundry = () => {
  return (
    <>
      <Banner />
      <Promotion/>
      <Service/>
      <Costumers/>
      <Testimonials/>
      <GetInTouch/>
      <About />
      <Footer/>

  {/* 
    A fazer:
    refazer o menu sidebar sem a opção contato. - a fazer
    criar a transição de página com o framer motion. - a fazer
    corrigir erros de design - a fazer
    cada pagina deverá ter um banner igual ao da primeira versão da página about

  */}
    </>
  );
};


export default  transiton(Loundry);
// export default Loundry;