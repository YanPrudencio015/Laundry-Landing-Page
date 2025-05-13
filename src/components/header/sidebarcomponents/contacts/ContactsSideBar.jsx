import React from "react";
import './contact.css'



function ContactSidebar(props){
    return(
        <div className="contactSidebar">
            <div className="contactSidebar-header">
                <h1 className="contactSidebar-header-title">
                    Entre em contato
                </h1>
            </div>
            <div className="contactSidebar-Body">
                <ul className="contactSidebar-phones-list">
                    <li className="contactSidebar-phones-numbers">
                        (21)96016-2497
                    </li>
                </ul>
                <ul className="contactSidebar-socials-list">
                    <li className="contactSidebar-social-item">
                       <i className="icon fa-brands fa-whatsapp"></i>
                       <p className="contactSidebar-iconText">WhatsApp</p> 
                    </li>
                    <li className="contactSidebar-social-item">
                        <i className="icon fa-brands fa-instagram"></i>
                       <p className="contactSidebar-iconText">Instagram</p> 
                    </li>
                    <li className="contactSidebar-social-item">
                        <i className="icon fa-brands fa-facebook"></i>
                       <p className="contactSidebar-iconText">Facebook</p> 
                    </li>
                </ul>
        
            </div>
        </div>
    )
}


export default ContactSidebar