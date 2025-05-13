import React from "react";
import './aboutCarroussel.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
// import required modules
import { Autoplay, EffectCreative } from 'swiper/modules';


function AboutCarroussel(props){
    return(
        <section className="about-carroussel">
            <div className="about-carroussel-title-section">
                <h1 className="about-carroussel-title">Nossa trajetória</h1>
            </div>
            <div className="about-carroussel-section">
                <h1 className="about-carroussel-date">2007</h1>
                <Swiper
                loop={true}
                    grabCursor={true}
                    effect={'creative'}
                            autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                          },
                          next: {
                            translate: ['100%', 0, 0],
                          },
                    }}
                    modules={[EffectCreative, Autoplay]}
                    speed={800}
                    className="mySwiper"
                >
                    <SwiperSlide className="slide-carroussel">
                        <div className="slide-cover">
                            <h1 className="slide-cover-title">Kilo klin</h1>
                            <p className="slide-cover-year">2007</p>
                        </div>
                        <div className="slide-info">
                            <div className="slide-info-square">
                                <p className="slide-info-text">
                                    <span className="slide-info-span">texto Genérico </span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quis enim tempora ab minima ea quia placeat minus sed quidem. 
                                    Aliquid ipsa labore placeat fuga tenetur nisi laboriosam voluptates, 
                                    nesciunt corrupti!
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-carroussel">
                        <div className="slide-cover">
                            <h1 className="slide-cover-title">Kilo klin</h1>
                            <p className="slide-cover-year">2007</p>
                        </div>
                        <div className="slide-info">
                            <div className="slide-info-square">
                                <p className="slide-info-text">
                                    <span className="slide-info-span">texto Genérico </span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quis enim tempora ab minima ea quia placeat minus sed quidem. 
                                    Aliquid ipsa labore placeat fuga tenetur nisi laboriosam voluptates, 
                                    nesciunt corrupti!
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
export default AboutCarroussel;