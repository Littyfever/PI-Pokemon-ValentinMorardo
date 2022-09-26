import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonDetail } from '../../actions/index';

const Detail = (props) => {

    const dispatch = useDispatch()
    const pokemon = useSelector ((state) => state.detail);
    const id = props.match.params.id;


    useEffect (() =>  {
        dispatch(pokemonDetail(id));
    }, [])

    console.log(pokemon)
return (
    <div> 
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

export default Detail;