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
            <Link className="get-in-touch-btn-link">
                <button className="get-in-touch-btn">WhatsApp</button>
            </Link>
        </div>
    )
}

export default GetInTouch;