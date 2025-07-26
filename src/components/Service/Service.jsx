import React from "react";
import './service.css';
import ServiceHeader from "./ServiceHeader";
import ServiceBody from "./ServiceBody";

function Service(props){
    return(
        <section className="service" id="services">
            <ServiceHeader/>
            <ServiceBody/>
        </section>
     )
}

export default Service;