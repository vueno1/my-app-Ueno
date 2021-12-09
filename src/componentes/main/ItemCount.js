import React from 'react'
import Button from 'react-bootstrap/Button' /// BOOTSTRAP BOTONES 

import { useState } from "react";  //IMPORTO HOOK USESTATE

/*////////////////////////////////////////////////////////////
AGREGO PARAMETRO STOCK PARA INFORMAR LA CANTIDAD DE PRODUCTOS
/////////////////////////////////////////////////////////////*/
function ItemCount({stock}) {


    /*//////////////////////////////////////////////////////////////////
    LOGICA: FUNCIONES PARA LOS BOTONES DE SUMA, RESTA Y AGREGAR CARRITO
    //////////////////////////////////////////////////////////////////*/
    let [ contador, setContador] = useState (0)

    const sumar = () => {

        if (contador >= stock ) {
            console.log ("no hay mas stock!")
            
        } else {
            setContador ( contador + 1)
        }
    }

    const restar = () => {

        if (contador <=0) {
            console.log ("no apriete el boton!")
        } else {
            setContador (contador -1)
        }
    }

    const onAdd = () => {

        if (contador <=0) {
            console.log ("no hay nada en el carrito")

        } else {
            setContador (contador)
            console.log ( {contador})
        }
    }


    return (

            <>

                {/*/////////////////////////////////////////////////////////
                AGREGO RESPECTIVOS BOTONES Y EVENTO PARA QUE FUNCIONEN
                ////////////////////////////////////////////////////////*/}
                <div className= "divBotonesFuera">

                    <div className= "divBotones">       
                        <Button onClick= {sumar} variant="info">+</Button>
                        <p>{contador} </p>            
                        <Button onClick= {restar} variant="info">-</Button>            
                    </div>

                    <div className= "divBotonAgregarCarrito">
                    <Button onClick= {onAdd} variant="outline-info">Agregar al Carrito </Button>
                    </div>              


                </div>

            </>

    )


}

export default ItemCount
