

//IMPORTS
import {useState, useEffect} from 'react'
import ItemList from './ItemList'

import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

/*///////FIREBASE = FIRESTORE////////// */
//traigo mi base de datos guardada en la constante "db"
import { db } from '../../firebase'

//me traigo la funcion getDocs que...
//...me ejecuta un Parametro de tipo query (consulta) y me resulta una Promesa de tipo QuerySnapShot
//si es una promesa, despues le voy a tener q poner un .then y .catch
import {collection, getDocs } from 'firebase/firestore'


//----------------------------------------------------------------------------------
function ItemListContainer({nombre}) {

    const {id} = useParams ()

    //defino variables cargando, comienza en estado true.
    const [loading, setLoading] = useState (true)

    //defino variables lista de productos, comienza en array vacio.
    const [lista, setLista] = useState ([])
 
    //--------------------------------------------------------------------
    //uso useEffect para esa funcion secundaria para obtener mis productos 
    useEffect ( () => {

        //creo una COLLECTION con nombre "productoCollection" para tener acceso a la coleccion dentro de mi "db"
        //los parametros son (firestore = db y path = nombre de la coleccion (en este caso le puse PRODUCTOS))
        const productoCollection = collection (db, "productos")
       

        if (id) {

            //uso la funcion getDOcs para hacer el pedido de lo que me trajo collection
            // en este caso getDOCS el pedido lo hace a "productoCollection"
            getDocs (productoCollection)
    
                //uso then porque me trae una promesa.
                .then ( (resultado) => {
    
                    //como resultado de getDocs, me trae las siguientes propiedades:
                    //docs - empty - metadata - query -size
                    //la que voy a necesitar es docs, quien es la que tiene el array.
                    const docs = resultado.docs
                    
                    //docs me trae como resultado un array con muchos de → "querysnapshot", y c/u de los 
                    //querysnapshot no tiene propiedades sino que tiene un metodo → data ()
    
                    //para obtener cada uno de esos querysnapshot, mapeo "docs" y uso el metodo data ()
                    //para obtener la data de cada querysnapshot, en este caso, mi propia base de datos.
                    const lista = docs.map ((doc)=> {
                        
                        //como el numero random de identificacion q me dio firestore, no lo tengo incluido
                        //lo voy a buscar mapeando mi array (doc.id)
                        //lo meto en una constante "id" para luego pushearlo en una nuevo objeto, dentro de mi array.
                        const id = doc.id
    
                        //mapeo docs y obtengo mi data, y lo meto en mi constante "data"
                        const data = doc.data ()
    
                        //creo un nuevo objeto, con el nuevo numero de identificacion creado x firestore.
                        const producto = {
                            identificacion: id, //nueva propiedad identificacion
                            ...data //copia de mi data
                        }

                        
                        //es obligatorio return en map
                        //retorno mi variable "producto" quien es la que tiene toda mi info.
                        return producto
                    })
                    
                    const listaFiltrada = lista.filter (producto => producto.categoria === id)
                    //pero x consola muestro LISTA, quien es la que alberga todo el formateo.
                    setLista (listaFiltrada)
                    setLoading (false)
                    console.log (lista)
    
                })
                
                .catch ( (error) =>{
                    console.log (error)
                })

        }   else {

        //uso la funcion getDOcs para hacer el pedido de lo que me trajo collection
        // en este caso getDOCS el pedido lo hace a "productoCollection"
        getDocs (productoCollection)

        //uso then porque me trae una promesa.
        .then ( (resultado) => {

            //como resultado de getDocs, me trae las siguientes propiedades:
            //docs - empty - metadata - query -size
            //la que voy a necesitar es docs, quien es la que tiene el array.
            const docs = resultado.docs
            
            //docs me trae como resultado un array con muchos de → "querysnapshot", y c/u de los 
            //querysnapshot no tiene propiedades sino que tiene un metodo → data ()

            //para obtener cada uno de esos querysnapshot, mapeo "docs" y uso el metodo data ()
            //para obtener la data de cada querysnapshot, en este caso, mi propia base de datos.
            const lista = docs.map ((doc)=> {
                
                //como el numero random de identificacion q me dio firestore, no lo tengo incluido
                //lo voy a buscar mapeando mi array (doc.id)
                //lo meto en una constante "id" para luego pushearlo en una nuevo objeto, dentro de mi array.
                const id = doc.id

                //mapeo docs y obtengo mi data, y lo meto en mi constante "data"
                const data = doc.data ()

                //creo un nuevo objeto, con el nuevo numero de identificacion creado x firestore.
                const producto = {
                    identificacion: id, //nueva propiedad identificacion
                    ...data //copia de mi data
                }


                //es obligatorio return en map
                //retorno mi variable "producto" quien es la que tiene toda mi info.
                return producto
            })

            //pero x consola muestro LISTA, quien es la que alberga todo el formateo.
            setLista (lista)
            setLoading (false)
            console.log (lista)

        })
        
        .catch ( (error) =>{
            console.log (error)
        })
        }     

         
    }, [id])
    
        
    return (
            
        <>

                {/* en el caso que la lista este vacia: dira que esta cargando */}
               
                {loading? ( 
                    <main className= "mainDetalle">
                        <BeatLoader/>
                    </main>
                ):(         

                    <>
                        <main className='main'>                            

                            <div className='styleContainer'>
                            {/*y si la lista esta completa, lo mando como prop a componente ItemList */}
                                <ItemList propiedad={lista} />
                            </div>                    

                        </main>
                    </>
                )              
                }

        </> 
    )
}

export default ItemListContainer
