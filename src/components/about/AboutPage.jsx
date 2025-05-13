import React from "react";
import './aboutpage.css';
import MascotImage from '../../images/kiloklin-mascot.png';


// component
import Metrics from "./aboutPageComponent/metrics/Metrics";
import SideBarHeader from "../header/sideBar";
import AboutBanner from "./aboutPageComponent/aboutBannner/AboutBanner";
import AboutCarroussel from "./aboutPageComponent/aboutCarroussel/AboutCarroussel";
function AboutPage(props) {
    return (
        <section className="aboutPage">
            {/* <SideBarHeader/>             */}
            <AboutBanner/>
            <Metrics/>
            {/*metrica*/}
            <AboutCarroussel/>
            {/*comentário de clientes*/}
            <p>para dar espaço</p>
        </section>
    );
}

export default AboutPage
