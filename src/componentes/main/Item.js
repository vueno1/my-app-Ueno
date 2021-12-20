import React from 'react'


//recibo los props del padre → "articulo y precio"
function Item({articulo, precio, image}) {
    
    
    return (

        <>
        
            {/* y los muestro en el DOM */}
                <div className='styleItem'>
                    <div>
                        <img src={image} alt="" />                
                    </div>
                    <p> {articulo} </p>
                    <p> USD {precio} </p>
                    <button>+agregar</button>
                  
                </div>
        
        </>
    )
}

export default Item
