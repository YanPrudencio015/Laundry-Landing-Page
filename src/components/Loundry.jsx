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
      {/* <Costumers/> */}
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
        -  Bairros que atendemos => Recreio, Barra, Peninsula, Rio 2, Curicica, Vargem Grande, vargem Pequena
        - metrica
      */}
  {/* Corrigir erro no background do sidebar:
    quando rola muito rápido a tela, p menu buga e o circulo amarelo fica menor
    que a lista do sidebar
  */}
    </>
  );
};

/*
Inspiração para a sessão que mostra onde atendem e quais os possíveis clientes
https://i.pinimg.com/736x/b8/9c/52/b89c52313c750b52d5f2cbfdac28d49e.jpg
https://i.pinimg.com/736x/37/e5/10/37e510adef9c044614b8918595f3ff33.jpg
https://i.pinimg.com/736x/0b/d2/b7/0bd2b701f1987a9f63ed8ed64fc5cc71.jpg

*/
export default Loundry;