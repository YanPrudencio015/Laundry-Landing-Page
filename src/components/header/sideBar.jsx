import React, { useEffect } from "react";
import './sidebar.css'

import facebookIcon from '../../icons/facebook.png'
import instagramIcon from '../../icons/instagram.png'
import whatsAppIcon from '../../icons/whatsapp.png'

// redux

import { useDispatch, useSelector } from "react-redux";
import { closeSidebar,openSidebar } from "../../redux/sideBarToggle";
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
            <div className={selector.isOpen === false ? 'sidebar-close': 'sidebar'}>
                <div className="sidebar-title-section">
                    <h1 className="sidebar-title">Kiloklin</h1>
                    <p className="sidebar-closeBtn" onClick={()=>{closeMenu()}}>X</p>
                </div>
                <ul className="menu-sidebar-list">
                    <li className="menu-sidebar-item">Início</li>
                    <li className="menu-sidebar-item">Serviços</li>
                    <li className="menu-sidebar-item">Preços</li>
                    <li className="menu-sidebar-item">Contatos</li>
                </ul>
                <div className="sidebar-info">
                    <h1 className="sidebar-info-title">Informações de contato</h1>
                    <div className="sidebar-adress">
                        <h4 className="sidebar-adress-title">Endereço</h4>
                        <p className="sidebar-adress-info">Estr. dos Bandeirantes, 24.041 - Lj.H - Vargem Grande, Rio de Janeiro - RJ, 22785-091</p>
                    </div>
                    <div className="sidebar-worktime">
                        <h4 className="sidebar-worktime-title">Horários</h4>
                        <p className="sidebar-worktime-days">Segunda - feira <span className="sidebar-worktime-hour">8:00 - 17:00</span> </p>
                        <p className="sidebar-worktime-days">Terça - feira <span className="sidebar-worktime-hour">8:00 - 17:00</span> </p>
                        <p className="sidebar-worktime-days">Quarta - feira <span className="sidebar-worktime-hour">8:00 - 17:00</span> </p>
                        <p className="sidebar-worktime-days">Quinta - feira <span className="sidebar-worktime-hour">8:00 - 17:00</span> </p>
                        <p className="sidebar-worktime-days">Sexta - feira <span className="sidebar-worktime-hour">8:00 - 17:00</span> </p>
                        <p className="sidebar-worktime-days">Sábado <span className="sidebar-worktime-hour">8:00 - 12:00</span> </p>
                        <p className="sidebar-worktime-days">Domingo <span className="sidebar-worktime-hour">--</span> </p>
                    </div>
                    <div className="sidebar-phone">
                        <h4 className="sidebar-phone-title">Telefone</h4>
                        <p  className="sidebar-phone-number">(21)96016-2497</p>
                    </div>
                    <div className="sidebar-sociais">
                        <span className="sidebar-sociais-icons-span">
                            <div className="sidebar-sociais-icons-BG">
                            <img className="sidebar-sociais-icons" src={facebookIcon} alt="Facebook icon" />
                            </div>
                            <p className="sidebar-sociais-icons-title">Facebook</p>
                        </span>
                        <span className="sidebar-sociais-icons-span">
                            <div className="sidebar-sociais-icons-BG">
                            <img className="sidebar-sociais-icons" src={instagramIcon} alt="Facebook icon" />
                            </div>
                            <p className="sidebar-sociais-icons-title">Instagram</p>
                        </span>
                        <span className="sidebar-sociais-icons-span">
                            <div className="sidebar-sociais-icons-BG">
                            <img className="sidebar-sociais-icons" src={whatsAppIcon} alt="Facebook icon" />
                            </div>
                            <p className="sidebar-sociais-icons-title">Whatsapp</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default SideBarHeader;