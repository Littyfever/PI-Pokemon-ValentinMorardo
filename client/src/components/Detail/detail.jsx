import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonDetail } from '../../actions/index';
import {Link} from 'react-router-dom'; 


const Detail = (props) => {

    const dispatch = useDispatch()

    const pokemon = useSelector ((state) => state.detail);
    const id = props.match.params.id;

    useEffect (() =>  {
        dispatch(pokemonDetail(id));
    }, [])

    
    if( id > 40 && id.length !== 36) {
        return (
            <div>
                    <div>
                        <Link to='/home'>
                            <button>volver</button>
                        </Link>
                            
                        <div>
                            <h2>No existe pokemon con ese ID</h2>
                        </div>
                    </div>
                    

            </div>
        )
        
    } else {
        return (

 

                <div> 
                    <Link to='/home'>
                        <button>volver</button>
                    </Link>
                    <div> 
                        <h1>{pokemon.nombre}</h1>
                    </div>
                    <div>
                        <img src={pokemon.imagen} />
                    </div>
                    <div>
                        <p>{pokemon.ataque}</p>
                        <p>{pokemon.defensa}</p>
                        <p>{pokemon.velocidad}</p>
                        <p>{pokemon.vida}</p>
                        <p>{pokemon.peso}</p>
                        <p>{pokemon.altura}</p> 
                        {
                            pokemon.Tipos?.map((e) => 
                                <p>{e.nombre}</p>
                            )
                        } 
                    </div>
                </div>

            )

    }




}

export default Detail;
