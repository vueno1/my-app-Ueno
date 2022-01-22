import React from 'react'
import Item from './Item'

function ItemList({propiedad}) {
    
    return (
        <>
            {propiedad.map ( (item, index ) => (
                <Item key={index} item={item} />                
            ))}        
        </>              
    )
}

export default ItemList
