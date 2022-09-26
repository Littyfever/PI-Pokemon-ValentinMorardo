import React from 'react';
import Card from './card'


const cards = ({pokemones}) => {
    return (

    
        <div>
            {
            pokemones?.map((e) => <Card {...e} tipos={e.tipos? e.tipos : e.Tipos} />)
            }
        </div>
    )
}

export default cards;   