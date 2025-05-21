import React from 'react'
import './costumer.css'


function neighborhoods(props){
    return(
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
    )
}

      


export default neighborhoods