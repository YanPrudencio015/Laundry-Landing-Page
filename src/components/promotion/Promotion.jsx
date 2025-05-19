import React from "react";
import './promotion.css';
import img from '../../images/Desktop/Promocao-semBG.jpg'
// import bgImg from '../../images/Backgrounds/random-grey-variations.png'
import bgImg from '../../images/Backgrounds/subtle-carbon.png'


function Promotion(props){

    const promoTexts = ["Lavar", "Por", "Cesto"];
    return(
        <section className="promotion">
            <div className="promotion-BG"></div>
            <div className="promotion-text-div">
                <h2 className="promotion-title">Promoção</h2>
                <div className="promotion-sub-div">
                  {promoTexts.map((text, index) => (
                    <p key={index} className={`line line-${index + 1}`}>{text}</p>
                    ))}
                </div>
            </div>
            <div className="promotion-price-div">
                <h1 className="promotion-price">
                    <span className="promotion-price-span">R$</span>17,00</h1>
            </div>
            {/* <div className="promotion-img-square"></div> */}
                <img className="promotion-img" src={img}/>
        </section>
    )
}

// mobile: https://i.pinimg.com/736x/2e/e7/e6/2ee7e632570056670f23f19f30e658cd.jpg
// Desktop: https://i.pinimg.com/736x/63/8f/fe/638ffe43365c5edd9cf1b49317337bf0.jpg

export default Promotion
