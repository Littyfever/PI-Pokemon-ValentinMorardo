import React from "react";
import {useState} from 'react';
import styles from '../Filtrado/cardFiltrado.module.css'


const CardFiltrado = ({options, titulo, handlerFilter }) => {


    return (    
            <div className={styles.card}>

                <label>{titulo}</label>
                <select onChange={e => {handlerFilter(e.target.value)} }>
                    {titulo !== 'Orden' && <option value='Todos'>Todos</option>}
                    {options.map((e) => (            
                        <option value={e.nombre} c>{e.nombre}</option>
                    ))}
                </select>

            </div>
    )
}

export default CardFiltrado;

