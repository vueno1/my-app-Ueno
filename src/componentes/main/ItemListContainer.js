

//IMPORTS
import React from 'react' //REACT 
import ItemCount from './ItemCount'
import {useState, useEffect} from 'react'
import ItemList from './ItemList'

//array "productos" con sus respectivos objetos 
const productos = [

    {id: 1, precio: 10, articulo: "apple"},
    {id: 2, precio: 30, articulo: "sony"},
    {id: 3, precio: 20, articulo: "samsung"},
    {id: 4, precio: 40, articulo: "motorola"}

]


//----------------------------------------------------------------------------------
function ItemListContainer({nombre}) {

    //funcion para mostrar cantidad de productos.
    const onAdd = (cantidad) => {
        console.log ( `el carrito tiene ${cantidad} productos` )    
    }

    //variable "lista" la cual comienza como un array y con hook useState cambiara su estado
    let [lista, setLista] = useState ([])
    
    //efecto secundario mientras se carga la pagina...
    useEffect(() => {

        //los productos apareceran en 3 segundos y setea la lista con nuevo contenido
        setTimeout ( () => {
            setLista (productos)  
        }, 3000)      

    }, [])


    return (

        <>

            <main className= "main">

                <h2>{nombre}</h2>

                {/*/////////////////////////////////////
                IMPORTO COMPONENTE Y AGREGO PROP DE STOCK
                ///////////////////////////////////// */}
                <ItemCount stock= {5} initial={0} onAdd={onAdd} />

                {/* en el caso que la lista este vacia: dira que esta cargando */}
                {lista.length === 0? (
                    <h1> cargando...</h1>

                ): (
                    <>
                    {/*y si la lista esta completa, lo mando como prop a componente ItemList */}
                        <ItemList propiedad={lista} />
                    
                    </>
                )              
                }


            </main>

        </> 
    )
}

export default ItemListContainer
