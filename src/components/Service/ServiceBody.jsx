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
                        {value.backDesc}
                    </div>
                </div>))}
            </section>
    )}
export default ServiceBody;