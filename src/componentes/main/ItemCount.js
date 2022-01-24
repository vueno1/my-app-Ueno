import React from 'react'
import Button from 'react-bootstrap/Button' 
import { useState } from "react";  
import { toast } from 'react-toastify';


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

    const toastify = () => {
        toast ('✔️ agregado a carrito', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }

    const mensaje = () => {
        agregarCantidad ()
        toastify ()
    }

    return (
        <div className= "divBotonesFuera">
            <div className= "divBotones">       
                <Button onClick= {sumar} variant="info">+</Button>
                <p>{contador} </p>            
                <Button onClick= {restar} variant="info">-</Button>            
            </div>

            <div className= "divBotonAgregarCarrito">
                <Button onClick= {mensaje} variant="outline-info">Agregar al Carrito </Button>
             
            </div>              
        </div>
    )
}

export default ItemCount
