import React from 'react'
import './costumer.css'
// components
import Neighborhoods from './Neightborhood'
import Industries from './Industries'
function Costumers(props){
    return(
        <section className='costumers-section'>
            <div className='costumers-header'>
                <h1 className='cos-header-title'>Our Client</h1>
            </div>
            <div className='costumers-body'>
                <Neighborhoods/>
                <Industries/>
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