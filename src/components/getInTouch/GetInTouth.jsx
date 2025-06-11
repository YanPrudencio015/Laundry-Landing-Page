import React from "react";

import './getintouch.css'

import img from '../../images/Backgrounds/checkered-pattern.png'
import maskotImg from '../../images/kiloklin-mascot-withoutBG.png'
import { Link } from "react-router-dom";
function GetInTouch(props){
    return(
        <div className="get-in-touch">
            <img className="get-in-touch-img" src={maskotImg}></img>
            <h1 className="get-in-touch-title">Entre em contato conosco</h1>
            <a 
                href="https://wa.me/5521979721419?text=Olá,%20esse%20é%20um%20texto%20genérico!%20...%20Para%20falar%20com%20a%20Anõna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="get-in-touch-btn-link">
                <button className="get-in-touch-btn">WhatsApp</button>
            </a>
        </div>
    )
}

export default GetInTouch;