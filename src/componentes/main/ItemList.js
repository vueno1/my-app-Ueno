import React from 'react'
import Item from './Item'

//ItemList recibe como prop → "propiedad"
function ItemList({propiedad}) {

    //lo muestro en consola para ver que se cargo la info q necesito
    console.log (propiedad)
    
    return (
        <>

            {/* uso metodo .map para recorrer mi array y divisar propiedades */}
            {propiedad.map ( (a) => (

                //le agrego una Key unica para idenfiticar cada articulo.
                //envio los props para el componente Item
                <Item key={a.id} articulo={a.articulo} precio={a.precio} />
                
            ))}
        
        </>
              
    )
}

export default ItemList
