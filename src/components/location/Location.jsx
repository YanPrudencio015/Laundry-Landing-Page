import React from 'react'
import './Location.css'
import image from '../../images/Desktop/location.jpg';
import image2 from '../../images/Desktop/location2.jpg';
import image3 from '../../images/Desktop/location3.jpg';
import image4 from '../../images/Desktop/location4.jpg';

// background

import BG1 from '../../images/Backgrounds/subtle-carbon.png'
// import BG1 from '../../images/Backgrounds/swirl.png'
import BG3 from '../../images/Backgrounds/worn-dots.png'


function Location() {
  return (
    <section className='location-Section' 
        style={{backgroundImage:`url(${BG1})`, 
            backgroundAttachment:'fixed'}}>
        <h1 className='location-Section-title'> Nossa Localização</h1>
        <div className='address-info'>
            <h3 className='address-title'>Endereço:</h3>
            <p className='address-desc'>Estr. dos Bandeirantes, 24.041 - Lj.H - Vargem Grande, Rio de Janeiro - RJ, 22785-091</p>
        </div>
        <div className='text-side'>
            <h3>Horário</h3>
        </div>
        <div className='location-side'>
            <img className='location-img' src={image4}/>
            <div className='bg-location-img'></div>
            <button className='location-btn'><label>Veja no mapa</label></button>
        </div>
    </section>
)
}

export default Location