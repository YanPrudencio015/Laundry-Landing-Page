import React from 'react'
import './costumer.css'


function Costumers(props){
    return(
        <section className='costumers-section'>
            <div className='costumers-header'>
                <h1 className='cos-header-title'>Quem Atendemos</h1>
            </div>
            <div className='costumers-body'>
                <div className='cos-square'>
                    <div className='cos-square-header'>
                        <h1 className='cos-square-title'>Segmentos atendidos</h1>
                    </div>
                    <div className='cos-square-body'>
                        <p className='cos-square-items'>Hosteis</p>
                        <p className='cos-square-items'>Pousadas</p>
                        <p className='cos-square-items'>Hostels</p>
                        <p className='cos-square-items'>Indústrias</p>
                        <p className='cos-square-items'>Eventos</p>
                    </div>
                </div>
                <div className='cos-square square2'>
                    <div className='cos-square-header'>
                        <h1 className='cos-square-title'>Bairros Atendidos</h1>
                    </div>
                    <div className='cos-square-body'>
                        <p className='cos-square-neighborhoods'>Recreio</p>
                        <p className='cos-square-neighborhoods'>Barra</p>
                        <p className='cos-square-neighborhoods'>Peninsula</p>
                        <p className='cos-square-neighborhoods'>Rio 2</p>
                        <p className='cos-square-neighborhoods'>Curicica</p>
                        <p className='cos-square-neighborhoods'>Vargem Grande</p>
                        <p className='cos-square-neighborhoods'>Vargem Pequena</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

      


/*
Inspiração para a sessão que mostra onde atendem e quais os possíveis clientes
https://i.pinimg.com/736x/b8/9c/52/b89c52313c750b52d5f2cbfdac28d49e.jpg
https://i.pinimg.com/736x/37/e5/10/37e510adef9c044614b8918595f3ff33.jpg
https://i.pinimg.com/736x/0b/d2/b7/0bd2b701f1987a9f63ed8ed64fc5cc71.jpg
*/

export default Costumers