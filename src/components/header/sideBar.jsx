import React, { useEffect } from "react";
import './sidebar.css'

import facebookIcon from '../../icons/facebook.png'
import instagramIcon from '../../icons/instagram.png'
import whatsAppIcon from '../../icons/whatsapp.png'

// redux

import { useDispatch, useSelector } from "react-redux";
import { closeSidebar,openSidebar } from "../../redux/sideBarToggle";
import { Link } from "react-router-dom";


// components

import HorarySidebar from "./sidebarcomponents/horary/HorarySidebar";
import ContactSidebar from "./sidebarcomponents/contacts/ContactsSideBar";


const allButtonLinks = [
    {name: 'Menu', url: "/"},
    {name: 'Serviços', url: "/servicos"},
    {name: 'Sobre', url: "/sobre"},
    {name: 'Precos', url: "/precos"},
    {name: 'Contatos', url: "/contatos"},
]


function SideBarHeader(props){
const dispatch = useDispatch();
const selector = useSelector((state)=> state);

function closeMenu(){
    dispatch(closeSidebar())
}
function keepOpen(){
    dispatch(openSidebar())
}
useEffect(()=>{
    console.log(selector,'from sidebar')
},selector)

return(
     <section className={selector.isOpen === false ? 'sidebar-BG-close': 'sidebar-BG'}>
     {/* <section onClick={()=>{closeMenu()}} className={'sidebar-BG'}> */}
            <div className={selector.isOpen === false ? 'sidebar-close': 'sidebar'}>
               <div className="sidebar-header">
                <p className="sidebar-header-close-button" onClick={()=>{closeMenu()}}>Fechar</p>
                <h1 className="sidebar-header-title"> Kilo Klin</h1>
               </div>
                <div className="sidebar-navbar">
                    {allButtonLinks.map((value,index)=>(
                        <Link 
                            onClick={()=>{closeMenu()}} 
                            key={index} to={`${value.url}`} 
                            className="link-sidebar-navbar">
                        <p className="linkText-sidebar-navbar">{value.name}</p>
                    </Link>
                    ))}
                </div>
                {/* Contact information section */}
                <div className="address-navbar">
                    <div className="address-header-sidebar">
                        <h1 className="address-title-sidebar">Nossa Localização</h1>
                    </div>
                    <div className="address-body-sidebar">
                        <h1 className="address-body-title-sidebar">Endereço</h1>
                        <p className="address-body-text-sidebar">
                            Estr. dos Bandeirantes, 24.041 - Lj.H 
                            - Vargem Grande, Rio de Janeiro - RJ, 22785-091
                        </p>
                        <a  
                            className="address-body-link-sidebar"
                            href='https://www.google.com.br/maps/place/Lavanderia+Kilo+Klin/@-22.9777238,-43.494906,17z/data=!4m6!3m5!1s0x9bdd3395ecc88d:0x873ce0e4c651b833!8m2!3d-22.9775038!4d-43.493721!16s%2Fg%2F1pt_1dd4d?hl=pt-PT&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D'
                        >
                            <button className="address-body-link-Button-sidebar">
                                Ver no mapa
                            </button>
                        </a>
                    </div>
                </div>
                <HorarySidebar/>
                <ContactSidebar/>
            </div>
        </section>
    )
}


export default SideBarHeader;