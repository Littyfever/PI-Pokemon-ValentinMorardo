import React from "react";
import {cargandoGif} from '../IMAGENES/imagenes'
import styles from './loading.module.css'


const Loading = () => {
    return(
        <div >
            <img src={cargandoGif} className={styles.gif} alt="no encontre la imagen" ></img>
         </div>
    )
}
export default Loading;