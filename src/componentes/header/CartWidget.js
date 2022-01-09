
//IMPORTS
import React from 'react' // REACT

import {NavLink} from "react-router-dom"
import { useContexto } from '../context/mi contexto'


//----------------------------------------------------------------------

function CartWidget() {

    const {cantidadTotal} = useContexto ()
    //cantidadtotal lo traigo con el hook USECONTEXTO y lo pongo dentro del 
    //icono de carrito para que me marque el numero {cantidadTotal}
    console.log (cantidadTotal)
    
    return (
        <div>

            <>
                {/* ////////////
                ICONO DE GOOGLE 
                /////////// */}

                <NavLink to="/carrito" >
                    <span className="material-icons">shopping_cart</span>
                    {cantidadTotal} 
                </NavLink>
                
            </>

        </div>
    )
}

export default CartWidget
