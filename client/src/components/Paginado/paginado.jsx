import React from "react";
import styles from './paginado.module.css';


const paginado = ({pokemonesPerPage, allPokemones, paginado}) => {

    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(allPokemones/pokemonesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>

            <ul >
                {
                    pageNumbers &&  pageNumbers.map(number => (
                        <li className="number" key={number}>
                            <button onClick={()=> paginado(number) }>{number}</button>
  
                        </li>
                    ))
                }
            </ul>

        </nav>
    )
}



export default paginado;