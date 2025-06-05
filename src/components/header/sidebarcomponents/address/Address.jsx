import React from "react";
import { Link } from "react-router-dom";



function Address(props){
    return(
        <div className="address-sidebar">
            <h1 className="address-title">Onde nós estamos</h1>
            <p className="address-sidebar-info">
                Estr. dos Bandeirantes, 24.041 - Lj.H - Vargem Grande, Rio de Janeiro - RJ, 22785-091
            </p>
            <Link to={'https://www.google.com.br/maps/place/Lavanderia+Kilo+Klin/@-22.9806454,-43.4969416,15z/data=!4m6!3m5!1s0x9bdd3395ecc88d:0x873ce0e4c651b833!8m2!3d-22.9775038!4d-43.493721!16s%2Fg%2F1pt_1dd4d?hl=pt-PT&entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D'}
             className="address-sidebar-link">
                <button className="address-sidebar-btn">Ver no mapa</button>
            </Link>
        </div>
    )
}


export default Address;