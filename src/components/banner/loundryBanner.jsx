import React from "react";
import KiloklinMascot from '../../images/Desktop/mascot.jpg'
import './banner.css'


// const Text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a laudantium sunt totam id magni. Laborum earum veniam magni officiis dolore consectetur, aliquid sequi facere, neque blanditiis quo reiciendis qui!'
// const Text2 = 'aliquid sequi facere, neque blanditiis quo reiciendis qui!'
// const Text3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a consectetur, aliquid sequi facere, neque blanditiis quo reiciendis qui!'
// const GenericTexts = [
//     Text1,
//     Text2,
//     Text3,
// ]



function LoundryBanner(props){
    return(
        <div className='loundry-banner'>
        <div className='banner-Text-BG'>
            <p className='banner-Text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Illum a laudantium sunt totam id magni. Laborum earum
                veniam magni officiis dolore consectetur, aliquid sequi
                facere, neque blanditiis quo reiciendis qui!
            </p>
        </div>
        <img className='banner-mascot' alt='kilokin' src={KiloklinMascot}/>

        <div className='banner-text-steps-section'>
            <div className='banner-text-steps'></div>
            <div className='banner-text-steps'></div>
            <div className='banner-text-steps'></div>
        </div>
    </div>
    )
}

export default LoundryBanner