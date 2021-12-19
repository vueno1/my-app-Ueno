import React from 'react'
import ItemCount from '../ItemCount'

function ItemDetail({producto}) {

    console.log (producto)

     //funcion para mostrar cantidad de productos.
     const onAdd = (cantidad) => {
        console.log ( `el carrito tiene ${cantidad} productos` )    
    }

    return (    

        <>

            <div className='styleItem' >

                <p>PRODUCTO: {producto.id} </p>
                <h3>{producto.title} </h3>
                <p> {producto.category} </p>

                <div>
                    <img src={producto.image} alt="" />
                </div>              

                <div>
                    <ItemCount stock= {5} initial={0} onAdd={onAdd} />                        
                </div>

            </div>
        
        </>

    )
}

export default ItemDetail
