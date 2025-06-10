import React, { useEffect, useState } from "react";
import './banner.css'

import BGBannerDesktop from '../../images/Desktop/laundry-Banner-BG.jpg';
import BGBannertablet from '../../images/Tablet/laundry-Banner-BG.jpg';
import BGBannerMobile from '../../images/Mobile/laundry-Banner-BG.jpg';
import { Link } from "react-router-dom";


function Banner(props){

    const Texts = [
        {
            title:'Banner Title', 
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
            subDescription:'Banner Subdescription'
        },
        {
            title:'second Title', 
            description:'When an unknown printer took a galley of type and scrambled it to make a type specimen book.', 
            subDescription:'Second Subdescription'
        },
        {
            title:'Third Title', 
            description:'It is a long established fact that a reader will be distracted by the readable content of a page.', 
            subDescription:'Third Subdescription'
        }
    ] 

    
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


  // change the text after 5 second
const [turnText, setTurnText] = useState(0);
const [animationDirection, setAnimationDirection] = useState('right');
const [isAnimating, setIsAnimating] = useState(false); 

useEffect(() => {
    const Time = setTimeout(() => {
        // Start animation
        setIsAnimating(true);
        setAnimationDirection(prev => prev === 'right' ? 'left' : 'right');
        
        // Use setTimeout instead of setInterval - we only want to do this once
        setTimeout(() => {
            setTurnText(prev => {
                if(prev >= 2) {
                    return 0;
                }
                return prev + 1;
            });
            
            // Reset animation state after text has changed
            setTimeout(() => {
                setIsAnimating(false);
            }, 50);
        }, 500);
    }, 5000);
    
    return () => clearTimeout(Time);
}, [turnText]);

return (
    <div className="banner">
        <img className="banner-image-BG" src={rightImage} alt="banner-Imagem" />
        <div className="banner-texts">
            <div className="banner-text-container">
                <h2 className={`banner-text-title ${isAnimating ? `slide-${animationDirection}-out` : `slide-${animationDirection}-in`}`}>
                    {Texts[turnText].title}
                </h2>
                
                <h1 className={`banner-text-desc ${isAnimating ? `slide-${animationDirection}-out` : `slide-${animationDirection}-in`}`}>
                    {Texts[turnText].description}
                </h1>
                
                <h4 className={`banner-text-subDesc ${isAnimating ? `slide-${animationDirection}-out` : `slide-${animationDirection}-in`}`}>
                    {Texts[turnText].subDescription}
                </h4>
            </div>
            <div className="banner-text-footer">
                <Link 
                className="banner-btn" 
                to={"https://wa.me/5521979721419?text=Olá,%20esse%20é%20um%20texto%20genérico!%20...%20Para%20falar%20com%20a%20Anõna"} target="_blank">
                    <button>
                        <i className="banner-whatsApp-icon fa-brands fa-whatsapp"></i>
                        <p className="banner-btn-font">Envie mensagem</p>
                    </button>
                </Link>
            </div>
        </div>
    </div>
);
}
export default Banner