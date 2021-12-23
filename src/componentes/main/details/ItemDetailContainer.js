import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//-----------------------------------------------------------------------------------

function ItemDetailContainer() { 
    
    let [item, setItem] = useState ()
    const {id} = useParams ()

    console.log ('id:' + id)

    useEffect(() => {   
                    
        fetch ('https://fakestoreapi.com/products')

        .then ( (res) => res.json ())
        .then ((res) => {
           setItem (res)
        })         

    }, [id])

    return (

        <>
            <ItemDetail producto={item} />        
        </>
        
    )
    
}

export default ItemDetailContainer
