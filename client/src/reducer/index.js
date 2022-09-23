const initialState =  {
    pokemones: [],
    allPokemones: [],
    tipos: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_POKEMONES':
            return {
                ...state,
                pokemones: action.payload,
                allPokemones: action.payload
            }

            case 'GET_TYPES':
                return {
                    ...state,
                    tipos: action.payload
                }



        
            default:
                return state;
    }

};

export default rootReducer;