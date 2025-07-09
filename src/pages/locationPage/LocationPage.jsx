import React from "react";
import './LocationPage.css'
import transition from "../../transition";
import BannerPage from '../../components/bannerPages/Bannerpage'

function LocationPage(props){
    const title = "Onde nós estamos"
    return(
        <div className="LocationPage">
            <BannerPage title={title}/>
        </div>
    )
}


export default transition(LocationPage)