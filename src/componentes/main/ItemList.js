import React from 'react'
import Item from './Item'

//--------------------------------------------------------------------------------------------

//ItemList recibe como prop → "propiedad"
function ItemList({propiedad}) {

    
    return (
        <>

            {/* uso metodo .map para recorrer mi array y divisar propiedades */}
            {propiedad.map ( (item, index ) => (

                //le agrego una Key unica para idenfiticar cada articulo.
                //envio los props para el componente Item
                <Item key={index} item={item} />
                
            ))}
        
        </>
              
    )
}

export default ItemList
