import React, { useEffect } from "react";
import './sidebar.css'

import facebookIcon from '../../icons/facebook.png'
import instagramIcon from '../../icons/instagram.png'
import whatsAppIcon from '../../icons/whatsapp.png'

// redux

import { useDispatch, useSelector } from "react-redux";
import { closeSidebar,openSidebar } from "../../redux/sideBarToggle";
import { Link } from "react-router-dom";



const allButtonLinks = [
    {name: 'Menu', url: "/"},
    {name: 'Services', url: "/servicos"},
    {name: 'About', url: "/sobre"},
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
 <div className="sideBar">
    
 </div>
    )
}


export default SideBarHeader;