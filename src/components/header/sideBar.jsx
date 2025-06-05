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
import Address from "./sidebarcomponents/address/Address";
import BusinessHour from "./sidebarcomponents/businessHour/businessHour";


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

    {/*
        ==== Elementos que têm eventos ======
        <p className="sidebar-header-close-button" onClick={()=>{closeMenu()}}>Fechar</p> 
        <div className={selector.isOpen === false ? 'sidebar-close': 'sidebar'}>
        
                    <div className="sidebar-navbar">
                    {allButtonLinks.map((value,index)=>(
                        <Link 
                            onClick={()=>{closeMenu()}} 
                            key={index} to={`${value.url}`} 
                            className="link-sidebar-navbar">
                        <p className="linkText-sidebar-navbar">{value.name}</p>
                    </Link>
                    ))}
    */}
return(
        <section className={selector.isOpen === false ? 'sidebar-BG-close': 'sidebar-BG'}>
            <div className={selector.isOpen === false ? 'sidebar-close': 'sidebar'}>
                <div className="sidebar-header">
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
                        <i onClick={()=>{closeMenu()}} className="side-header-icon fa-solid fa-xmark"></i>
                </div>
                <ul className="sidebar-links-list">
                   <Link onClick={()=>{closeMenu()}} to={'/'} className="sidebar-links"><li>Menu</li></Link>
                   <Link className="sidebar-links"><li>Serviços</li></Link>
                   <Link onClick={()=>{closeMenu()}} to={'/sobre'} className="sidebar-links"><li>Sobre</li></Link>
                   <Link className="sidebar-links"><li>Preços</li></Link>
                </ul>
                <Address/>
                <BusinessHour/>
            </div>
        </section>
    )
}


export default SideBarHeader;