import React from 'react';
import './loundry.css';

import transition from '../../transition';
// Components
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Service from '../../components/Service/Service';
import Promotion from '../../components/promotion/Promotion'
import Costumers from '../../components/costumer/Costumer';
import Testimonials from '../../components/testimonials/Testimonials';
import GetInTouch from '../../components/getInTouch/GetInTouth'
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
    </>
  );
};

// trocar o botão de preços por contact ou location. O preços e serviços podem tratar da mesma coisa
export default  transition(Loundry);
// export default Loundry;