

//IMPORTS
import React from 'react' //REACT 
import {useState, useEffect} from 'react'
import ItemList from './ItemList'


//----------------------------------------------------------------------------------
function ItemListContainer({nombre}) {
    
    //defino la url 
    const url = 'https://fakestoreapi.com/products'

    //defino hook useState "lista" y "funcion"
    const [lista, setLista] = useState ([])

    //defino la funcion fetchapi para traer la API.
    const fetchApi = async () => {

        //defino repuesta para funcion fetch ()
        const respuesta = await fetch (url)

        //defino respuestaJSON para traer esos datos y los parseo JSON.
        const respuestaJSON = await respuesta.json ()
        setLista (respuestaJSON)
        //los muestro en consola
        console.log (respuestaJSON)

    }

    // uso el hook useEffect para agarrarme del ciclo de vida del componente para hacer funcionar fetchApi ()
    useEffect ( () => {

        //le pongo un time de 3s para esperar que se cargue la peticion
        setTimeout ( () => {
            fetchApi ()
        },3000)
   
    }, [])

    return (

        <>

            <main className= "main">

                <h2>{nombre}</h2>

                {/* en el caso que la lista este vacia: dira que esta cargando */}
                {lista.length === 0? (
                    <h1> cargando...{'⏳'} </h1>

                ): (
                    <>

                    <div className='styleContainer'>
                    {/*y si la lista esta completa, lo mando como prop a componente ItemList */}
                        <ItemList propiedad={lista} />

                    </div>
                    
                    </>
                )              
                }

            </main>

        </> 
    )
}

export default ItemListContainer
