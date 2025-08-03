import React from "react";
import './footer.css'
import { Link } from "react-router-dom";


export default function Footer (props){
    return (
        <section className="footer">
            <Link to={"#header"}>
                <div className="footerTitle">
                BlueWave Cleaners
                </div>
            </Link>
            <div className="footerLink">
                    <h1 className="footerLinkTitle">
                        Links
                    </h1>
                    <ul className="footerLinkList">
                        <Link to={"#services"} className="footerLinkItem">
                                <li className="footer-links">Services</li>
                        </Link>
                        <Link to={"#getInTouch"} className=" footerLinkItem">
                                <li className="footer-links">Get in touch</li>
                        </Link>
                        <Link to={"#about"} className=" footerLinkItem">
                                <li className="footer-links">About</li>
                        </Link>
                    </ul>
            </div>
            <div className="footerContact">
                <h1 className="footerContactTitle">Contact Us</h1>
                <ul className="footerSociaisList">
                    <li className="footerSociaisItem">
                       123 Market Street, Suite 400, Riverview City, CA 90210
                    </li>
                    <li className="footerSociaisItem">
                       hello@cleanwave.com
                    </li>
                    <li className="footerSociaisItem">
                      +1 (234) 567-8910
                    </li>
                </ul>
            </div>
            <p className="formalText">© 2025 CleanWave Laundry. All rights reserved.</p>
        </section>
    )
    
}