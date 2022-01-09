

//IMPORTS
import React from 'react' //REACT 
import {useState, useEffect} from 'react'
import ItemList from './ItemList'

import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'


//----------------------------------------------------------------------------------
function ItemListContainer({nombre}) {

    const {id} = useParams ()

    //defino variables cargando, comienza en estado true.
    const [loading, setLoading] = useState (true)

    //defino variables lista de productos, comienza en array vacio.
    const [lista, setLista] = useState ([])
 

    //uso useEffect para esa funcion secundaria para obtener mis productos 
    useEffect ( () => {

        if (id) {
            
            //traigo mis productos con fetch 
            fetch ('https://fakestoreapi.com/products')
                
                //los parceo a JSON y espero.....
                .then ((res) => res.json ())
    
                //despues de la espera, obtengo mis resultados (res)
                .then ((res)=> {                
    
                    //seteo el estado de cargando a FALSE
                    setLoading (false)    

                    const listaFiltrada = res.filter (producto => producto.category === id)
                    setLista (listaFiltrada)

                    console.log (lista)
    
                }
                )

        } else {

            //traigo mis productos con fetch 
            fetch ('https://fakestoreapi.com/products')
                
                //los parceo a JSON y espero.....
                .then ((res) => res.json ())
    
                //despues de la espera, obtengo mis resultados (res)
                .then ((res)=> {                
    
                    //seteo el estado de cargando a FALSE
                    setLoading (false)
    
                    //mi mista ya tiene sus productos
                    setLista (res)   

                    console.log (lista)
    
                }
                )
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
