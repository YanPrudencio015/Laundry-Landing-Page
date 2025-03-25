import React, { useEffect, useState } from "react";
import { ServiceCardInfos } from "./informations/cardsInfo";

function Services() {
    const [count, setCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [windowSize, setwindowSize] = useState({width:window.innerWidth, height: window.innerHeight})
    // auto interval to change service's buttons
    useEffect(() => {
        // only stop the progress to next button if doens't  paused
        if (!isPaused) {
            const intervalTime = setInterval(() => {
                setCount(prev => {
                    const nextCount = prev + 1;
                    return nextCount >= ServiceCardInfos.length ? 0 : nextCount;
                });
            }, 5000);
            return () => clearInterval(intervalTime);
        }
    }, [isPaused]);

    // Function to check the click on the button
    function handleServiceClick(targetIndex) {
        // Stop automatic cicle
        setIsPaused(true);
        
        // Define the counter to service click
        setCount(targetIndex);

        // return to cicle after 5 seconds
        const timeoutId = setTimeout(() => {
            setIsPaused(false);
        }, 7000);
    }

    // to check the currently windown Size
    useEffect(()=>{
        
        function handleWindowSize(){
            setwindowSize({width: window.innerWidth, height:window.innerHeight});
        }

        window.addEventListener('resize', handleWindowSize);

        return ()=>{
            window.removeEventListener('resize', handleWindowSize);
        }
    },[windowSize])
    // to change the image according to window size and index from ServiceCardInfos
    let currentImage;

    if(windowSize.width < 425){
        currentImage = ServiceCardInfos[count].img[2];
    } else if(windowSize.width >= 426 && windowSize.width <= 1024){
        currentImage = ServiceCardInfos[count].img[1];
    } else{
        currentImage = ServiceCardInfos[count].img[0];
    }

    return (
        <div className='loundry-services-section'>
            <div className="service-image-square">
                <img src={currentImage} className="service-image" alt="Service"/>
                <div className="service-image-square-BG"></div>
                <div className="service-image-text">
                    <p className="text-info">
                        {ServiceCardInfos[count].backDesc}
                    </p>
                </div>
            </div>
            <div className="service-list-section">
                <div className="service-list-header">
                    <p className="service-list-header-Text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        <span>Nossos Serviços</span>
                    </p>
                </div>
                <ul className="service-list-square">
                    {ServiceCardInfos.map((value, key) => (
                        <li 
                            key={key} 
                            className="service-list-item" 
                            onClick={() => handleServiceClick(key)}
                        >
                            <div className="service-list-item-icon-BG">
                                <img 
                                    src={value.icon} 
                                    className="service-list-item-icon" 
                                    alt={value.frontTitle}
                                />
                            </div>
                            <div 
                            className="circle-BG"
                                style={{
                                    transition: '.6s ease-in-out',
                                    transform: count === key ? 'translateY(-13em)' : 'translateY(0)'
                                }}
                            >
                            </div>
                            <div className="service-list-item-text">
                                <h2 className="service-list-item-title">{value.frontTitle}</h2>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Services;