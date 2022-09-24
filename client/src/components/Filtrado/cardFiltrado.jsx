import React from "react";
import {useState} from 'react';


const CardFiltrado = ({options, titulo, handlerFilter }) => {


    return (    
            <div className="cardFiltradoTipos">

                <h5>{titulo}</h5>
                <select onChange={e => {handlerFilter(e.target.value)} }>
                    {<option value='Todos'>Todos</option>}
                    {options.map((e) => (            
                        <option value={e.nombre}>{e.nombre}</option>
                    ))}
                </select>

            </div>
    )
}

export default CardFiltrado;

