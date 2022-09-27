import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LandingPage/landingPage.module.css'
import {pikachuGif} from '../IMAGENES/imagenes'


const landingPage = () => {
    return (

        <div className={styles.fondo}>
           


            <div className={styles.container1}>
                <div className={styles.titulo}>
                    <h1 className={styles.titulo}>Bienvenido a la PokeWiki</h1>
                </div>
                <div className={styles.pikachu}>
                    <img src={pikachuGif} width='250' height='250'/>
                </div>
            </div>


            <div className={styles.container2}>
                <div className={styles.titulo}>
                    <h1 className={styles.tituloHome}>TOCA LA POKEBOLA!</h1>
                </div>
                <div className={styles.divImagen}>
                    <Link to='/home'>
                        <button className={styles.button} ><div className={styles.pokebola} /> </button>
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default landingPage;