const initialState =  {
    pokemones: [],
    allPokemones: [],
    tipos: [],
    detail: {},
    mensajeErr: {}
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {

case 'GET_POKEMONES':
    return {
        ...state,
        pokemones: action.payload, /* pokemones q renderizo en el home */
        allPokemones: action.payload /* pokemones q me traigo intactos de la db y api para trabajarlos aca */
    }


case 'ERROR_MENSAJE':
    return {
        ...state,
        mensajeErr: action.payload
    }


/*  ||||||||||||||||||||||||||||||||||||||||||||||||   */

case 'GET_TYPES':
    return {
        ...state,
        tipos: action.payload
    }

/*  ||||||||||||||||||||||||||||||||||||||||||||||||   */

case 'FILTER_POKEMONES':
    const filtros = Object.entries(action.payload);
    console.log(filtros)

    let filtrados = [...state.allPokemones].filter((pokemon) => {

        let origen = false;
        let tipo = false;

        filtros.forEach(([propiedad, valor]) => {
            if(propiedad === 'createdInDb') {
                if(valor === 'Existentes') {
                    origen = !pokemon[propiedad];
                }
                if(valor === 'Creados'){
                    origen = pokemon[propiedad];
                }
                if(valor === 'Todos'){
                    origen = true;  
                }
            }

            if(propiedad === 'Tipos') {
                tipo = pokemon[propiedad].find((tipo) => tipo.nombre === valor);

                if(valor === "Todos"){
                    tipo = true;
                }
            }
        })

        return origen && tipo;
    })

    if(action.payload.orden === 'A-Z') {
        filtrados = filtrados.sort((a,b) => {

            if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                return 1;
            }
            if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                return -1;
            }
            return 0;
        })}

    if(action.payload.orden === 'Z-A') {
        filtrados = filtrados.sort((a,b) => {
            if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                return 1;
            }
            if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                return -1;
            }
            return 0;
        })
    }

    if(action.payload.orden === '> Ataque') {
        filtrados = filtrados.sort((a,b) => {
            if(parseInt(a.ataque) < parseInt(b.ataque)) {
                return 1;
            }
            if(parseInt(a.ataque) > parseInt(b.ataque)) {
                return -1;
            }
            return 0;
        })
    }

    if(action.payload.orden === '< Ataque') {
        filtrados = filtrados.sort((a,b) => {
            if(parseInt(a.ataque) > parseInt(b.ataque)) {
                return 1;
            }
            if(parseInt(a.ataque) < parseInt(b.ataque)){
                return -1;
            }
            return 0;
        })
    }

    if(filtrados.length === 0) {
        return {
            ...state,
            mensajeErr: {
                status: 404,
            }
        }
    }
    return {
        ...state,
        pokemones: filtrados
    }
    
/*  ||||||||||||||||||||||||||||||||||||||||||||||||   */
case 'POST_POKEMON' :
    return {
        ...state,
    }

/*  ||||||||||||||||||||||||||||||||||||||||||||||||   */

case 'POKEMON_DETAIL':
    return {
        ...state,
        detail: action.payload
    }



default:
    return state;
   
    }
};

export default rootReducer;