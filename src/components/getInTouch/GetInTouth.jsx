import React from "react";
import './getintouch.css'

function GetInTouch(props){
    return(
        <div className="getInTouch" id="getInTouch">
            <form className="FieldOne">
                <div className="FieldOneTitles">
                    <h1 className="FieldOneTitle">Get in Touch</h1>
                    <h3 className="FieldOneSubtitle">Feel free to drop us a line below!</h3>
                </div>
                <div  className="inputsFieldsSquare">
                    <input type="text" placeholder="Your Name" className="nameInputs" />
                    <input type="email" placeholder="Your email" className="emailInputs" />
                    <textarea placeholder="type your message here" className="fieldTextInput"/>
                </div>
                <button className="getInTouchBtn" type="submit">Send Message</button>
            </form>
            <div className="FieldTwo">
                <h1 className="fieldTwoTitle">
                    Contact Us
                </h1>
                <ul className="fieldTwoList">
                    <li className="fieldTwoItem">
                        <i className="feldTwoItemIcon fa-solid fa-location-dot" aria-label="Location"></i>
                        <span className="fieldTwoItemInfo"> 123 Market Street, Suite 400, Riverview City, CA 90210</span>
                    </li>
                    <li className="fieldTwoItem">
                        <i className="feldTwoItemIcon fa-solid fa-envelope" aria-label="Email"></i>
                        <span className="fieldTwoItemInfo"> hello@cleanwave.com</span>
                    </li>
                    <li className="fieldTwoItem">
                        <i className="feldTwoItemIcon fa-solid fa-phone" aria-label="Phone"></i>
                        <span className="fieldTwoItemInfo"> +1 (234) 567-8910</span>
                    </li>
                </ul>
                <div className="fieldTwoSocialMedia">
                    <i class=" fieldTwoSocialMediaIcon fa-brands fa-instagram"></i>
                    <i class=" fieldTwoSocialMediaIcon fa-brands fa-x-twitter"></i>
                    <i class=" fieldTwoSocialMediaIcon fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;