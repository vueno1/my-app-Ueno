import React from 'react'
import { useContexto } from './componentes/context/mi contexto'

//------------------------------------------------------------------------------

function Carrito() {

    const {carrito, borrarDelCarrito, limpiarCarrito} = useContexto ()
    console.log (carrito)

    return (


        <div className='carrito'>

            soy carrito 

            {carrito.length > 0 ? (
                <ul>
                    {carrito.map ((producto, indice) => {
                        
                        return <li key={indice}> 
                        producto seleccionado = {producto.title} - 
                        subtotal = ${producto.price*producto.cantidad} - 
                        Cantidad: {producto.cantidad} 
                        </li>
                    })}

                </ul>

            ) : <p>No hay productos en el carrito</p> }

        </div>
    )
}

export default Carrito
