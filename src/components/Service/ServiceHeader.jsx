import React from "react";
import './service.css';

function ServiceHeader(props){
    return(
            <section className="service-header">
                <h3 className="service-header-title">Our Services</h3>
                <div className="service-header-Description-section">
                    <h1 className="service-header-title-Description"> FreshFold Laundry</h1>
                    <p className="service-header-Description">
                            At our laundry, we provide reliable and efficient services tailored to your daily routine. From everyday garments to delicate fabrics, we handle your clothes with care, so you can focus on what matters most.
                    </p>
                </div>
            </section>
    )}
export default ServiceHeader;