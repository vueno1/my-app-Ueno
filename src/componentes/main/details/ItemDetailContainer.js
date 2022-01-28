import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BeatLoader } from 'react-spinners'
import { db } from '../../../firebase'  
import { collection, query, getDocs, where} from 'firebase/firestore' 

function ItemDetailContainer() { 
    
    let [item, setItem] = useState ({})
    const [loading, setLoading] = useState (true)    
    const {id} = useParams ()
    
    useEffect(() => {   

        const productoCollection = collection (db, "productos")

        if (id) {
            const consulta = query (productoCollection, where ("id", "==", Number(id)))

            getDocs (consulta)
            
                .then ((resultado)=>{
                    const docs = resultado.docs
                    
                    const lista = docs.map ((doc) =>{
                        const id = doc.id
                        const data = doc.data ()

                        const producto = {
                            id:id,
                            ...data
                        }
                        return producto
                    })
                    setItem (lista)
                    setLoading (false)
                })

            .catch ((error) =>{
                console.log (error)
            })

        } 

    }, [id])

    return (
           
        <main>
            {                    
                loading? (<BeatLoader/>) : <ItemDetail producto={item} />     
            }
        </main>        
    
    )    
}

export default ItemDetailContainer
