import React from "react";
import './getintouch.css'

function GetInTouch(props){
    return(
        <div className="getInTouch" id="getInTouch">
            <div className="FieldOne">
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
            </div>
            <div className="FieldTwo">
                <h1 className="fieldTwoTitle">
                    Contact Us
                </h1>
                <ul className="fieldTwoList">
                    <li className="fieldTwoItem">
                        <i class="feldTwoItemIcon fa-solid fa-location-dot"></i>
                        <h6 className="fieldTwoItemInfo">123 Market Street, Suite 400, Riverview City, CA 90210</h6>
                    </li>
                    <li className="fieldTwoItem">
                        <i class="feldTwoItemIcon fa-solid fa-envelope"></i>
                        <h6 className="fieldTwoItemInfo">hello@youser.com</h6>
                    </li>
                    <li className="fieldTwoItem">
                        <i class="feldTwoItemIcon fa-solid fa-phone"></i>
                        <h6 className="fieldTwoItemInfo">+123 15554565</h6>
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