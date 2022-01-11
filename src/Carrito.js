import React from 'react'
import { useContexto } from './componentes/context/mi contexto'

//------------------------------------------------------------------------------

function Carrito() {

    const {carrito, borrarDelCarrito, limpiarCarrito} = useContexto ()

    return (


        <div className='carrito'>

            {carrito.length > 0 ? (
                <ul>
                    {carrito.map ((producto, indice) => {
                        
                        return <>
                            <li key={indice}> 
                            producto seleccionado = {producto.title} - 
                            subtotal = ${producto.price*producto.cantidad} - 
                            Cantidad: {producto.cantidad} 
                            </li>
                        
                            <button onClick={borrarDelCarrito} >borrar producto del carrito </button>                
                        
                        </>

                                      
                        
                    })}

                    <button onClick={limpiarCarrito}> limpiar todo el carrito </button>
               

                </ul>

            ) : <p>No hay productos en el carrito</p> }

        </div>
    )
}

export default Carrito
