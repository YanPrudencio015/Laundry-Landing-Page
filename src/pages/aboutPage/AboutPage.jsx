import React from "react";

import BannerPage from "../../components/bannerPages/Bannerpage";
import transition from "../../transition";
import './aboutpage.css'
function AboutPage(props){
    const title = "Nossa tragetória"
    return(
        <div className="AboutPage">
            <BannerPage title={title}/> 
        </div>
    )
}

export default transition(AboutPage)
