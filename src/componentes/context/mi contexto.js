//mi contexto → NO es un componente, no hace falta q vaya en mayusucula.
//sino que tiene componentes customizados para que los use globalmente. 
//como por ejemplo "useContexto"

//1-
import {createContext, useContext, useState} from 'react' //importo hooks

//2-
// uso el createcontext () para crear el contexto, y le declaro una variable = CONTEXTO 
const contexto = createContext () 

//3-
//el componente que me da el contexto es PROVIDER. 
//es decir, si hago un console.log (las propiedades que me muestra "contexto" son muchas y una de ellas es PROVIDER)
//saco ese componente para poder usarlo.
//y lo exporto
export const {Provider} = contexto

//3-
//creo una funcion que lo que hace es retornar un valor, que sera el contexto que yo creé con CREATECONTEXT ()
//esta funcion es lo que llamamos CUSTOM hook. → actua como un useState (), pero creado x nosotros.
//a esta funcion la defino con una variable → USECONTEXTO
//y lo exporto para poder usarlo en en componente que lo necesite (en este caso: carrito, header, cartwidget)
export const useContexto = () => {      
    return useContext (contexto)  
}

//-------------------------------------------------------------------------

//creo mi componente CUSTOMPROVIDER para poder utilizarlo globalmente.
const CustomProvider = ({children}) => {

    //variable "cantidadtotal" que se inicializa en CERO
    //funcion setcantidadtotal que se encargara del cambio del estado de "cantidadtotal"
    const [cantidadTotal, setCantidadTotal] = useState (0)

    //variable "carrito" que se inicializa en array vacio 
    //funcion "setcarrito" que se encarga del cambio de estado de "carrito"
    const [carrito, setCarrito] = useState ([])

    const [precioTotal, setPrecioTotal] = useState (0)

    //1-
    const agregarAlCarrito = (producto, cantidad) => {

        console.log (`este es el producto agregado = `,producto) // [{0:{....}}]
        console.log (`esta es la cantidad agregada =` , cantidad) // numero
        
        const id = producto[0].id // a ese producto agregado le saco el id.
        console.log (`esto es id = `, id )

        if (estaEnCarrito (id)) { //y lo comparo aca, si el id coincide con el del carrito.

            const copiaCarrito = [...carrito] // [{0:{...}, cantidad:numero}]
            console.log (`esto es una copiacarrito`, copiaCarrito)

            let match = copiaCarrito.find ((p) => p[0].id === producto[0].id)
            match.cantidad = match.cantidad + cantidad
            setCarrito (copiaCarrito) 


        } else {

            const copiaCarrito = [...carrito]
            console.log (`copia carrito tiene = `, copiaCarrito)
            
            const copiaProducto = {...producto}
            copiaProducto.cantidad = cantidad
            setCarrito ([...carrito, copiaProducto])
    
        }


        //recorro mi producto agregado, y obtengo el precio x cantidad para sumarlo a precio total.
        producto.map ( (e) => {     
            const precioPorCantidad = e.precio*cantidad    
            setPrecioTotal (precioTotal + precioPorCantidad) // aca se puede poner math.round            
        })                
        
        //la cantidad siempre suma igual, asi que no hace falta ponerlo dentro del condicional.
        setCantidadTotal (cantidadTotal + cantidad) 
        
    }

    //2-
    const borrarDelCarrito = (id, cantidad) => { 

        console.log (`me llega como parametro desde boton borraritem=`, id) // me llega el numero de item 
        console.log (`me llega como parametro desde el boton borraritem= `,cantidad) // me llega la cantidad en numero
        console.log (`esto esta en carrito actualmente =`, carrito)
                
        // uso filter para filtrar solamente los productos diferentes al id.
        const nuevoCarritoFiltrado = carrito.filter (item => item[0].id !== id)    
        
        console.log (`esto es nuevcarritofiltrado`, nuevoCarritoFiltrado) 
        // este console.log me muestra el objeto dentro del array asi → [ {0: {...}, cantidad:...}]  

        setCarrito (nuevoCarritoFiltrado)
        setCantidadTotal (cantidadTotal - cantidad) // esto es para cartwidget 

        let sumaFiltrada = 0 //creo una variable con iniacializacion en 0

        nuevoCarritoFiltrado.map ((e)=> {

            const sumaDePreciosFiltrados = e[0].precio*cantidad
            sumaFiltrada += sumaDePreciosFiltrados // a esa variable le adiciono las iteraciones de precio*cantidad que hay.
        })

        setPrecioTotal (sumaFiltrada) //la variable la seteo como precioFINAL.        
        
    }

    //3-
    const limpiarCarrito = () => {
        setCarrito ([])
        setCantidadTotal (0)   
        setPrecioTotal (0)   
    }

    //4-
    const estaEnCarrito = (id) => {    
        //aca tener en cuenta que item solo tiene que buscar tambien indice x tener objeto dentro de objeto.     
        return carrito.some (item => item[0].id === id) //si el id q me viene x parametro en agregaralcarrito coincide con el id del carrito.
    }

    //5- creo una variable, que contenga todas esas funciones.
    const valorDelContexto = {
        cantidadTotal, //esto va a carrito.js y cartwidge.js
        carrito, //esto va a carrito.js
        precioTotal, //esto va a carrito.js
        agregarAlCarrito, //esto va a itemDetail.js 
        borrarDelCarrito, //esto va a carrito.js
        limpiarCarrito, //esto va a carrito.js
        estaEnCarrito 
    }


    return (

        //me retorna el componente PROVIDER con el valor del contexto (value)
        <Provider value= {valorDelContexto}>
            {/*todo lo q esta dentro de provider es un prop = children*/}
            {children}
        </Provider>
    )

}

export default CustomProvider

