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
            <main className="mainCards">
                <h1 className="detalleTitulos">Detalle del Producto:</h1>
                {producto.map (producto =>                        
                    <Card className="cardSeleccion" style={{ width: '18rem' }} key={producto.id}>
                        <Card.Body>
                            <div className="cardBody">
                                <div className="itemDetailImg">
                                    <img className="detalleImg" src={producto.imagen} alt="" />               
                                </div> 
                                <h3 className="detalleTituloProducto">"{producto.title}"</h3>
                                <Card.Text>
                                <span className="detallePrecio">Precio: $ {producto.precio.toFixed(2)}</span>
                                </Card.Text>
                            </div>
                            <div>
                                <ItemCount stock={5} initial={1} onAdd={onAdd} />
                            </div>                            
                        </Card.Body>
                    </Card>                        
                )}
            </main>          
        )

    } else {         
        return (    
            <main className="mainCards">
                <h1 className="detalleTitulos">Producto seleccionado:</h1>
                {producto.map (producto =>
                    <Card className="cardSeleccion" style={{ width: '18rem' }} key={producto.id}>
                    <Card.Body>
                        <div className="cardBody">
                            <div>
                                <img className="detalleImg" src={producto.imagen} alt="" />               
                            </div> 
                            <h3 className="detalleTituloProducto">"{producto.title}"</h3>
                            <Card.Text>
                                <span className="detallePrecio">Precio: $ {(producto.precio*quantity).toFixed(2)}</span>
                            </Card.Text>                            
                            <span className="detalleCarrito"> 🛒: {quantity} </span>
                            <Link to={"/carrito"}>
                                <Button variant="outline-info">ir al Carrito</Button>
                            </Link>
                        </div>
                    </Card.Body>
                    </Card>
                )}
            </main>  
        )
    }    
}

export default ItemDetail