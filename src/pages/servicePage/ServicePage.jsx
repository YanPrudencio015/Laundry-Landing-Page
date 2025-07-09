import React from "react";
import transition from "../../transition"
import "./servicePage.css"

import img from '../../images/kiloklin-mascot-withoutBG.png';

// services images
import TingimentosImg from '../../images/Mobile/Tingimento.jpg';
import LavagemTapeteImg from '../../images/Mobile/Lavagem-tapete.jpg'
import LavagemASecoImg from '../../images/Mobile/LavagemASeco.jpg'
import LavarESecarImg from '../../images/Mobile/lavarESecar.jpg'
import PassarImg from '../../images/Mobile/Passar.jpg'

//component 

import BannerPage from "../../components/bannerPages/Bannerpage";


function ServicePage(props){
    const CardsInfosServi = [
    {
        img: TingimentosImg ,
        title: "Tingimento",
        alt: "Tingimento",
        price: "25.00" 
    },
    {
        img: LavagemTapeteImg ,
        title: "Lavagem de tapete",
        alt: "Lavagem de tapete",
        price: "15.00" 
    },
    {
        img: LavagemASecoImg ,
        title: "Lavagem a seco",
        alt: "Lavagem a seco",
        price: "35.00" 
    },
    {
        img: LavarESecarImg ,
        title: "lavar e secar",
        alt: "lavar e secar",
        price: "45.00" 
    },
    {
        img: PassarImg ,
        title: "Passar",
        alt: "Passar",
        price: "150.00" 
    },
]

const title = "nossos serviços"
    return(
        <div className="servicePage">
            <BannerPage title={title}/>
          <div className="serviPgBody">
            {CardsInfosServi.map((item, index)=>(
                <div className="serviPgCard">
                    <img className="serviPgCardImg" src={item.img}/>
                    <div className="serviPgCardBG"></div>
                    <h2 className="serviPgCardName">{item.title}</h2>
                    <span className="serviPgCardPrice">
                        R$<p className="serviPgCardPriceValue">{item.price}</p>
                    </span>
                    <a className="serviPgCarLink" href="">
                        <button className="serviPgCarLinkBtn">WhatsApp</button>
                    </a>
               </div>

))}
          </div>
        </div>
    )
}

export default transition(ServicePage)
