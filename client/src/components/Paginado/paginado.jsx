import React from "react";
import styles from './paginado.module.css';


const paginado = ({pokemonesPerPage, allPokemones, paginado}) => {

    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(allPokemones/pokemonesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
            <nav className={styles.botonesPaginado}>
                {
                    pageNumbers &&  pageNumbers.map(number => (
                            <button onClick={()=> paginado(number) }>{number}</button>
                    ))
                }
            </nav>
    )
}



export default paginado;