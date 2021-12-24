import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//-----------------------------------------------------------------------------------

function ItemDetailContainer() { 
    
    let [item, setItem] = useState ({})
    const [loading, setLoading] = useState (true)
    
    const {id} = useParams ()

    useEffect(() => {   
                    
        fetch ('https://fakestoreapi.com/products/' + id)

        .then ( (res) => res.json ())
        .then ((res) => {

            setTimeout(() => {

                setItem (res)  
                setLoading (false)   
                
            },  2000);
          
        })         

    }, [id])

    return (

        loading? <h1 className='itemDetailContainerH1'> Cargando...</h1> : <ItemDetail producto={item} />      
        
    )
    
}

export default ItemDetailContainer
