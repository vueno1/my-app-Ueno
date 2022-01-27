import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { db } from '../../firebase'
import {collection, getDocs } from 'firebase/firestore'

function ItemListContainer({nombre}) {

    const {id} = useParams ()
    const [loading, setLoading] = useState (true)
    const [lista, setLista] = useState ([])
  
    useEffect ( () => {

        const productoCollection = collection (db, "productos")

        if (id) {

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
                    
                    const listaFiltrada = lista.filter (producto => producto.categoria === id)
                    setLista (listaFiltrada)
                    setLoading (false)    
                })
                
                .catch ( (error) =>{
                    console.log (error)
                })

        }   else {
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
