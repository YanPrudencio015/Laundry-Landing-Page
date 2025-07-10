import React from "react";

import BannerPage from "../../components/bannerPages/Bannerpage";
import transition from "../../transition";
import './aboutpage.css'
function AboutPage(props){
    const title = "Sobre nós"
    return(
        <div className="aboutPage">
            <BannerPage title={title}/> 
            <div className="abtPgSquare">
                <p className="abtPgSquareTxt"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Excepturi quos cum ab laborum, laudantium eius voluptatum minus nulla, 
                    porro aspernatur soluta libero quo ut sequi tenetur qui blanditiis 
                    praesentium molestias.
                </p>
            </div>
        </div>
    )
}

export default transition(AboutPage)
