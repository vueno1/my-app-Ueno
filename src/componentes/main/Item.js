import React from 'react'

//recibo los props del padre → "articulo y precio"
function Item({articulo, precio}) {
    
    
    return (

        <>
        
            {/* y los muestro en el DOM */}
            <div className='styleItem'>

                <h3> {articulo} </h3>
                <p> USD {precio} </p>
                
            </div>
        
        </>
    )
}

export default Item
