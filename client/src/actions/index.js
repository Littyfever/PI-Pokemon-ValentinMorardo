import axios from 'axios';

const getPokemones = (payload) => {

    return async function (dispatch) {
        try {
            var allPokemones = await axios.get('http://localhost:3001/pokemons', {
            params: {
                name: payload
            }
        });
        return dispatch({
            type: 'GET_POKEMONES',
            payload: allPokemones.data
        })

        } catch (error) {
            return dispatch({
                type: 'ERROR_MENSAJE',
                payload: error.response
            })
        }

    }   
}



 /*  ||||||||||||||||||||||||||||||||||||||||||||||||   */

const getTypes = () => {
    return async function (dispatch) {
        var allTypes = await axios.get('http://localhost:3001/types', {
            
        });
        return dispatch({
            type: 'GET_TYPES',
            payload: allTypes.data
        })
    }
}

/*  ||||||||||||||||||||||||||||||||||||||||||||||||   */

const filterPokemones = (payload) => {
    return {
        type: 'FILTER_POKEMONES',
        payload: payload
    }
}


/*  ||||||||||||||||||||||||||||||||||||||||||||||||   */

const postPokemon = (payload) => {
    return async function(dispatch) {
        const response = await axios.post('http://localhost:3001/pokemons', payload);
        return response; 
    }
}

/*  ||||||||||||||||||||||||||||||||||||||||||||||||   */

const pokemonDetail = (payload) => {
    
    return async function (dispatch) {
        var pokemon = await axios.get(`http://localhost:3001/pokemons/${payload}`);

        return dispatch({
            type: 'POKEMON_DETAIL',
            payload: pokemon.data
        })
    }
}



export  {getPokemones, getTypes, filterPokemones, postPokemon, pokemonDetail};