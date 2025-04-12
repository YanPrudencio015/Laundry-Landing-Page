import React, { useEffect } from "react";
import './loundryheader.css';
import SidebarMenu from './sideBar';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar } from "../../redux/sideBarToggle";

function LoundryHeader(props) {
    // Move useSelector inside the component
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
            <h1 className='header-title'>KiloKlin</h1>
            <nav className='header-navbar'>
                <p className="navbar-options">Serviços</p>
                <p className="navbar-options">Preços</p>
                <p className="navbar-options">Contatos</p>
            </nav>
            <div className='header-menu-icon' onClick={handleMenuClick}>
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
            </div>
        </div>
    );
}

export default LoundryHeader;