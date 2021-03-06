import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { db } from '../../firebase'
import {collection, getDocs, query, where } from 'firebase/firestore'

function ItemListContainer({nombre}) {

    const {id} = useParams ()
    const [loading, setLoading] = useState (true)
    const [lista, setLista] = useState ([])
  
    useEffect (() => {

        //traigo mi colleccion 
        const productoCollection = collection (db, "productos")

        if (id) {

            //id 1 → todos los productos 
            //id 2 → electronicos
            //id 3 → jewelery 
            //id 4 → mans
            //id 5 → womans

            //hago la consulta dentro de mi coleccion 
            const consulta = query (
                productoCollection, 
                //donde la categoria coincide con mi id 
                where ("categoria", "==", id)
            )

            getDocs (consulta)            
                .then ((resultado)=>{

                    const docs = resultado.docs //me trae una array con la info
                    
                    //esa array la mapeo para obtener la data
                    const lista = docs.map ((doc) =>{
                        
                        const id = doc.id
                        const data = doc.data ()

                        const producto = {
                            id:id,
                            ...data
                        }

                        return producto
                    })

                    setLista (lista) 
                    setLoading (false)
                })

            .catch ((error) =>{
                console.log (error)
            })           
        }   
        
        else {

            getDocs (productoCollection)

            .then ( (resultado) => {
                const docs = resultado.docs

                const lista = docs.map ((doc)=> {
                    const id = doc.id
                    const data = doc.data ()
                    const producto = {
                        identificacion: id, 
                        ...data 
                    }
                    return producto
                })

                setLista (lista)
                setLoading (false)
            })
            
            .catch ( (error) =>{
                console.log (error)
            })
        } 

    }, [id])
    
        
    return (         
        <>               
        {loading? ( 
            <main className= "mainDetalle">
                <BeatLoader/>
            </main>
        ):(                    
            <main className='main'>  
                <h1 className='tiendaOnlineClass'>{nombre}</h1>   
                <h3 className='categorias'>{id}</h3>                       
                <div className='styleContainer'>
                    <ItemList propiedad={lista}/>
                </div>                    
            </main>
        )              
        }

        </> 
    )
}

export default ItemListContainer
