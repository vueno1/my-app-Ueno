import { useContexto } from './componentes/context/mi contexto'
import { Link } from 'react-router-dom'
import { Card, Button} from 'react-bootstrap'
import Formulario from './Formulario'


function Carrito() {

    const {carrito, borrarDelCarrito, limpiarCarrito, precioTotal} = useContexto ()   

    return (    
            
        <div className='carrito'>

            <h1 className='tituloCarrito'>Sector Carrito:</h1>
            {carrito.length > 0 ? (                    
                <ul>  
                    {carrito.map ((producto, indice) => {  
                        let {cantidad,...objeto} = producto
                        return (                                     
                                <Card className='card_carrito' key={objeto[0].id}>
                                    <Card.Header>Nombre del producto: "{objeto[0].title}"</Card.Header>
                                    <Card.Header> Código del producto: #{objeto[0].id}</Card.Header>
                                    <Card.Body>
                                    <Card.Title> Subtotal: ${objeto[0].precio*cantidad}</Card.Title>
                                        <Card.Text>
                                        🛒: {cantidad}        
                                        </Card.Text>
                                    <Button variant="info" onClick={()=> borrarDelCarrito (objeto[0].id, cantidad, objeto[0].precio)} > eliminar item</Button>
                                    </Card.Body>
                                </Card> 
                                    
                                )
                        })}                        
                            <div className='carritoBotones'>
                            <Button onClick={limpiarCarrito} variant="outline-info">Limpiar todo Carrito</Button>
                            </div>

                            
                            <div className='carritoPrecioFinal'>                            
                                <Card className="text-center">
                                <Card.Header className='tituloPrecioFinal'>PRECIO FINAL: </Card.Header>
                                <Card.Body>
                                        <Card.Title className='precioFinal'> ${precioTotal.toFixed(2)}</Card.Title>                                    
                                    </Card.Body>                            
                                </Card>                            
                            </div>                                                       
                            <Formulario/>

                </ul>
                ) : (                            
                
                <div className='divCarritoVacio'>                    
                    <Card className='carritoNoHayNada'>
                        <Card.Body>No hay productos en el carrito 😑</Card.Body>
                    </Card>  

                    <Link to="/productos" className='btn_seguirCompra'>
                        <Button variant="info">Seguir la Compra</Button>
                    </Link>                              
                </div>                
            )}
        </div>  
    )
    }

export default Carrito
