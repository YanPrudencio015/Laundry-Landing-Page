import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonials.css'
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


import img from '../../images/kiloklin-mascot.png'

export default function Testimonials() {

    // Changes the number of Swiper slides according to the window size

    // get the  window size
    const [windowsize,setWindowSize] = useState({width:window.innerWidth, height: window.innerHeight})

    const [slidesPerView, setSlidesPerView] = useState(1)
    useState(()=>{
            // get the current window size in a function that will change at eventlistener
        function UpdateSizeWindow(){
            setWindowSize({width:window.innerWidth, height: window.innerHeight})
        }
        window.addEventListener('resize', UpdateSizeWindow);
        
        return ()=>{
            window.removeEventListener('resize', UpdateSizeWindow);
        }
    },[])

    useEffect(()=>{
        console.log(windowsize.width);

        if(windowsize.width < 425){
            setSlidesPerView(1);
        } else if(windowsize.width >= 768 && windowsize.width <= 1024){
            setSlidesPerView(2);    
        }  else if(windowsize.width >= 1025){
            setSlidesPerView(3);    
        }
    },[windowsize.width])

  return (
    <section className='testimonials-section'>
        <div className='testi-header'>
            <h1 className='testi-header-title'>Feedback</h1>
            <h3 className='testi-header-subtitle'>O que os nosos clientes dizem</h3>
        </div>
        <div className='testi-body'>
        <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="testi-mySwiper"
        >
        <SwiperSlide className='testi-swiper-slide'>
            <div className='testi-swiper-card'>
                <div className='testi-swiper-card-img-border'>
                    <img src={img} className='testi-swiper-card-img'/>
                </div>
                <div className='testi-swiper-card-stars'>
                    <i className=" testi-card-icon fa-solid fa-star"></i>
                    <i className=" testi-card-icon fa-solid fa-star"></i>
                    <i className=" testi-card-icon fa-solid fa-star"></i>
                    <i className=" testi-card-icon fa-solid fa-star"></i>
                    <i className=" testi-card-icon fa-regular fa-star-half-stroke"></i>
                </div>
                <div className='testi-swiper-card-name'>
                    <p className='testi-swiper-card-costumer-Name'>Lavanderia</p>
                </div>
                <div className='testi-swiper-card-text'>
                    <h1 className='testi-swiper-card-text-comma'>"</h1>
                    <p className='testi-swiper-card-costumers-testimonials'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Possimus consequatur numquam sequi, minus doloremque 
                        rerum ducimus non quam cupiditate laboriosam sapiente, 
                        {/* testando. Está no centro ? */}
                    </p>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
        </div>
    </section>
  );
}


// background-image: url('../../images/Backgrounds/ps-neutral.png');
// background-image: url('../../images/Backgrounds/worn-dots.png');
// background-image: url('../../images/Backgrounds/checkered-pattern.png');