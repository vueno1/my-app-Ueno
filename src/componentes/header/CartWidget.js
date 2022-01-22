import React from 'react'
import {NavLink} from "react-router-dom"
import { useContexto } from '../context/mi contexto'

function CartWidget() {
    const {cantidadTotal} = useContexto ()

    return (
        
        <>
            <NavLink to="/carrito" >
                <span className="material-icons">shopping_cart</span>
                {cantidadTotal}  
            </NavLink>                
        </>        
    )
}

export default CartWidget
