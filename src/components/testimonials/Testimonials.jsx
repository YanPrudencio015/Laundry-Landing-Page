import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonials.css'
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// clients profile images 
import img1 from '../../images/clientsPhotos/clientPhoto.jpg'
import img2 from '../../images/clientsPhotos/clientPhoto2.jpg'
import img3 from '../../images/clientsPhotos/clientPhoto3.jpg'
import img4 from '../../images/clientsPhotos/clientPhoto4.jpg'
import img5 from '../../images/clientsPhotos/clientPhoto5.jpg'
import img6 from '../../images/clientsPhotos/clientPhoto6.jpg'
import img7 from '../../images/clientsPhotos/clientPhoto7.jpg'
import img8 from '../../images/clientsPhotos/clientPhoto8.jpg'

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

        if(windowsize.width < 499){
            setSlidesPerView(1);
        } else if(windowsize.width >= 500 && windowsize.width <= 1024){
            setSlidesPerView(2);    
        }  else if(windowsize.width >= 1025){
            setSlidesPerView(4);    
        }
    },[windowsize.width])


    const clientTestimonials = [
        {
            img:img1,
            name:"Jack Thompson",
            testimonials:"It’s so easy to book and they always show up on time.",

        },
        {
            img:img2,
            name:" Emily Carter",
            testimonials:"Always reliable. I’ve stopped doing my own laundry completely.",

        },
        {
            img:img3,
            name:" Sara Lee",
            testimonials:"The express service saved me so much time during finals week.",

        },
        {
            img:img4,
            name:"Priya Nair",
            testimonials:"Their eco-friendly wash is a big win for me.",

        },
        {
            img:img5,
            name:"Carlos Mendez",
            testimonials:'CleanWave Laundry is part of my weekly routine now.',

        },
        {
            img:img6,
            name:"David M.",
            testimonials:"Their attention to detail is impressive. My clothes always come back fresh, clean, and perfectly folded.",

        },
        {
            img:img7,
            name:"Carlos R.",
            testimonials:"Excellent customer service and super fast turnaround. I trust them with all my business shirts!",

        },
        {
            img:img8,
            name:" Aisha Grant",
            testimonials:"Honestly, it’s the best laundry service I’ve used.",

        },
    ]

  return (
    <section className='testimonials-section'>
        <div className='testi-header'>
            <h1 className='testi-header-title'>Feedback</h1>
            <h3 className='testi-header-subtitle'>What our clients says</h3>
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
        {clientTestimonials.map((value, index)=>(
                    <SwiperSlide key={index} className='testi-swiper-slide'>
            <div className='testi-swiper-card'>
                <div className='testi-swiper-card-img-border'>
                    <img src={value.img} alt='client_profile_photo' className='testi-swiper-card-img'/>
                </div>
                <div className='testi-swiper-card-stars'>
                    <i className=" testi-card-icon fa-solid fa-star"></i>
                    <i className=" testi-card-icon fa-solid fa-star"></i>
                    <i className=" testi-card-icon fa-solid fa-star"></i>
                    <i className=" testi-card-icon fa-solid fa-star"></i>
                    <i className=" testi-card-icon fa-solid fa-star"></i>
                </div>
                <div className='testi-swiper-card-name'>
                    <p className='testi-swiper-card-costumer-Name'>{value.name}</p>
                </div>
                <div className='testi-swiper-card-text'>
                    <h1 className='testi-swiper-card-text-comma'>"</h1>
                    <p className='testi-swiper-card-costumers-testimonials'>
                        {value.testimonials}
                    </p>
                </div>
            </div>
        </SwiperSlide>
        ))}
        </Swiper>
        </div>
    </section>
  );
}
