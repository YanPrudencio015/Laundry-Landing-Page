import React from "react";
import './loundryheader.css'

function LoundryHeader(props){
return(
    <div className='loundry-header'>
    <h1 className='header-title'>KiloKlin</h1>
    <nav className='header-navbar'>
        <p>Serviços</p>
        <p>Preços</p>
        <p>Contatos</p>
        <p>Localização</p>
    </nav>
    <div className='socials'>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-instagram"></i>
    </div>
    <div className='header-menu-icon'>
    <i class="fa-solid fa-bars"></i>
    </div>
</div>
)
}

export default LoundryHeader