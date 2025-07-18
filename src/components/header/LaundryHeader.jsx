import React, { useEffect, useState, useRef } from "react";

import './laundryheader.css';

// React Router
import { Link } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar } from "../../redux/sideBarToggle";


// toggle menu sidebar
function LaundryHeader() {
    const sidebarState = useSelector((state) => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("Current state:", sidebarState);
    }, [sidebarState]);
    
    const handleMenuClick = () => {
        dispatch(openSidebar());
    };







    return (
        <div className='loundry-header'>
            <Link to='/'>
                <h1 className='header-title'>
                    <p className='header-sub-title'>Laundry</p>
                </h1>
            </Link>
            <nav className='header-navbar'>
                <Link className="navbar-options">
                    <p>Services</p>
                </Link> 
                <Link className="navbar-options">
                    <p>About</p>
                </Link> 
            </nav>
            <div className='header-menu-icon' onClick={handleMenuClick}>
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
            </div>
        </div>
    );
}

export default LaundryHeader;