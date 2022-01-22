import React from 'react'
import Button from 'react-bootstrap/Button' 
import { useState } from "react";  

function ItemCount({stock, initial, onAdd }) {

    let [ contador, setContador] = useState (0)

    const sumar = () => {

        if (contador >= stock ) {
            console.log ("no hay mas stock!")            
        } else {
            setContador ( contador + 1)
        }
    }

    const restar = () => {

        if (contador <= initial) {
            console.log ("no apriete el boton!")
        } else {
            setContador (contador -1)
        }
    }  

    const agregarCantidad = () => {
        setContador (initial)
        onAdd (contador)
    } 

    return (
        <>
            <div className= "divBotonesFuera">
                <div className= "divBotones">       
                    <Button onClick= {sumar} variant="info">+</Button>
                    <p>{contador} </p>            
                    <Button onClick= {restar} variant="info">-</Button>            
                </div>

                <div className= "divBotonAgregarCarrito">
                    <Button onClick= {agregarCantidad} variant="outline-info">Agregar al Carrito </Button>
                </div>              
            </div>
        </>
    )
}

export default ItemCount
