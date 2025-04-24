import React, { useEffect, useState } from "react";
import './banner.css'

import BGBannerDesktop from '../../images/Desktop/laundry-Banner-BG.jpg';
import BGBannertablet from '../../images/Tablet/laundry-Banner-BG.jpg';
import BGBannerMobile from '../../images/Mobile/laundry-Banner-BG.jpg';



function Banner(props){
    const[windowSize, setWindowSize] = useState({height:window.innerHeight, width:window.innerWidth});
    const [rightImage, setRightImage] = useState(null)

    // useEffect is to check the currenty window size and update the useState windowSize
    useEffect(()=>{
        const resizeWindow = ()=>{
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', resizeWindow);
 
        return ()=>{
            window.removeEventListener('resize', resizeWindow)
        }
    },[])

    // choose the right image size according with window size 
    
    useEffect(()=>{
        if(windowSize.width < 425){
            setRightImage(BGBannerMobile)
        } else if(windowSize.width >= 426 && windowSize.width <= 1024){
            setRightImage(BGBannertablet)
        } else if(windowSize.width >= 1025){
            setRightImage(BGBannerDesktop)
        }
    },[windowSize])

    window.addEventListener
    return(
        <div className="banner">
            <img className="banner-image-BG" src={rightImage} alt="banner-Imagem" />
            <div className="banner-texts">
                <h2 className="banner-text-title">Banner Title</h2>
                <h1 className="banner-text-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                <h4 className="banner-text-subDesc">Banner Subdescription</h4>
                <div className="banner-text-footer">
                    <button className="banner-text-button">Chamar no WhatsApp</button>
                </div>
            </div>
        </div>
    )
}
export default Banner