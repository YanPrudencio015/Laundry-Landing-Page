import React, { useEffect, useRef, useState } from "react";

import "./secondheader.css"

import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../../redux/sideBarToggle";
import { Link } from "react-router-dom";

function Scrollheader(props){
    const dispatch = useDispatch();
    // function to open the menu sidebar
    const handleOpenSidebar = ()=>{
        dispatch(openSidebar())
    }

    // show the header when the user scroll the site:

    const[windowHeightSize, setWindowHeightSize] = useState(0);
    const headerElement = useRef(null);


    useEffect(()=>{
        function calcWindowSizeHeight(){
            let height = document.documentElement.scrollHeight - window.innerHeight;
            let scrolled = scrollY;
            let progress = (scrolled/ height) *100;
            setWindowHeightSize(progress.toFixed(2));
        }
        document.addEventListener('scroll', calcWindowSizeHeight);

        return(()=>{
            document.removeEventListener('scroll', calcWindowSizeHeight);
        })
    },[])


        useEffect(()=>{
      if (windowHeightSize >= 2) {
        headerElement.current.style.top = "0em";
       
      } else {
        headerElement.current.style.top = "-50em";
        headerElement.current.style.transition = ".6s"
    }
        },[windowHeightSize])
    
    return(
        <div className="scrollHeader"ref={headerElement}>
            <Link to={'/'}>
            <h1 className="scrollHeaderTitle">Laundry</h1>
            </Link>
            <button className="scrollHeaderMenuButton" onClick={handleOpenSidebar}>
                <div className="scrHMenuButtonLine"></div>
                <div className="scrHMenuButtonLine"></div>
                <div className="scrHMenuButtonLine"></div>
            </button>
        </div>
    )

};

export default Scrollheader;