import React from 'react';
import {Link} from 'react-router-dom'; 
import styles from '../Cards/card.module.css';

const card = ({id, nombre, tipos, ataque, imagen, vida}) => {


    let tiposCard1solo = [];
     if(tipos.length === 1) {
        tiposCard1solo.push(tipos[0]);
     }

     let tiposCard2tipos = [];
     if(tipos.length === 2) {
        tiposCard2tipos.push(tipos[0], tipos[1]);
     }

     let tiposCardMasDe3Tipos = [];
     if(tipos.length >= 3) {
        for(let i = 0; i < 2; i++){ 
            tiposCardMasDe3Tipos.push(tipos[i]);
        }
     }

    return (

        
        <div className={styles.container}>

            <Link to={`/pokemon/${id}`}>
                <h3>{nombre.toUpperCase()}</h3>
                <img src= {imagen} alt="img not found" width="200px" height ="250px" />
            { 
                tipos.length === 1?

                    <h5 className={styles.titulos}>TIPOS: {tiposCard1solo?.map((e) => {
                                return (e.nombre.toUpperCase())
                    })}</h5> 
                : tipos.length === 2?

                    <h5 className={styles.titulos}>TIPOS: {tiposCard2tipos?.map((e) => {
                        return (e.nombre.toUpperCase() + ' ')
                    })}</h5> 
                :

                    <h5 className={styles.titulos}>TIPOS: {tiposCardMasDe3Tipos?.map((e) => {
                        return (e.nombre.toUpperCase() + ' ')
                    })} Y MAS ...</h5> 
            }   
                <h5 className={styles.titulos}>ATAQUE: {ataque}</h5>
                <h5>VIDA: {vida}</h5>
            </Link>
        </div>
    )
}
export default card;