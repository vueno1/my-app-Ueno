import React from 'react'
import { useContexto } from './componentes/context/mi contexto'

//------------------------------------------------------------------------------

function Carrito() {

    const {carrito, borrarDelCarrito, limpiarCarrito} = useContexto ()

    console.log (carrito)

    return (


        <div className='carrito'>

            {carrito.length > 0 ? (
                <ul>
                    {carrito.map ((producto, indice) => {
                        
                        return <li key={indice}>
                            producto seleccionado = {producto.title} -
                            subtotal = ${producto.price*producto.cantidad} -
                            Cantidad: {producto.cantidad} 
                            <button onClick={() => borrarDelCarrito (producto.id, producto.cantidad)} >eliminar item</button></li>                                                
                        
                    })}

                    <button onClick={limpiarCarrito}> limpiar carrito </button>
               

                </ul>

            ) : <p>No hay productos en el carrito</p> }

        </div>
    )
}

export default Carrito
