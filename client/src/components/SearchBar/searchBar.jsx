import React from "react";
import { useState} from 'react';
import { useDispatch} from 'react-redux';

import { getNamePokemon } from "../../actions/index";

const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')

    function handleInput(e) {
        e.preventDefault();
        setName(e.target.value);

    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNamePokemon(name));

    }

    return (
        <div>

            <input type='text' placeholder="Nombre del pokemon..." onChange={(e) => handleInput(e)}></input>
            <button type='submit' onClick={(e) => handleSubmit(e)}>BUSCAR</button>

        </div>
    )

}


export default SearchBar;