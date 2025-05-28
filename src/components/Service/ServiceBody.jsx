import React, { useEffect } from "react";
import './service.css';
import { ServiceCardInfos } from "../services/informations/cardsInfo";

function ServiceBody(props){

    return(
            <section className="service-body">
                {ServiceCardInfos.map((value, index)=>(
                <div key={index} className="service-card">
                    <div className="service-card-header">
                        <div className="service-title">{value.frontTitle}</div>
                    </div>
                    <div className="service-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Optio, totam numquam iste, ut harum illo mollitia deserunt 
                        explicabo facilis eligendi quia consectetur beatae. 
                        Minima culpa quisquam perferendis facere sunt optio.
                    </div>
                </div>
                ))}
            </section>
    )
}
/*
inspiration 
https://i.pinimg.com/736x/e4/79/10/e4791035066abd6340eafd9dedf33a48.jpg
https://i.pinimg.com/736x/9f/b8/6b/9fb86bc01ae9e87a37d5ff2af3bdd043.jpg
https://i.pinimg.com/736x/11/dd/24/11dd24c535087d74094527430b0bf79a.jpg
https://i.pinimg.com/736x/2d/81/cc/2d81cc26015878771b12310ec1eeceef.jpg
https://i.pinimg.com/736x/f4/bf/19/f4bf192b5533bb524339e450ef5a9ddc.jpg


*/
export default ServiceBody;