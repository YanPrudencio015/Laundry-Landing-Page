import React from "react";
import './contact.css'
import { Link } from "react-router-dom";



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
                    <Link className="contactSidebar-social-item-link" 
                    to={"https://wa.me/5521979721419?text=Olá,%20esse%20é%20um%20texto%20genérico!%20...%20Para%20falar%20com%20a%20Anõna"} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <li className="contactSidebar-social-item">
                            <i className="icon fa-brands fa-whatsapp"></i>
                            <p className="contactSidebar-iconText">WhatsApp</p> 
                        </li>
                    </Link>
                    <Link 
                        className="contactSidebar-social-item-link" 
                        to={'https://www.instagram.com/kiloklinlavanderia/'}  
                        target="_blank">
                        <li className="contactSidebar-social-item">
                            <i className="icon fa-brands fa-instagram"></i>
                            <p className="contactSidebar-iconText">Instagram</p> 
                        </li>
                    </Link>
                    <Link 
                        className="contactSidebar-social-item-link" 
                        to={'https://www.facebook.com/p/Lavanderia-Kilo-Klin-100040378464721/'}  
                        target="_blank">
                        <li className="contactSidebar-social-item">
                            <i className="icon fa-brands fa-facebook"></i>
                        <p className="contactSidebar-iconText">Facebook</p> 
                        </li>
                    </Link>
                </ul>
        
            </div>
        </div>
    )
}


export default ContactSidebar