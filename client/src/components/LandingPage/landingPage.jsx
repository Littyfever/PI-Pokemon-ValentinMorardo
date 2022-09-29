import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LandingPage/landingPage.module.css'
import {pikachuGif, pokebolaGif} from '../IMAGENES/imagenes'


const landingPage = () => {
    return (

        <div className={styles.fondo}>
           


            <div className={styles.container}>
                    <h1 className={styles.titulo}>Bienvenido a la PokeWiki</h1>
                    <img src={pikachuGif} width='250' height='250'/>
            </div>


            <div className={styles.container}>
                <div className={styles.titulo}>
                    <h1 className={styles.titulo}>TOCA LA POKEBOLA!</h1>
                </div>
                <div className={styles.divImagen}>
                    <Link to='/home'>
                       <img src={pokebolaGif} />
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default landingPage;