import ItemCount from "../ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

//-----------------------------------------------------------------------------

const ItemDetail = ({producto}) => {

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

    }  
    
    //si mostrar esta en estado true, me muestra todavia mi contador y sigo agregando productos.
    if (mostrar) {

        return (
    
            <>
                <div className="itemDetail">

                    <h3> Detalle de producto </h3>
    
                    <p>Nombre: {producto.title} </p>
                    <p>Precio: $ {producto.price}</p>

                    <div className="itemDetailImg">
                        <img src={producto.image} alt="" />               
                    </div> 
                    
                    <div>
                        <ItemCount stock={5} initial={1} onAdd={onAdd} />
                    </div>

                </div>
            
            </>
    
        )

    } else { // sino, y mi estado "mostrar" cambia a false, entonces me muestra mi producto
        //con la cantidad de producto deseado. 

        return (
    
            <>
            
                <div className="itemDetail">

                    <h3> Detalle de producto </h3>
    
                    <p>Nombre: {producto.title} </p>
                    <p>Precio: $ {producto.price}</p>  

                    <div className="itemDetailImg">
                        <img src={producto.image} alt="" />               
                    </div> 

                    <h6>cantidad en el carrito:</h6>
                    <p className="cantidad"> {quantity} </p>

                    <div>
                         <Link to={"/carrito"}>ir al carrito</Link>
                    </div>
                 
                </div>
            
            </>
    
        )

    }
    
}

export default ItemDetail