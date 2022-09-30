import React from 'react';
import Card from './card'
import styles from './cards.module.css';


const cards = ({pokemones}) => {
    return (

        <div className={styles.cards}>
            {
            pokemones?.map((e) => <Card {...e} tipos={e.tipos? e.tipos : e.Tipos} />)
            }
        </div>
    )
}

export default cards;   