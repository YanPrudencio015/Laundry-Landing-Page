import React from "react";
// import MascotImage from '../../../images/kiloklin-mascot.png';
import './aboutbanner.css'
import mascot from '../../../../images/kiloklin-mascot.png'
export default function AboutBanner(props) {
    return (
        <section className="aboutBanner">
           <img className="imgAboutBanner" src={mascot} alt="" />
           <div className="text">
                <h1 className="text-title-aboutPage">Text</h1>
                <p className="text-desc-aboutPage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate delectus expedita ea magnam voluptate incidunt laudantium a non consequatur, consectetur quaerat ipsam eius iusto voluptatem. Molestias quod id delectus qui.</p>
           </div>
        </section>
    );
}
