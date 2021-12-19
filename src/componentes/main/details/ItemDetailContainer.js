import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'



function ItemDetailContainer() {  

    let [producto, setProducto] = useState ([])

    useEffect ( () => {

        fetch ('https://fakestoreapi.com/products/1')

            .then ( (res)=> res.json ())
            .then ((res) => {

                setTimeout (()=> {
                    setProducto (res)
                }, 2000)

            })

    }, [])

    return (

        <>
        
            {producto.length === 0? (
                <h3>{'⏳'} Cargando producto seleccionado....</h3>
            ): (

                <>
                    <ItemDetail producto= {producto}/>
                </>
            )}
        </>
        
    )
}

export default ItemDetailContainer
