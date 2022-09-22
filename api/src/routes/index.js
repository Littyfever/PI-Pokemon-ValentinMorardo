const { Router } = require('express');
const axios = require("axios");
const { Pokemon, Tipo } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const getApiInfo = async () => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40';
        let allPokemones = await axios.get(url);
        allPokemones = allPokemones.data.results

        let pokemonInfo = await Promise.all(allPokemones.map(async el => {
            let pokemonDetail = await axios.get(el.url);
            return {
                id: pokemonDetail.data.id,
                nombre: pokemonDetail.data.name,

                tipos: pokemonDetail.data.types.map(el => {
                    return ({
                        nombre: el.type.name
                    })
                }),
                vida: pokemonDetail.data.stats[0].base_stat,
                ataque: pokemonDetail.data.stats[1].base_stat,
                defensa: pokemonDetail.data.stats[2].base_stat,
                velocidad: pokemonDetail.data.stats[3].base_stat,
                altura: pokemonDetail.data.height,
                peso: pokemonDetail.data.weight,
                imagen: pokemonDetail.data.sprites.other.home.front_default
            }
        }))
        return pokemonInfo;
    
    } catch (error) {
        console.log(error);
    }
}

const getDBInfo = async () => {
    return await Pokemon.findAll({
        include: {
            model: Tipo,
            attributes: ['nombre', 'id'],
            trough: {
                attributes: [],
            },
        }
    })
}

const getAllPokemones = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDBInfo();
    const infoTotal = apiInfo.concat(dbInfo)
    return infoTotal;
}

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", async (req, res, next) =>{
    const name = req.query.name;
    let todosLosPokemones = await getAllPokemones();
    if(name) {
        let pokemonName = todosLosPokemones.filter(el => el.Nombre.toLowerCase().includes(name.toLowerCase()))
        if(pokemonName.length){
            res.status(200).json(pokemonName);
        } else {
            next({status: 404, message: 'no existe ese pokemon'});
        }
    } else {
        res.status(200).json(todosLosPokemones);
    }
})

router.get("/types", async (req, res) => {
    const url = 'https://pokeapi.co/api/v2/type';
    let tiposAPI = await axios.get(url);
    res.status(200).send(tiposAPI.data.results.map(el => {
        return ({
            nombre: el.name
        })
    }))
})
router.get('/pokemons/:idPokemon', async (req, res) => {
    let idPokemon = parseInt(req.params.idPokemon);

    let todosLosPokemones = await getAllPokemones();
    if(idPokemon) {
        let pokemon = todosLosPokemones.find(el => el.ID === idPokemon)
        if(pokemon) {
            res.status(200).send(pokemon);
        } else{
            next({status: 404, message: 'no existe pokemon con ese ID'});
        }
    }
})


router.post('/pokemons', async (req, res, next) => {
    try {
    const {
        nombre,
        tipos,
        vida,
        ataque,
        defensa,
        velocidad,
        altura,
        peso,
        imagen
    } = req.body

    const [pokemon, created] = await Pokemon.findOrCreate({
        where: {nombre},
        defaults: {
            nombre,
            vida,
            ataque,
            defensa,
            velocidad,
            altura,
            peso,
            imagen
        }
    })
    if(created) {
        pokemon.setTipos(tipos)
    }
    res.status(200).json({created, pokemon})
    } 
    catch (error) {
        next(error);
    }
})

module.exports = router;