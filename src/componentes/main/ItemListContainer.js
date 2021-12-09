

//IMPORTS
import React from 'react' //REACT 
import ItemCount from './ItemCount'



//----------------------------------------------------------------------------------
function ItemListContainer({nombre}) {




    return (

        <>

            <main className= "main">

                <h2>{nombre}</h2>

                {/*/////////////////////////////////////
                IMPORTO COMPONENTE Y AGREGO PROP DE STOCK
                ///////////////////////////////////// */}
                <ItemCount stock= {5} />

            </main>

        </> 
    )
}

export default ItemListContainer
