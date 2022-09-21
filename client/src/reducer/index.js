const initialState =  {
    pokemones: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_POKEMONES':
            return {
                ...state,
                pokemones: action.payload
            }
            
            default:
                return state;
             
    }

};

export default rootReducer;