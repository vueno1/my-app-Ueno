import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BeatLoader } from 'react-spinners'
import { db } from '../../../firebase' // importo base de datos 
import { collection, doc, getDoc, query, getDocs, where} from 'firebase/firestore' //importo las funciones que voy a necesitar.

//collection para traerme la coleccion 

//getDoc () => (01 parametro de tipo "documentReference") → resultado una promesa de tipo "DocumentSnapshot"
//para obtener ese tipo de parametro necesito la funcion .doc ()

//.doc () => (02 parametros, uno es la base de datos (db) y la otra es el nombre path "producto"), pero si miras el 
//documento en firebase, podras ver que como parametro se puede pedir de varias maneras.
//por ejemplo: parametro → la coleccion + id
//la coleccion viene de "productoscollection"
//y el id de "useparams"

//-----------------------------------------------------------------------------------

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

                    console.log (`esto es un querydocumentsnapshot =`, docs)    
                    //como saco la info de docs, sin que sea una array?????
                    //por ejemplo =>const id = producto[0].id
                    
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

        } else {
            console.log ("no hace nada")
        }

       
    }, [id])

    return (

        <>        
            <main className= "mainDetalle">
                {                    
                    loading? (<BeatLoader/>) : <ItemDetail producto={item} />     

                }
            </main>
        
        </>

    )
    
}

export default ItemDetailContainer
