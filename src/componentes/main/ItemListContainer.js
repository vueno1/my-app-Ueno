

//IMPORTS
import React from 'react' //REACT 
import ItemCount from './ItemCount'




//----------------------------------------------------------------------------------
function ItemListContainer({nombre}) {

    const onAdd = () => {

        console.log ( `el carrito tiene productos`)
    
    }

    return (

        <>

            <main className= "main">

                <h2>{nombre}</h2>

                {/*/////////////////////////////////////
                IMPORTO COMPONENTE Y AGREGO PROP DE STOCK
                ///////////////////////////////////// */}
                <ItemCount stock= {5} initial={0} onAdd={onAdd} />

            </main>

        </> 
    )
}

export default ItemListContainer
