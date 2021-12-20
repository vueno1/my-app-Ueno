
//IMPORTS
import React from 'react' // REACT

import {NavLink} from "react-router-dom"


//----------------------------------------------------------------------

function CartWidget() {
    
    return (
        <div>

            <>
                {/* ////////////
                ICONO DE GOOGLE 
                /////////// */}

                <NavLink to="/carrito">
                    <span className="material-icons">shopping_cart</span>
                </NavLink>
                
            </>

        </div>
    )
}

export default CartWidget
