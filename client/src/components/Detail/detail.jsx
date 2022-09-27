import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonDetail } from '../../actions/index';
import {Link} from 'react-router-dom'; 
import styles from '../Detail/detail.module.css';

import {pikachuSad} from '../IMAGENES/imagenes'




const Detail = (props) => {

    const dispatch = useDispatch()

    const pokemon = useSelector ((state) => state.detail);
    const id = props.match.params.id;

    useEffect (() =>  {
        dispatch(pokemonDetail(id));
    }, [])

    

    
    if( id > 40 && id.length !== 36) {
        return (

            <div className={styles.fondo}>

                <div className={styles.container}>
                        <h1 className={styles.noExiste}>No existe un pokemon con ese ID :(</h1>
                </div>
                <div className={styles.container}>
                    <img src={pikachuSad} className={styles.pikaSad} width='500' height='400'/>
                </div>
                <div className={styles.container}>
                    <Link to='/home'>
                        <button id={styles.botonHome} width='500' height='400'>VOLVER A HOME</button>
                    </Link>
                </div>
            </div>
        )
        

    } else {
        return (
            <div className={styles.fondo}> 
                
                <div className={styles.container2}>

                    {/* <Link to='/home'>
                        <button>volver</button>
                    </Link> */}
                    
                    <div> 
                        <h1 id={styles.nombrePokemon}>{pokemon.nombre}</h1>
                    </div>

                    <div>
                        <img src={pokemon.imagen} />
                    </div>

                    <div>
                        
                        <p className={styles.estadisticas}>VIDA: {pokemon.vida}</p> 
                        <p className={styles.estadisticas}> ATAQUE: {pokemon.ataque}</p>
                        <p className={styles.estadisticas}> DEFENSA: {pokemon.defensa}</p>
                        <p className={styles.estadisticas}> VELOCIDAD: {pokemon.velocidad}</p>
                        <p className={styles.estadisticas}> PESO: {pokemon.peso}</p>
                        <p className={styles.estadisticas}> ALTURA: {pokemon.altura}</p> 

                        <p className={styles.estadisticas}> TIPOS:{
                            pokemon.Tipos?.map((e) => 
                                <span> {e.nombre} </span>
                            )
                        }  </p>
                    </div>

                </div>  

            </div>
        )
    }
}

export default Detail;
