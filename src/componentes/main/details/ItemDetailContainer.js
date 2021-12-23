import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//-----------------------------------------------------------------------------------

function ItemDetailContainer() { 
    
    let [item, setItem] = useState ({})
    const {id} = useParams ()

    useEffect(() => {   
                    
        fetch ('https://fakestoreapi.com/products/' + id)

        .then ( (res) => res.json ())
        .then ((res) => {

            setTimeout(() => {

                setItem (res)     
                
            },  2000);
          
        })         

    }, [id])

    return (

        <>

            {
                !item ? <h1>cargando...</h1> : <ItemDetail producto={item} />        
            }
        
        </>
        
    )
    
}

export default ItemDetailContainer
