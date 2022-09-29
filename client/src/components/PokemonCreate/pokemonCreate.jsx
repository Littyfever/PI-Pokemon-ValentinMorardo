import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from '../../actions/index';
import {Link, useHistory} from 'react-router-dom'; 
import validacion from './validaciones';
import styles from '../PokemonCreate/pokemonCreate.module.css'


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

    function handleCheckClick(e) { // handle de los checkbox
        
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

        console.log(input);
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
        <div className={styles.fondo}>

            <div className={styles.container}>

                <Link to='/home'>
                    <button className={styles.volver}>VOLVER</button>
                </Link>

                <h1>CREA TU POKEMON!</h1>

                <form>
                    <div className={styles.campo}>
                        
                        <label className={styles.label}>NOMBRE: </label>
                        <input className={styles.input} type='text' placeholder='nombre...' value={input.nombre} name='nombre' onChange={(e) => handleChange(e)}></input>
                        <span className={styles.errores}> {errores.nombre}</span>
                        
                    </div>

                    <div className={styles.campo}> 
                        <label className={styles.label}>VIDA: </label>
                        <input className={styles.input} type='number' placeholder='vida...' value={input.vida} name='vida' onChange={(e) => handleChange(e)}></input>
                        <span className={styles.errores}>{errores.vida}</span>
                    </div>

                    <div className={styles.campo}>
                        <label className={styles.label}>DAÑO DE ATAQUE: </label>
                        <input className={styles.input} type='number' placeholder='ataque...' value={input.ataque} name='ataque' onChange={(e) => handleChange(e)}></input>
                        <span className={styles.errores}>{errores.ataque}</span>
                    </div>

                    <div className={styles.campo}>
                        <label className={styles.label}>CANTIDAD DE DEFENSA: </label>
                        <input className={styles.input} type='number' placeholder='defensa...' value={input.defensa} name='defensa' onChange={(e) => handleChange(e)}></input>
                        <span className={styles.errores}>{errores.defensa}</span>
                    </div>

                    <div className={styles.campo}>
                        <label className={styles.label}>VELOCIDAD: </label>
                        <input className={styles.input} type='number' placeholder='velocidad...' value={input.velocidad} name='velocidad' onChange={(e) => handleChange(e)}></input>
                        <span className={styles.errores}>{errores.velocidad}</span>
                    </div>

                    <div className={styles.campo}>
                        <label className={styles.label}>ALTURA: </label>
                        <input className={styles.input} type='number' placeholder='altura...' value={input.altura} name='altura' onChange={(e) => handleChange(e)}></input>
                        <span className={styles.errores}>{errores.altura}</span>
                    </div>

                    <div className={styles.campo}> 
                        <label className={styles.label}>PESO: </label>
                        <input className={styles.input} type='number' placeholder='peso...' value={input.peso} name='peso' onChange={(e) => handleChange(e)}></input>
                        <span className={styles.errores}> {errores.peso}</span>
                    </div>


                    <div className={styles.campo}>
                        <label className={styles.label}>URL Imagen:</label>
                        <input  className={styles.input} type='text' placeholder='url...' value={input.imagen} name='imagen' onChange={(e) => handleChange(e)}></input>
                        <span className={styles.errores}> {errores.imagen}</span>
                    </div>
                </form> 

                <div className={styles.campoTipos}>
                        <label className={styles.label}>TIPO: </label>
                           
                           <div className={styles.tipos}>
                            {
                                allTypes?.map((e) => (
                                        <label className={styles.labelCheck}> {e.nombre.toUpperCase()} 
                                            <input type='checkbox' value={e.id} name='tipos' className={styles.check}/* onChange={(e) => handleCheck(e)} */ onClick={(e) => { handleCheckClick(e) }}></input>
                                        </label> 
                                ))
                            }
                            </div>
                    </div>

                    <button  onClick={(e) => handleSubmit(e)} className={styles.crear}>CREAR</button>
                </div>  

        </div>
    )
}

export default PokemonCreate;