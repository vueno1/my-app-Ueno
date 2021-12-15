import React from 'react'

function ItemDetail({producto}) {

    return (


    

        <>

            <div className='styleItem' >
                <h3>{producto.articulo} </h3>
                <p> USD {producto.precio} </p>
            </div>
        
        </>


    )
}

export default ItemDetail
