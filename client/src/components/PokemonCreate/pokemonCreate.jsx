import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from '../../actions/index';
import {Link, useHistory} from 'react-router-dom'; 
import validacion from './validaciones';


const PokemonCreate = () => {

/*  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   */

    const dispatch = useDispatch();
    const allTypes = useSelector((state => state.tipos));

    useEffect(() => {
        dispatch(getTypes());
    }, [])

    const history = useHistory();
    const allPokemones = useSelector((state) => state.allPokemones);
    const [errores, setErrores] = useState({})
    const [input, setInput] = useState({})

/*  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   */

    function handleChange(e) { //handle de todos los inputs menos los checkbox
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setErrores(validacion({
            ...input,
            [e.target.name]: e.target.value 
        }))

        console.log(input);
    }

/*  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   */

    function handleCheckClick(e) { // handle de los inputs checkbox

        const inputState = input.tipos? input.tipos : [];


        if( !(inputState.includes(e.target.value)) ) {
            setInput ( {
                ...input,
                tipos: [...inputState, e.target.value]
            })
        } else {
            setInput({
                ...input,
                tipos:  inputState?.filter( (el) =>  el !== e.target.value )
            })
        }
    }
        
/*  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   */

    function handleSubmit(e) {
        e.preventDefault();
  
        let validarNombre = allPokemones.find((e) => e.nombre === input.nombre);

        if(validarNombre) {    
            alert('Ya existe un pokemon con ese nombre');

        } else if ( Object.values(input).length && Object.values(errores).length === 0 ) {

                dispatch(postPokemon(input));
                setInput({});

                alert('POKEMON CREADO!');
                history.push('/home');
            } else {
                alert('Alguno de los campos es incorrecto')
            }
    }
 /*  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   */


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
                    <label> *</label>
                    <span>{errores.nombre}</span>
                </div>
                <div> 
                    <label>Vida:  </label>
                    <input type='number' placeholder='vida...' value={input.vida} name='vida' onChange={(e) => handleChange(e)}></input>
                    <span>{errores.vida}</span>
                </div>
                <div>
                    <label>Daño de ataque: </label>
                    <input type='number' placeholder='ataque...' value={input.ataque} name='ataque' onChange={(e) => handleChange(e)}></input>
                    <span>{errores.ataque}</span>
                </div>
                <div>
                    <label>Cantidad de defensa: </label>
                    <input type='number' placeholder='defensa...' value={input.defensa} name='defensa' onChange={(e) => handleChange(e)}></input>
                    <span>{errores.defensa}</span>
                </div>
                <div>
                    <label>Velocidad: </label>
                    <input type='number' placeholder='velocidad...' value={input.velocidad} name='velocidad' onChange={(e) => handleChange(e)}></input>
                    <span>{errores.velocidad}</span>
                </div>
                <div>
                    <label>Altura: </label>
                    <input type='number' placeholder='altura...' value={input.altura} name='altura' onChange={(e) => handleChange(e)}></input>
                    <label> centimetros</label>
                    <span>{errores.altura}</span>
                </div>
                <div>
                    <label>Peso: </label>
                    <input type='number' placeholder='peso...' value={input.peso} name='peso' onChange={(e) => handleChange(e)}></input>
                    <label> kg</label>
                    <span>{errores.peso}</span>
                </div>
                <div>
                    <label>Tipo: </label>
                        {
                            allTypes?.map((e) => (
                                    <label> {e.nombre} 

                                        <input type='checkbox' value={e.id} name='tipos' /* onChange={(e) => handleCheck(e)} */ onClick={(e) => { handleCheckClick(e) }}></input>

                                    </label>
                            ))
                        }
                        <span>{errores.errorTipos}</span>
                </div>
                <div>
                    <label>URL Imagen:</label>
                    <input type='text' placeholder='url...' value={input.imagen} name='imagen' onChange={(e) => handleChange(e)}></input>
                    <span>{errores.imagen}</span>
                </div>
                <button type='submit'>CREAR</button>
            </form> 
        </div>
    )
}

export default PokemonCreate;