import React from 'react'
import {Link} from "react-router-dom"

//recibo los props del padre → "articulo y precio"
function Item({item}) {
    
    
    return (

        <>
        
            {/* y los muestro en el DOM */}
                <div className='styleItem'>
                    <div>
                        <img src={item.image} alt="" />                
                    </div>
                    <p> {item.title} </p>
                    <p> USD {item.price} </p>

                    <Link to={`/producto/${item.id}`}>agregar</Link>                
                  
                </div>
        
        </>
    )
}

export default Item
