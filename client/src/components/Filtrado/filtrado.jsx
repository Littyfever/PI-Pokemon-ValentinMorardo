import React from "react";
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, filterPokemones } from '../../actions/index';

import CardFiltrado from "./cardFiltrado";
const Filtrado = () => {

    const dispatch = useDispatch();

    const creados = [{nombre: 'Creados'}, {nombre: 'Existentes'}]
    const order = [{nombre: 'A-Z'}, {nombre: 'Z-A'}, {nombre: '< Ataque'}, {nombre: '> Ataque'}]

    const allTypes = useSelector((state => state.tipos))

    const [filtros, setFiltros] = useState({
        createdInDb: 'Todos',
        Tipos: 'Todos',
    });
    
    function handlerFilter(propiedad) {
        return (valor) => {
            setFiltros({...filtros, [propiedad]: valor})
            dispatch(filterPokemones({...filtros, [propiedad]: valor}))
        }
    }

    useEffect (() =>  {
        dispatch(getTypes())
    }, [dispatch])

        return (
        <div> 
            <h4>FILTRADO:</h4>
            <CardFiltrado options = {allTypes} titulo = 'Tipos' handlerFilter={handlerFilter('Tipos')} /> {/* TIPOS */}
            <CardFiltrado options = {creados} titulo = 'Origen' handlerFilter={handlerFilter('createdInDb')} />
            <CardFiltrado options = {order} titulo = 'Orden' handlerFilter={handlerFilter('orden')} />
        </div>
        )
}

export default Filtrado;

