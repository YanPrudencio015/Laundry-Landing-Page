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
                </div>))}
            </section>
    )}
export default ServiceBody;