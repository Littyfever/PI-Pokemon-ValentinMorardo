import React from "react";
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes } from '../../actions/index';
import CardFiltrado from "./cardFiltrado";

const Filtrado = () => {

    const dispatch = useDispatch();
    const allTypes = useSelector((state => state.tipos))

    useEffect (() =>  {
        dispatch(getTypes())
    }, [dispatch])


        return (
        <div> 
            <h4>FILTRADO:</h4>
            <CardFiltrado allTypes={allTypes}/>
        </div>
        )
}

export default Filtrado;

