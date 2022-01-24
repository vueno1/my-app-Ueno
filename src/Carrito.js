import { useContexto } from './componentes/context/mi contexto'
import { Link } from 'react-router-dom'
import { Card, Button} from 'react-bootstrap'
import { db } from './firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Formulario from './Formulario'


function Carrito() {

    const {carrito, borrarDelCarrito, limpiarCarrito, precioTotal} = useContexto ()

    const finalizarCompra = () =>{        
        const ventasCollection = collection (db, "ventas")

        addDoc (ventasCollection, {

            buyer: {
                name: "Vale",
                lastName: "Ueno",
                email: "valeria@gmail.com"
            },

            items: carrito,
            date: serverTimestamp (),
            total: precioTotal
        })

        .then ((resultado) => {
            console.log (resultado)
        })

        limpiarCarrito ()
    }

    return (    
            
        <div className='carrito'>

            <h1>Sector Carrito:</h1>
            {carrito.length > 0 ? (                    
                <ul>  
                    {carrito.map ((producto, indice) => {  
                        let {cantidad,...objeto} = producto
                        return (                                     
                                <Card className='card_carrito' key={objeto[0].id}>
                                    <Card.Header> {objeto[0].title}</Card.Header>
                                    <Card.Header> CODIGO: {objeto[0].id}</Card.Header>
                                    <Card.Body>
                                    <Card.Title> SUBTOTAL = ${objeto[0].precio*cantidad}</Card.Title>
                                        <Card.Text>
                                            CANTIDAD = {cantidad}        
                                        </Card.Text>
                                    <Button variant="primary" onClick={()=> borrarDelCarrito (objeto[0].id, cantidad, objeto[0].precio)} > eliminar item</Button>
                                    </Card.Body>
                                </Card> 
                                    
                                )
                        })}                        
                            <div className='carritoBotones'>
                            <Button onClick={limpiarCarrito} variant="outline-info">limpiar carrito</Button>
                            </div>
                            
                            <div className='carritoPrecioFinal'>                            
                                <Card className="text-center">
                                <Card.Header>PRECIO FINAL: </Card.Header>
                                <Card.Body>
                                        <Card.Title> ${precioTotal}</Card.Title>                                    
                                        <Button onClick={finalizarCompra} variant="primary">Terminar compra</Button>
                                    </Card.Body>                            
                                </Card>                            
                            </div>                                                       
                </ul>
                ) : (                            
                
                <div className='divCarritoVacio'>                    
                    <Card className='carritoNoHayNada'>
                        <Card.Body>No hay productos en el carrito</Card.Body>
                    </Card>                    
                    <Link to="/productos" >
                        <Button variant="info">Seguir la Compra</Button>
                    </Link>                              
                </div>                
            )}
        </div>  
    )
    }

export default Carrito
