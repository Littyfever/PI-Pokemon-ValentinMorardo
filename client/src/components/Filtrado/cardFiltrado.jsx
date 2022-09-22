import React from "react";

const CardFiltrado = ({allTypes}) => {

    return (
        <>
            <div className="cardFiltradoTipos">
                <h5>Filtrar por tipos:</h5>
                { allTypes.map((e) => (            
                    <button>{e.nombre}</button>
                ))}
            </div>

            <div>
                 <h5>Filtrar por creacion:</h5>
                 <button>Todos</button>
                 <button>Creados</button>
                 <button>Existentes</button>
            </div>
        </> 

    )
}
export default CardFiltrado;

