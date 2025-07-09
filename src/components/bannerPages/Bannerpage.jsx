import React from "react";
import './bannerpage.css'
import img from "../../images/kiloklin-mascot-withoutBG.png"


function BannerPage(props){
    return(
        <div className="bannerPage">
            <div className="bannerPgBG">
                <img src={img} className="bannerPgImg" alt="Kiloklin-img"></img>
                <div className="bannerPgBGTitle">
                    <h1 className="bannerPgBGTitleWords">Kilo</h1>
                    <h1 className="bannerPgBGTitleWords">Klin</h1>
                </div>
            </div>
            <h1 className="bannerPgTitle">{props.title}</h1>
        </div>
    )
}

export default BannerPage