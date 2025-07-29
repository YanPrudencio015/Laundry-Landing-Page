import React from 'react';
import './loundry.css';

// Components
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Service from '../../components/Service/Service';
import Costumers from '../../components/costumer/Costumer';
import Testimonials from '../../components/testimonials/Testimonials';
import GetInTouch from '../../components/getInTouch/GetInTouth'
import FAQ from '../../components/faqs/FAQS';
const Loundry = () => {
  return (
    <>
      <Banner />
      <Service/>
      <Costumers/>
      <Testimonials/>
      <GetInTouch/>
      <About />
      <FAQ/>
    </>
  );
};

export default Loundry;
