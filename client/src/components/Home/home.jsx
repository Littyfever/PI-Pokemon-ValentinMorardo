import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemones } from '../../actions/index';
import {Link} from 'react-router-dom'; 
import Cards from '../Cards/cards';
import Paginado from '../Paginado/paginado';
import Filtrado from '../Filtrado/filtrado';

const Home = () => {
    const dispatch = useDispatch();
    const allPokemones = useSelector ((state) => state.pokemones);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonesPerPage, setPokemonesPerPage] = useState(12);
    const indexLastPokemon = currentPage * pokemonesPerPage;
    const indexFirstPokemon = indexLastPokemon - pokemonesPerPage;
    const currentPokemon = allPokemones.slice(indexFirstPokemon, indexLastPokemon)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (() =>  {
        dispatch(getPokemones());
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemones());
    }


        return ( 
         <div>




                <Link to='/pokemon'>
                    Crear Pokemon
                </Link>
                
                <h1>POKEMON HOME</h1>

                <button onClick={e => {handleClick(e)}}>
                    volver a cargar todos los pokemones
                </button>


           <div>
                <span>ORDENAR POR:</span>
                    <select>
                        <option value='asc'>A - Z</option>
                        <option value='desc'>Z - A</option>
                        <option value='may'>MAYOR Ataque</option>
                        <option value='men'>MENOR Ataque</option>
                    </select>
            </div> 
            
            <div>
                <Filtrado />
            </div>

        <Paginado pokemonesPerPage={pokemonesPerPage} allPokemones={allPokemones.length} paginado={paginado}/>

         <Cards pokemones={currentPokemon}/>


         </div>

    )
}


export default Home;

