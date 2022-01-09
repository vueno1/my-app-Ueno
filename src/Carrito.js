import React from 'react'
import { useContexto } from './componentes/context/mi contexto'

//------------------------------------------------------------------------------

function Carrito() {

    const {carrito} = useContexto ()
    console.log (carrito)

    return (


        <div className='carrito'>

            soy carrito
            
        </div>
    )
}

export default Carrito
