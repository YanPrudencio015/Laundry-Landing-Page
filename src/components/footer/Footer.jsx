import React from "react";
import './footer.css'
import img from '../../images/wave-haikei.png'
import { Link } from "react-router-dom";


export default function Footer (props){
    return (
        <section className="footer-section">
            <div className="footer-column-1">
                    <div className="footer-title-letters">
                        <span className='footer-letter'>k</span>
                        <span className='footer-letter'>i</span>
                        <span className='footer-letter'>l</span>
                        <span className='footer-letter'>o</span>
                        <span className='footer-letter'>k</span>
                        <span className='footer-letter'>l</span>
                        <span className='footer-letter'>i</span>
                        <span className='footer-letter'>n</span>
                    </div>
            </div>
            <div className="footer-column-2">
                <h1 className="footer-titles">Links</h1>
                    <ul className="footer-link-list">
                        <li className="footer-links">Serviços</li>
                        <li className="footer-links">Sobre nós</li>
                        <li className="footer-links">Preços</li>
                    </ul>
            </div>
            <div className="footer-column-3">
                <h1 className="footer-titles">Sociais</h1>
                <ul className="footer-sociais-list">
                    <Link className="footer-sociais">
                        <li className="footer-sociais-item">
                            <button className="footer-sociais-btn">Instagram</button>
                        </li>
                    </Link>
                    <Link className="footer-sociais">
                        <li className="footer-sociais-item">
                            <button className="footer-sociais-btn">WhatsApp</button>    
                        </li>
                    </Link>
                    <Link className="footer-sociais">
                        <li className="footer-sociais-item">
                           <button className="footer-sociais-btn">Facebook</button>
                        </li>
                    </Link>
                </ul>
            </div>
        </section>
    )
    
}