import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'

const productoSeleccionado = {
    id: 1,
    precio: 10,
    articulo: "apple"
}


function ItemDetailContainer() {

    let [producto, setProducto] = useState ([])

    useEffect ( () => {


        setTimeout (()=> {
            setProducto (productoSeleccionado)
        }, 2000)

    }, [])



    return (

        <>
        
            {producto.length === 0? (
                <h3>cargando producto detalle.....</h3>
            ): (

                <>
                    <ItemDetail producto= {producto}/>
                </>
            )}
        </>
        
    )
}

export default ItemDetailContainer
