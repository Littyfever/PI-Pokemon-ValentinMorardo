import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemones, getTypes} from '../../actions/index';
import {Link} from 'react-router-dom'; 
import Loading from '../Loading/loading';
import Cards from '../Cards/cards';
import Paginado from '../Paginado/paginado';
import Filtrado from '../Filtrado/filtrado';
import SearchBar from '../SearchBar/searchBar';
import styles from './home.module.css';
import pikachuSad from '../IMAGENES/detail/pikachuSad.gif';
import pokemonLogo from '../IMAGENES/pokemonLogo.png'

const Home = () => {

    const dispatch = useDispatch();
    const pokemones = useSelector ((state) => state.pokemones);
    const mensajeError = useSelector((state) => state.mensajeErr);

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonesPerPage, setPokemonesPerPage] = useState(12);
    const indexLastPokemon = currentPage * pokemonesPerPage;
    const indexFirstPokemon = indexLastPokemon - pokemonesPerPage;
    const currentPokemon = pokemones.slice(indexFirstPokemon, indexLastPokemon)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (() =>  {
        dispatch(getPokemones());
        dispatch(getTypes());
    }, [dispatch])



    return ( 
        <div className={styles.fondo}> 
            
            { pokemones.length > 0 ? 
            <div className={styles.containerMenu}>  
                <div>
                    <img src={pokemonLogo} className={styles.imagen}/>
                </div>

                <div className={styles.containerUtility}>
                    <div className={styles.searchBar}>
                        <SearchBar /> 
                    </div>
                    <div className={styles.filtrado}>
                        <Filtrado />
                    </div>
                    <div className={styles.botonCrear}>
                        <Link to='/crearpokemon'><button>Crear Pokemon</button></Link>
                    </div>
                </div>

                <div className={styles.paginado}>
                    <Paginado pokemonesPerPage={pokemonesPerPage} allPokemones={pokemones.length} paginado={paginado}/>
                </div>

            </div> 
                : 
                <Loading/>
            }

            {mensajeError.status &&

            <div>

                <div className={styles.itemsError}>
                    <h1 className={styles.noExiste}>No se encontraron pokemones :(</h1>
                    <img src={pikachuSad} className={styles.pikaSad} width='500' height='400'/>
                </div>

            </div>

            }

            {pokemones.length > 0 && !mensajeError.status&&

            <div className={styles.cards}>
                <Cards pokemones={currentPokemon}/>
            </div>

            }

            

        </div>
)

}


export default Home;

