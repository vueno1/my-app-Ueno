
import { useContexto } from './componentes/context/mi contexto'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { db } from './firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'


//------------------------------------------------------------------------------

function Carrito() {

    const {carrito, borrarDelCarrito, limpiarCarrito, precioTotal} = useContexto ()

    console.log (carrito)
    //console.log (borrarDelCarrito)
    //console.log (limpiarCarrito)
    //console.log (precioTotal)



    const finalizarCompra = () =>{

        console.log ("guardando compra en base de datos...")

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

            {carrito.length > 0 ? (
                
                <ul>
  
                    {carrito.map ((producto, indice) => {  

                        console.log (`esto es el map =`, producto)

                        //desestructuring valores de producto.
                        let {cantidad,...objeto} = producto

                        console.log (`desestructuring a cantidad =`, cantidad)
                        console.log (`desestructuring a objeto =`, objeto) // objeto = {0: {}}
                        
                        const valores = Object.values (objeto)
                        console.log (`esto es objeto.values = `,valores )                        

                        return (


                            valores.map ((prop) =>{
                                
                                return (
                                    <>  
                                        <Card className='card_carrito' key={indice}>
                                            <Card.Header> {prop.title}</Card.Header>
                                            <Card.Header> CODIGO: {prop.id}</Card.Header>
                                            <Card.Body>
                                            <Card.Title> SUBTOTAL = ${prop.precio*cantidad}</Card.Title>
                                                <Card.Text>
                                                    CANTIDAD = {cantidad}        
                                                </Card.Text>
                                            <Button variant="primary" onClick={()=> borrarDelCarrito (prop.id, cantidad)} > eliminar item</Button>
                                            </Card.Body>
                                        </Card>  
                                    </>
                                )
    
                            })


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
