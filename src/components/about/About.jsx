import React from "react";
import './about.css';

import img from '../../images/about-image.jpg'
export default function About(props) {
    return (
        <section className="about">
           <div className="aboutTextSquare">
                <p className="AboutText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Pariatur tenetur neque natus quasi fuga reiciendis sapiente 
                    accusamus alias earum, recusandae doloremque incidunt 
                    aliquid rem quae nesciunt porro id? Nesciunt, amet?
                </p>
           </div>
           <h1 className="aboutTitle">About us</h1>
           <img className="aboutImage" src={img} alt="about-image"/>
        </section>
    );
}
