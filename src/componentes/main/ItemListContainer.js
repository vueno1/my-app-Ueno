

//IMPORTS
import React from 'react' //REACT 
import {useState, useEffect} from 'react'
import ItemList from './ItemList'

import { useParams } from 'react-router-dom'


//----------------------------------------------------------------------------------
function ItemListContainer({nombre}) {

    const {id} = useParams ()

    //defino variables cargando, comienza en estado true.
    const [cargando, setCargando] = useState (true)

    //defino variables lista de productos, comienza en array vacio.
    const [lista, setLista] = useState ([])

    //uso useEffect para esa funcion secundaria para obtener mis productos 
    useEffect ( () => {

        //traigo mis productos con fetch 
        fetch ('https://fakestoreapi.com/products')
            
            //los parceo a JSON y espero.....
            .then ((res) => res.json ())

            //despues de la espera, obtengo mis resultados (res)
            .then ((res)=> {

                //seteo el estado de cargando a FALSE
                setCargando (false)

                //mi mista ya tiene sus productos
                setLista (res)
                console.log (res)
            })

    }, []) 



    return (

        <>
            <main className= "main">
                <h2>{nombre}</h2>

                {/* en el caso que la lista este vacia: dira que esta cargando */}
                {lista.length === 0? ( //si la cantidad de la lista es 0, entonces digo q esta cargando....
                    <h1> {cargando}Cargando...{'⏳'} </h1>

                ): ( //sino....muestro mis productos.
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
