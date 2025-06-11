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
                        <Link 
                            className="footer-link-item" 
                            to={'/servicos'}>
                                <li className="footer-links">Serviços</li>
                        </Link>
                        <Link 
                            className=" footer-link-item" 
                            to={'/sobre'}>
                                <li className="footer-links">Sobre nós</li>
                        </Link>
                        <Link 
                            className=" footer-link-item" 
                            to={'/preco'}>
                                <li className="footer-links">Preços</li>
                        </Link>
                    </ul>
            </div>
            <div className="footer-column-3">
                <h1 className="footer-titles">Sociais</h1>
                <ul className="footer-sociais-list">
                    <a 
                        href='https://www.instagram.com/kiloklinlavanderia/' 
                        target="_blank" 
                        className="footer-sociais">
                        <li className="footer-sociais-item">
                            <button className="footer-sociais-btn">Instagram</button>
                        </li>
                    </a>
                    <a 
                        className="footer-sociais" 
                        href="https://wa.me/5521979721419?text=Olá,%20esse%20é%20um%20texto%20genérico!%20...%20Para%20falar%20com%20a%20Anõna" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <li className="footer-sociais-item">
                            <button className="footer-sociais-btn">WhatsApp</button>    
                        </li>
                    </a>
                    <a   
                            className="footer-sociais"
                            href='https://www.facebook.com/p/Lavanderia-Kilo-Klin-100040378464721/'  
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