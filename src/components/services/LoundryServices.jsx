import React from "react";
import { ServiceCardInfos } from "./informations/cardsInfo";
              

function Services(props){
    return(
        <div className='loundry-services-section'>
        <div className='card-service-titles'>
            <h1 className='card-service-title1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<span>Serviços</span></h1>
            <h6 className='card-service-title2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et error rerum velit ullam, omnis illum tempore neque.</h6>
        </div>
            {ServiceCardInfos.map((value, key)=>(
                <div key={key} className='cards-Service'>
                    <div className='front'>
                        <div className='front-header'>
                            <p className='front-title'>{value.frontTitle}</p>
                        </div>
                        <img src={value.icon} className='front-icon'/>
                    </div>
                        <div className='back'>
                        <img className='back-img-BG' src={value.img[0]}></img>
                        <div className="back-img-BG2"></div>
                        <div className='back-text'>
                            <h1 className='back-text-title'>{value.backTitle}</h1>
                            <h6 className='back-text-desc'>{value.backDesc}</h6>
                        </div>
                    </div>
                </div>
            ))}
          
    </div>

    )
}


export default Services