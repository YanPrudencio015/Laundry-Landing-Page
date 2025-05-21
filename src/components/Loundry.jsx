import React from 'react';
import './loundry.css';


// Components
import Banner from './banner/Banner';
import About from './about/About';
import Service from './Service/Service';
import Promotion from './promotion/Promotion'
import Costumers from './costumer/Costumer';

const Loundry = () => {
  return (
    <>
      <Banner />
      <About />
      <Service/>
      <Promotion/>
      {/* ver os erros no desing da promotion e corrigi-los antes de continuar */}
      <Costumers/>
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
        - principais clientes => Hosteis, Pousadas, Hostels, indústrias, Eventos
        -  Bairros que atendemos => Recreio, Barra, Peninsula,Rio 2, Curicica, Vargem Grande, Vargem Pequena
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