import axios from 'axios';

const getPokemones = () => {
    return async function (dispatch) {
        var allPokemones = await axios.get('http://localhost:3001/pokemons', {
            
        });
        return dispatch({
            type: 'GET_POKEMONES',
            payload: allPokemones.data
        })
    }
}

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

const filterPokemones = (payload) => {
    return {
        type: 'FILTER_POKEMONES',
        payload: payload
    }
}

const getNamePokemon = (payload) => {
    return async function (dispatch) {
        try {
            var name = await axios.get(`http://localhost:3001/pokemons?name=${payload}`);
            return dispatch({

                type: 'GET_NAME_POKEMON',
                payload: name.data
            })

        } catch(error) {   
            console.log(error);
        }

    }

}



export  {getPokemones, getTypes, filterPokemones, getNamePokemon};