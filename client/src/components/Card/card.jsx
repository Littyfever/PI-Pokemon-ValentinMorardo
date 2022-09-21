import React from 'react';
import {Link} from 'react-router-dom'; 

const card = ({id, nombre, tipos, ataque, imagen}) => {

    return (
        
        <div>
            <Link to={`/pokemon/${id}`}>
                <h3>{nombre}</h3>
                <img src= {imagen} alt="img not found" width="200px" height ="250px" />
            </Link>

            <h5>TIPOS: {tipos?.map((e) => {return (e.nombre + ' ')})  } </h5>
            <h5>ATAQUE: {ataque}</h5>
            
        </div>
    )
}
export default card;