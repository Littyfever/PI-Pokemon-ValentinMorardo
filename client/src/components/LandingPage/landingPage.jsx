import React from 'react';
import { Link } from 'react-router-dom';


const landingPage = () => {
    return (
        <div className='landing'>

            <h1>Bienvenido a la pagina de pokemon</h1>
                
            <Link to='/home'>
                <button>HOME</button>
            </Link>

        </div>
    )
}

export default landingPage;