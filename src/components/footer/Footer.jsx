import React from "react";
import './footer.css'
import img from '../../images/wave-haikei.png'


export default function Footer (props){
    return (
        <section className="footer-section">
            <div className="footer-section1">
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
                    <div className="socials">
                        <div className="icon-BG">
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="icon-BG">
                            <i class="fa-brands fa-whatsapp"></i>
                        </div>
                        <div className="icon-BG">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
            </div>
        </section>
    )
    
}