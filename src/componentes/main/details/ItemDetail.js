import ItemCount from "../ItemCount"

const ItemDetail = ({producto}) => {

    console.log (producto)

    //const [mostrar,setMostrar] = useState(true)

    const onAdd = (cantidad)=>{ 
        console.log("Soy onAdd desde ItemListContainer")
        console.log("Cantidad de items: " + cantidad)
        //setCantidad(cantidad)
    }  
    
    return (

        <>
        
            <div className="itemDetail">
                <h1> Detalle de producto </h1>

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
    
}

export default ItemDetail