import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from '../../actions/index';
import {Link, useHistory} from 'react-router-dom'; 

const PokemonCreate = () => {

    const dispatch = useDispatch();
    const allTypes = useSelector((state => state.tipos));
    const history = useHistory();

    const [input, setInput] = useState({
        nombre: '',
        vida: '',
        ataque: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: '',
        tipos: [],
        imagen: ''
    })


    useEffect(() => {
        dispatch(getTypes());
    }, [])


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input);
    }


    function handleCheck(e) {
        if(e.target.checked) {
            setInput ({
                ...input,
                tipos: [...input.tipos, e.target.value]
            })
        }
        console.log(input);
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
        dispatch(postPokemon(input));
        alert('PERSONAJE CREADO!');
        console.log(input)
        setInput({
            nombre: '',
            vida: '',
            ataque: '',
            defensa: '',
            velocidad: '',
            altura: '',
            peso: '',
            tipos: [],
            imagen: ''
        });
        history.push('/home');
    }

    return (    
        <div>
            <Link to='/home'>
                <button>VOLVER</button>
            </Link>

            <h1>Crea tu pokemon!</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Nombre: </label>
                    <input type='text' placeholder='nombre...' value={input.nombre} name='nombre' onChange={(e) => handleChange(e)}></input>
                </div>
                <div> 
                    <label>Vida:  </label>
                    <input type='number' placeholder='vida...' value={input.vida} name='vida' onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                    <label>Daño de ataque: </label>
                    <input type='number' placeholder='ataque...' value={input.ataque} name='ataque' onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                    <label>Cantidad de defensa: </label>
                    <input type='number' placeholder='defensa...' value={input.defensa} name='defensa' onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                    <label>Velocidad: </label>
                    <input type='number' placeholder='velocidad...' value={input.velocidad} name='velocidad' onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                    <label>Altura: </label>
                    <input type='number' placeholder='altura...' value={input.altura} name='altura' onChange={(e) => handleChange(e)}></input>
                    <label> centimetros</label>
                </div>
                <div>
                    <label>Peso: </label>
                    <input type='number' placeholder='peso...' value={input.peso} name='peso' onChange={(e) => handleChange(e)}></input>
                    <label> kg</label>
                </div>
                <div>
                    <label>Tipo: </label>
                        {
                            allTypes?.map((e) => (
                                    <label>{e.nombre}<input type='checkbox' value={e.id} name='tipos' onChange={(e) => handleCheck(e)}></input></label>
                            ))
                        }
                </div>
                <div>
                    <label>URL Imagen:</label>
                    <input type='text' placeholder='url...' value={input.imagen} name='imagen' onChange={(e) => handleChange(e)}></input>
                </div>
                <button type='submit'>CREAR</button>
            </form> 
        </div>
    )
}

export default PokemonCreate;