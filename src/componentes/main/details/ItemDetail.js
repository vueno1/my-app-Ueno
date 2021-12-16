import React from 'react'
import ItemCount from '../ItemCount'

function ItemDetail({producto}) {

     //funcion para mostrar cantidad de productos.
     const onAdd = (cantidad) => {
        console.log ( `el carrito tiene ${cantidad} productos` )    
    }

    return (    

        <>

            <div className='styleItem' >
                <h3>{producto.articulo} </h3>
                <p> USD {producto.precio} </p>

                <ItemCount stock= {5} initial={0} onAdd={onAdd} />

            </div>
        
        </>

    )
}

export default ItemDetail
