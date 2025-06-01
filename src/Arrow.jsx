import React, { useEffect, useState, useRef } from "react";
import './arrow.css'



export default function Arrow(props){
    const [windowHeightSize, setWindowHeightSize] = useState(0);
    const arrowElement = useRef(null);
    const arrowElementBG = useRef(null);

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


    useEffect(()=>{
        console.log(windowHeightSize);

        const bgprogress = 100 - windowHeightSize
        const bgprogressConverted = bgprogress.toFixed(2);

        console.log('gow: ', bgprogress.toFixed(2))
  if (windowHeightSize >= 2) {
    arrowElement.current.style.right = "2.5%";
    arrowElement.current.style.transform = "translateY(-50%) scale(1.05)";
    arrowElementBG.current.style.top = `${bgprogressConverted}%`
   
  } else {
    arrowElement.current.style.right = "-50%";
  }
    },[windowHeightSize])


    
    return(
        <div ref={arrowElement} className="arrow-icon">
            <i className="fa-solid fa-arrow-up"></i>
            <div ref={arrowElementBG} className="arrow-icon-bg"></div>
        </div>
    )
}