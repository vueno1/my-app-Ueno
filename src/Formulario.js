import React, { useState } from 'react';
import { db } from './firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Button, Card } from 'react-bootstrap';
import { useContexto } from './componentes/context/mi contexto';
import { toast } from 'react-toastify';

const Formulario = () => {

    const {carrito, limpiarCarrito, precioTotal} = useContexto () 

    const [nombre, setNombre] = useState ("") 
    const [apellido, setApellido] = useState ("")
    const [email, setEmail] = useState ("")

    const guardarNombre = e => {
        setNombre(e.target.value);   
    }

    const guardarApellido = e => {
        setApellido (e.target.value)
    }

    const guardarEmail = e => {
        setEmail (e.target.value)
    }

    const finalizarCompra = () =>{        
        const ventasCollection = collection (db, "ventas")

        addDoc (ventasCollection, {

            buyer: {
                name: nombre,
                lastName: apellido,
                email: email
            },

            items: carrito,
            date: serverTimestamp (),
            total: precioTotal
        })

        .then ((resultado) => {
            
            toast(`✔️ Compra exitosa!, Su codigo de compra es = # ${resultado.id} a nombre de ${apellido} ${nombre}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })

        limpiarCarrito ()
    }

    return (
        <div>

            <div className='formulario_input'>
                <h3>Complete sus datos: </h3>
                <input id='nombre' type="text" placeholder='Nombre' onChange={guardarNombre}/>
                <input id='email' type="text" placeholder='Apellido' onChange={guardarApellido} />
                <input id='telefono' type="text" placeholder='Email' onChange={guardarEmail}/>
            </div>

            <Card>
            <Card.Body>                                 
            <Button onClick={finalizarCompra} variant="primary">Terminar compra</Button>
            </Card.Body>                            
            </Card>             

            
        </div>
    );
}

export default Formulario;
