import React, { useEffect} from "react";

import './laundryheader.css';

// React Router
import { Link } from "react-router-dom";

function LaundryHeader() {
    return (
        <div className='loundry-header' id="header">
            <Link to='/'>
                <h1 className='header-title' >
                    <p className='header-sub-title'>Laundry</p>
                </h1>
            </Link>
            <nav className='header-navbar'>
                <Link className="navbar-options" to={"#services"}>
                    <p>Services</p>
                </Link> 
                <Link to={"#getInTouch"} className="navbar-options">
                    <p>Contact</p>
                </Link> 
                <Link to={"#about"} className="navbar-options">
                    <p>About</p>
                </Link> 
            </nav>
        </div>
    );}

export default LaundryHeader;