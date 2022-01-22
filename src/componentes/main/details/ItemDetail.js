import ItemCount from "../ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"
import { useContexto } from "../../context/mi contexto"

const ItemDetail = ({producto}) => {

    const {agregarAlCarrito} = useContexto ()
    const [mostrar,setMostrar] = useState(true)
    const [quantity, setQuantity] = useState ("")

    const onAdd = (cantidad)=>{ 
        setMostrar (false)  
        setQuantity (cantidad)
        agregarAlCarrito (producto, cantidad) 
    }  
    
    if (mostrar) {
        return (    
            <>
                <main className="mainCards">
                    {producto.map (producto =>                        
                        <Card className="cardSeleccion" style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="cardBody">
                                    <Card.Title>Detalle de producto</Card.Title>

                                    <div className="itemDetailImg">
                                        <img src={producto.imagen} alt="" />               
                                    </div> 

                                    <h3>Nombre: {producto.title} </h3>
                                    <Card.Text>
                                    <span>Precio: $ {producto.precio}</span>
                                    </Card.Text>
                                </div>

                                <div>
                                    <ItemCount stock={5} initial={1} onAdd={onAdd} />
                                </div>                            
                            </Card.Body>
                        </Card>
                        
                    )}
                </main>
            </>    
        )

    } else { 

        return (    
            <>
            <main className="mainCards">
                {producto.map (producto =>
                <Card className="cardSeleccion" style={{ width: '18rem' }}>
                <Card.Body>
                    <div className="cardBody">
                        <Card.Title>Detalle de producto</Card.Title>
                        <div className="itemDetailImg">
                            <img src={producto.imagen} alt="" />               
                        </div> 
                        <h3>Nombre: {producto.title} </h3>
                        <Card.Text>
                            <span>Precio: $ {producto.precio*quantity}</span>
                        </Card.Text>                            
                        <span> Cantidad:{quantity} </span>
                        <Link to={"/carrito"}>
                            <Button variant="outline-info">ir al Carrito</Button>
                        </Link>
                    </div>
                </Card.Body>
                </Card>
                    )}
            </main>
            </>    
        )
    }    
}

export default ItemDetail