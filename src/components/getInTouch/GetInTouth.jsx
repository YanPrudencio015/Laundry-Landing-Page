import React from "react";

import './getintouch.css'

import { Link } from "react-router-dom";
function GetInTouch(props){
    return(
        <div className="get-in-touch">
            <h1 className="getTitle">get in touch</h1>
            <ul className="getList">
                <li className="getItems"><a href="/" className="getItemsLink">Instagram</a></li>
                <li className="getItems"><a href="/" className="getItemsLink">Facebook</a></li>
            </ul>
        </div>
    )
}

export default GetInTouch;