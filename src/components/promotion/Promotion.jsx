import React from "react";
import './promotion.css'
import PromotionImg from '../../images/Desktop/Promocao.jpg'

// background

import background from '../../images/Backgrounds/subtle-carbon.png'


function Promotion(props){
    return(
    <section className="promotion-section" style={{backgroundImage:`url(${background})`}}>
        <div className="pormotion-text-section">
            <p className="promotion-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam deserunt laborum, sapiente maxime consectetur est dicta eaque nemo tenetur, architecto quam, qui exercitationem libero aut fugiat ipsa. Dolor, laborum.</p>
        </div>
        <div className="promotion-image-section">
            {/* <h3 className="promotion-image-title">Promotion</h3> */}
            <div className="img-Bg">
                <img className="img" src={PromotionImg}></img>
            </div>
        </div>
    </section>
    )
} 


export default Promotion