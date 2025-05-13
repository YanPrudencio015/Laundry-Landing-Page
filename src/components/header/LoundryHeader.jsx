import React, { useEffect } from "react";
import './loundryheader.css';

// React Router
import { Link } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar } from "../../redux/sideBarToggle";

function LoundryHeader() {
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
                    Kilo Klin
                </h1>
            </Link>
            <nav className='header-navbar'>
                <Link className="navbar-options" to='/servicos'>
                    <p>
                        Serviços
                    </p>
                </Link> 
                <Link className="navbar-options" to='/sobre'>
                    <p>
                        Sobre
                    </p>
                </Link> 
                <Link className="navbar-options" to='/precos'>
                    <p>Preços</p>
                </Link>
                <Link className="navbar-options" to='/contatos'>
                    <p>Contatos</p>
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

export default LoundryHeader;