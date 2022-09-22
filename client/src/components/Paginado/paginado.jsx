import React from "react";


const paginado = ({pokemonesPerPage, allPokemones, paginado}) => {

    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(allPokemones/pokemonesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {
                    pageNumbers &&  pageNumbers.map(number => (
                        <li className="number" key={number}>
                            <a onClick={()=> paginado(number) }>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )


}



export default paginado;