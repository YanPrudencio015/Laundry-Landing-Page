import React from "react";
import './footer.css'
import img from '../../images/wave-haikei.png'
import { Link } from "react-router-dom";


export default function Footer (props){
    return (
        <section className="footer-section">
            <div className="footer-column-1">
                  Loundry
            </div>
            <div className="footer-column-2">
                <h1 className="footer-titles">Links</h1>
                    <ul className="footer-link-list">
                        <Link 
                            className="footer-link-item" 
                            >
                                <li className="footer-links">Serviços</li>
                        </Link>
                        <Link 
                            className=" footer-link-item" 
                            >
                                <li className="footer-links">Sobre nós</li>
                        </Link>
                    </ul>
            </div>
            <div className="footer-column-3">
                <h1 className="footer-titles">Sociais</h1>
                <ul className="footer-sociais-list">
                    <a 
                        href='https://www.instagram.com' 
                        target="_blank" 
                        className="footer-sociais">
                        <li className="footer-sociais-item">
                            <button className="footer-sociais-btn">Instagram</button>
                        </li>
                    </a>
                    <a   
                            className="footer-sociais"
                            href='https://www.facebook.com/'  
                            target="_blank">
                        <li className="footer-sociais-item">
                           <button className="footer-sociais-btn">Facebook</button>
                        </li>
                    </a>
                </ul>
            </div>
        </section>
    )
    
}