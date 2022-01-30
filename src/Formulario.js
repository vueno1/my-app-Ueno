import { db } from './firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Button, Card } from 'react-bootstrap';
import { useContexto } from './componentes/context/mi contexto';
import { toast } from 'react-toastify';

const Formulario = () => {

    const {carrito, limpiarCarrito, precioTotal} = useContexto () 

    const finalizarCompra = () =>{        
        const ventasCollection = collection (db, "ventas")

        addDoc (ventasCollection, {

            buyer: {
                comprador: localStorage.getItem("name"),
                email: localStorage.getItem("email")
            },

            items: carrito,
            date: serverTimestamp (),
            total: precioTotal
        })

        .then ((resultado) => {
            
            toast(`✔️ Compra exitosa!, Su codigo de compra es = # ${resultado.id} a nombre de ${localStorage.getItem("name")}`, {
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

    if (localStorage.getItem ("name") && localStorage.getItem ("email")) {
        return (
            <div>
                <div className='formulario_input'>
                    <h3 className='datosComprador'>Datos del Comprador:</h3>
                    <h4 id='nombre'> Comprador = {localStorage.getItem("name")}</h4>
                    <h4 id='email'>Email = {localStorage.getItem("email")}</h4>
                </div>
    
                <Card>
                    <Card.Body>                                 
                        <Button onClick={finalizarCompra} variant="info">Terminar compra</Button>
                    </Card.Body>                            
                </Card> 
                
            </div>
        )

    } else {
        return (
            
            <div className='formulario_input'>
                <h3 className='datosComprador'>Por favor, inicie sesión:</h3>
                <h4 id='nombre'> Comprador = ??? </h4>
                <h4 id='email'>Email = ??? </h4>
            </div>                
            
        )
    }

}

export default Formulario;
