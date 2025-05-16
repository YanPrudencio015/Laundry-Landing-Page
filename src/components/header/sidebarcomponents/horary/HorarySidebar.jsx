import React from "react";
import './horarysidebar.css'




function HorarySidebar(props){
    return(
            <div className="horarySidebar">
                <div className="horarySidebar-header">
                    <h1 className="horarySidebar-header-title">
                        Horários
                    </h1>
                </div>
                <ul className="horarySidebar-list">
                    <li className="horarySidebar-item">
                        <span className="horarySidebar-span">Segunda - Sexta</span>
                        <p className="horarySidebar-hours">08:00 - 17:00</p>
                    </li>
                    <li className="horarySidebar-item">
                        <span className="horarySidebar-span">Sábado</span>
                        <p className="horarySidebar-hours">08:00 - 12:00</p>
                    </li>
                </ul>
            </div>
    )
}


export default HorarySidebar