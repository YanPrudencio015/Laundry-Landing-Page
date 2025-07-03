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
import LazyLoading from '../lazyLoading/Lazy'
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

    </>
  );
};

// trocar o botão de preços por contact ou location. O preços e serviços podem tratar da mesma coisa
export default  transiton(Loundry);
// export default Loundry;