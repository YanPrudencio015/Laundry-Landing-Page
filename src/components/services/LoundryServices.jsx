import React, { useEffect, useState } from "react";
import { ServiceCardInfos } from "./informations/cardsInfo";

import imageTest from '../../images/Desktop/Lavagem-tapete.jpg'
import iconTest from '../../icons/iron-board.png';




function Services(props){


      // Inicialize com os valores atuais da janela
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [sizesUpdated,setSizesUpdated] = useState({
    widthUpdated: window.innerWidth,
    heightUpdated: window.innerHeight

  })

  useEffect(() => {
    // Função que atualiza o estado com o tamanho atual da janela
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    // Adiciona o evento de escuta ao objeto window
    window.addEventListener('resize', handleResize);
    
    // Limpa o evento quando o componente é desmontado
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    
}, []); // Array de dependências vazio significa que este efeito roda apenas uma vez na montagem


useEffect(()=>{

    setSizesUpdated({widthUpdated:windowSize.width,heightUpdated:windowSize.height})
    console.log(sizesUpdated)

},[windowSize])

    return(
        <div className='loundry-services-section'>
            <div className="service-image-square">
                <img src={imageTest} className="service-image"/>
                <div className="service-image-square-BG"></div>
                <p className="service-image-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aperiam, soluta quis nemo non id, officia omnis exercitationem similique accusantium sint!
                </p>
            </div>
            <div className="service-list-section">
                <div className="service-list-header">
                    <p className="service-list-header-Text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        <span>Nossos Serviços</span>
                    </p>
                </div>
                <ul className="service-list-square">

                        {ServiceCardInfos.map((value,key)=>(
                            <li key={key} className="service-list-item">
                                <div className="service-list-item-icon-BG">
                                    <img src={value.icon} className="service-list-item-icon"/>
                                </div>
                                <div className="circle-BG"></div>
                                <div className="service-list-item-text">
                                <h2 className="service-list-item-title">{value.frontTitle}</h2>
                                </div>
                            </li>
                        ))}
                        <li className="bg-Service-Btn"
                        ></li>
                </ul>
            </div>
        </div>

    )
}


export default Services