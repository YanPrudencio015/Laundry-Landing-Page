import React from 'react';
import './loundry.css';


// Components
import Banner from './banner/Banner';
import About from './about/About';
import LoundryServices from './services/LoundryServices'
import Service from './Service/Service';

const Loundry = () => {
  return (
    <>
      <Banner />
      <About />
      <Service/>

      {/* Future sections:
        - serviços => [
                        lavar e Secar (Por cestos), 
                        Passar (Por peça), 
                        conserto de roupas, 
                        tingimento, 
                        tapetes e curtinas
                        Couro e Edredons
                        Vestidos de Noiva
                      ]
        - promoção
        - Nossos diferenciais
        - Nossos clientes => Hosteis, Pousadas, Hostels, indústrias, Eventos
        -  Onde atendemos => Recreio, Barra, Peninsula, Rio 2, Curicica, Vargem Grande, vargem Pequena
        - metrica
      */}
  {/* Corrigir erro no background do sidebar:
    quando rola muito rápido a tela, p menu buga e o circulo amarelo fica menor
    que a lista do sidebar
  */}
    </>
  );
};

export default Loundry;