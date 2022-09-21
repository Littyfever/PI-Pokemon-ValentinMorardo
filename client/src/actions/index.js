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



export default getPokemones;