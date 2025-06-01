import React, { useEffect, useState, useRef } from "react";

import './loundryheader.css';

// React Router
import { Link } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar } from "../../redux/sideBarToggle";


// toggle menu sidebar
function LoundryHeader() {
    const sidebarState = useSelector((state) => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("Current state:", sidebarState);
    }, [sidebarState]);
    
    const handleMenuClick = () => {
        dispatch(openSidebar());
    };



// go to top with arrow icon
   const [windowHeightSize, setWindowHeightSize] = useState(0);
    const arrowElement = useRef(null);
    const arrowElementBG = useRef(null);
    const navbar = useRef(null)

    useEffect(()=>{
        function calcSiteheight(){
            let height = document.documentElement.scrollHeight - window.innerHeight;
            let scrolled = window.scrollY;
            let progress = (scrolled / height) * 100;
            setWindowHeightSize(progress.toFixed(2))
        }
        window.addEventListener('scroll', calcSiteheight);
        return()=>{
            window.removeEventListener('scroll', calcSiteheight);
        }
    },[])


    // Arrow BG progress 
    useEffect(()=>{
        const bgprogress = 100 - windowHeightSize
        const bgprogressConverted = bgprogress.toFixed(2);
  if (windowHeightSize >= 2) {
    arrowElement.current.style.right = "2.5%";
    arrowElement.current.style.transform = "translateY(-50%) scale(1.05)";
    arrowElementBG.current.style.top = `${bgprogressConverted}%`
   
  } else {
    arrowElement.current.style.right = "-50%";
  }
    },[windowHeightSize])

    // action to go on top

    function handleTopNavbar(){
        navbar.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }


    
    return (
        <div ref={navbar} className='loundry-header'>
            <Link to='/'>
                <h1 className='header-title'>
                    <p className='header-sub-title'>Lavanderia</p>
                    <div className="header-title-letters">
                        <span className='letter'>k</span>
                        <span className='letter'>i</span>
                        <span className='letter'>l</span>
                        <span className='letter'>o</span>
                        <span className='letter'>k</span>
                        <span className='letter'>l</span>
                        <span className='letter'>i</span>
                        <span className='letter'>n</span>
                    </div>
                    <i className="header-title-icon fa-solid fa-droplet"></i>
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

            {/* arrow */}

            <button onClick={handleTopNavbar} ref={arrowElement} className="arrow-icon">
                <i className="fa-solid fa-arrow-up"></i>
                <div ref={arrowElementBG} className="arrow-icon-bg"></div>
            </button>
        </div>
    );
}

export default LoundryHeader;