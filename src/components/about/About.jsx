import React from "react";
import './about.css';
import MascotImage from '../../images/kiloklin-mascot.png';
export default function About(props) {
    return (
        <section className="about">
            <div className="about-text-section">
                    <h1 className="text-title">Quem Somos</h1>
                    <p className="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, animi minus distinctio omnis cumque tempora adipisci odio laboriosam magnam sunt! Quam perspiciatis quo error necessitatibus itaque voluptatum delectus. Veniam, aut.</p>
                    <button className="text-button">Leia Mais</button>
            </div>
            <div className="about-image-section">
                <img className="about-image" src={MascotImage} alt="About" />
            </div>
        </section>
    );
}
