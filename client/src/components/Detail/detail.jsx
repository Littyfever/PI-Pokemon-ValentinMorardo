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
    }, [pokemon])



    
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
                        <button className={styles.botonHome} >VOLVER A HOME</button>
                    </Link>
                </div>
            </div>
        )
        

    } else {
        return (
            <div className={styles.fondo}> 
                
                <div className={styles.container2}>

                    <Link to='/home'>
                        <button className={styles.botonHome}>VOLVER</button>
                    </Link> 
                    

                        <h1 id={styles.nombrePokemon}>{pokemon.nombre}</h1>
                        <img src={pokemon.imagen} />

                    <div className={styles.detalles}>
        
                        <div className={styles.estadisticas}> <span className={styles.nombreDato}>VIDA:</span> <span className={styles.dato}>{pokemon.vida}</span></div> 
                        <div className={styles.estadisticas}> <span className={styles.nombreDato}>ATAQUE:</span> <span className={styles.dato}>{pokemon.ataque}</span></div>
                        <div className={styles.estadisticas}> <span className={styles.nombreDato}>DEFENSA:</span> <span className={styles.dato}>{pokemon.defensa}</span></div>
                        <div className={styles.estadisticas}> <span className={styles.nombreDato}>VELOCIDAD:</span> <span className={styles.dato}>{pokemon.velocidad}</span></div>
                        <div className={styles.estadisticas}> <span className={styles.nombreDato}>PESO:</span> <span className={styles.dato}>{pokemon.peso}</span></div>
                        <div className={styles.estadisticas}> <span className={styles.nombreDato}>ALTURA:</span> <span className={styles.dato}>{pokemon.altura}</span></div> 

                        <div className={styles.estadisticas2}> <span className={styles.nombreDato}>TIPOS:</span>{
                            pokemon.Tipos?.map((e) => 
                                <span className={styles.tipo}> {e.nombre.toUpperCase()} </span>
                            )
                            }
                        </div>
                    </div>
                </div>  

            </div>
        )
    }
}

export default Detail;
