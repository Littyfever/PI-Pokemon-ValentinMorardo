import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemones, getTypes} from '../../actions/index';
import {Link} from 'react-router-dom'; 
import Cards from '../Cards/cards';
import Paginado from '../Paginado/paginado';
import Filtrado from '../Filtrado/filtrado';

const Home = () => {
    const dispatch = useDispatch();
    const pokemones = useSelector ((state) => state.pokemones);

    const [localPokemones, setLocalPokemones] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonesPerPage, setPokemonesPerPage] = useState(12);
    const indexLastPokemon = currentPage * pokemonesPerPage;
    const indexFirstPokemon = indexLastPokemon - pokemonesPerPage;
    const currentPokemon = localPokemones.slice(indexFirstPokemon, indexLastPokemon)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (() =>  {
        dispatch(getPokemones());
        dispatch(getTypes());
    }, [dispatch])

    useEffect (() =>  {
        setLocalPokemones(pokemones)
    }, [pokemones])

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

            <Filtrado />

            <Paginado pokemonesPerPage={pokemonesPerPage} allPokemones={pokemones.length} paginado={paginado}/>
            
            <Cards pokemones={currentPokemon}/>

         </div>

    )
}


export default Home;

