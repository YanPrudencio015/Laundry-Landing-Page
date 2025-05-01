import React from "react";
import './aboutpage.css';
import MascotImage from '../../images/kiloklin-mascot.png';

// component
import LoundryHeader from "../header/LoundryHeader";
import SideBarHeader from "../header/sideBar";
import AboutBanner from "./aboutPageComponent/aboutBannner/AboutBanner";

export default function AboutPage(props) {
    return (
        <section className="aboutPage">
            <LoundryHeader/>
            <SideBarHeader/>            
            <AboutBanner/>
        </section>
    );
}
