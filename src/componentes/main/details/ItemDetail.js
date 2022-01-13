import ItemCount from "../ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"

import { useContexto } from "../../context/mi contexto"

//-----------------------------------------------------------------------------

const ItemDetail = ({producto}) => {

    const {agregarAlCarrito} = useContexto ()

    console.log (producto)

    //seteo un estado "mostrar" que el estado inicial es true, y al cambiar el estado pasa a ser false. 
    const [mostrar,setMostrar] = useState(true)

    //seteo la variable "quantity" que comienza con estado vacio, y al agrega
    //cantidad, cambia el estado por el numero deseado.
    // ese valor de "quantity" lo uso despues para mostrarlo en el DOM. 
    const [quantity, setQuantity] = useState ("")

    const onAdd = (cantidad)=>{ 

        console.log("Cantidad de items: " + cantidad)

        setMostrar (false)  //al agregar producto (cantidad) cambia mi estado a false.
        setQuantity (cantidad) // al agregar, ingreso valor (cantidad) a la variable "quantity" 
        // a traves de la funcion setQuantity.  
        
        agregarAlCarrito (producto, cantidad) //esto viene de contexto

    }  
    
    //si mostrar esta en estado true, me muestra todavia mi contador y sigo agregando productos.
    if (mostrar) {

        return (
    
            <>

                <main className="mainCards">

                    <Card className="cardSeleccion" style={{ width: '18rem' }}>

                        <Card.Body>

                            <div className="cardBody">
                                <Card.Title>Detalle de producto</Card.Title>

                                <div className="itemDetailImg">
                                    <img src={producto.image} alt="" />               
                                </div> 

                                <h3>Nombre: {producto.title} </h3>
                                <Card.Text>
                                <span>Precio: $ {producto.price}</span>
                                </Card.Text>
                            </div>

                            <div>
                                <ItemCount stock={5} initial={1} onAdd={onAdd} />
                            </div>
                        
                        </Card.Body>

                    </Card>

                </main>


               
            
            </>
    
        )

    } else { // sino, y mi estado "mostrar" cambia a false, entonces me muestra mi producto
        //con la cantidad de producto deseado. 
        // y a su vez agrego el boton para redirigirme a carrito

        return (
    
            <>

            <main className="mainCards">

                <Card className="cardSeleccion" style={{ width: '18rem' }}>

                <Card.Body>

                    <div className="cardBody">

                        <Card.Title>Detalle de producto</Card.Title>

                        <div className="itemDetailImg">
                            <img src={producto.image} alt="" />               
                        </div> 

                        <h3>Nombre: {producto.title} </h3>

                        <Card.Text>
                            <span>Precio: $ {producto.price*quantity}</span>
                        </Card.Text>
                            
                        <span> Cantidad:{quantity} </span>

                        <Link to={"/carrito"}>
                            <Button variant="outline-info">ir al Carrito</Button>
                        </Link>

                    </div>

                </Card.Body>

                </Card>

            </main>

            
            
            
            </>
    
        )

    }
    
}

export default ItemDetail