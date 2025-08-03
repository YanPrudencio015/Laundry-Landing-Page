import React, { useEffect} from "react";

import './laundryheader.css';

// React Router
import { Link } from "react-router-dom";

function LaundryHeader() {
    return (
        <header className='loundry-header' id="header">
            <Link to='/'className='header-title' >
                    <h1 className='header-sub-title'>BlueWave Cleaners</h1>
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
        </header>
    );}

export default LaundryHeader;