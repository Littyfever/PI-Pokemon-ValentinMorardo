import React from "react";
import {cargandoGif} from '../IMAGENES/imagenes'
import styles from '../Loading/loading.module.css'


const Loading = () => {
    return(
        
            <div className={styles.fondo}>

            

                <div className={styles.container}> 
                    <img src={cargandoGif} className={styles.gif} alt="no encontre la imagen" ></img>
                    <h2 id={styles.cargando}>CARGANDO...</h2>
                </div>

            
            
            </div>

    )
}
export default Loading;