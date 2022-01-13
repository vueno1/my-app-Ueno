import React from 'react'
import { useContexto } from './componentes/context/mi contexto'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'


//------------------------------------------------------------------------------

function Carrito() {

    const {carrito, borrarDelCarrito, limpiarCarrito, precioTotal} = useContexto ()

    console.log (carrito)
    console.log (borrarDelCarrito)
    console.log (limpiarCarrito)
    console.log (precioTotal)

    return (


        <div className='carrito'>

            {carrito.length > 0 ? (
                
                <ul>
                    {carrito.map ((producto, indice) => {

                        return (

                            <>                        
                                <Card className='card_carrito' key={indice}>
                                    <Card.Header> {producto.title}</Card.Header>
                                    <Card.Header> CODIGO: {producto.id}</Card.Header>
                                    <Card.Body>
                                    <Card.Title> SUBTOTAL = ${producto.price*producto.cantidad}</Card.Title>
                                        <Card.Text>
                                            CANTIDAD = {producto.cantidad}        
                                        </Card.Text>
                                    <Button variant="primary" onClick={()=> borrarDelCarrito (producto.id, producto.cantidad)} > eliminar item</Button>
                                    </Card.Body>
                                </Card>  
                            </>
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
                               
                                <Button variant="primary">Terminar compra</Button>
                            </Card.Body>                            
                        </Card>
                        {/*
                        <p> precio final $ : {precioTotal}</p>
                        <Link variant="outline-info" to="/"> Terminar compra </Link>
                        
                        */}
                    </div>


                </ul>

            ) : (

            <>

                <div className='divCarritoVacio'>

                    <Card className='carritoNoHayNada'>
                        <Card.Body>No hay productos en el carrito</Card.Body>
                    </Card>
                    
                    <Link to="/productos">sigo comprando</Link>              
                

                </div>
            </>

            )
            }

        </div>
    )
}

export default Carrito
