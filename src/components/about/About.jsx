import React from "react";
import './about.css';

import img from '../../images/about-image.jpg'
export default function About(props) {
    return (
        <section className="about" id="about">
           <div className="aboutTextSquare">
                <p className="AboutText">
                    We are a dedicated team offering high-quality laundry services designed
                    to fit your busy lifestyle. With modern equipment, eco-friendly processes, 
                    and exceptional attention to detail, we aim to bring convenience and 
                    reliability to your everyday routine.
                </p>
           </div>
           <h1 className="aboutTitle">About us</h1>
           <img className="aboutImage" src={img} alt="about-image"/>
        </section>
    );
}
