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

        //itemDetalil.js tiene toda esta informacion (producto+cantidad)
        //itemDetail.js consume este contexto (a traves de esta funcion (meto agregaralcarrito (a,b) en onAdd))
        //esta funcion la ejecuto desde itemDetail.js
        //clickeo itemDitail.js [agregarAlCarrito] → eso viaja desde itemDetail.js hasta el contexto
        //copia del carrito y de ahi pushearlo

        const copia_producto = {...producto} // creo una copia de mi producto seleccionado
        copia_producto.cantidad = cantidad //a esa copia le agrego una propiedad = cantidad

        setCarrito ([...carrito, copia_producto]) // uso la funcion setCarrito para cambiar del estado [VACIO] a [agrego copia del producto]
        //tambien hago una copia de ese carrito para no modificar mi array original en CARRITO. 
        setCantidadTotal (cantidadTotal + cantidad) //seteo la cantidad total, que se incializa en 0 hasta que me muestra cantidad elegida. 

        //multiplico precio del producto x cantidad
        //lo defino en una constante => precioPorCantidad 
        //y ese resultado lo seteo en setPreciototal
        const precioPorCantidad = copia_producto.price*cantidad
        setPrecioTotal (precioTotal + precioPorCantidad)
        
    }

    //2-
    const borrarDelCarrito = (id, cantidad) => { 
        
        // creo una copia de mi carrito filtrando el id q no quiero.
        const nuevoCarritoFiltrado = carrito.filter (item => item.id !== id)        
        
        if (cantidadTotal >0) {
            //lo seteo en el estado
            setCarrito (nuevoCarritoFiltrado)       
            setCantidadTotal (cantidadTotal - cantidad)
            
            //recorro mi nuevo carrito filtrado, y lo mapeo para 
            //sacarle la info del precio x la cantidad
            //con ese resultado, lo seteo en setpreciototal
            nuevoCarritoFiltrado.map ( (e) => {

                const precioFinal = e.price*cantidad
                console.log (precioFinal)
                setPrecioTotal (precioFinal)
            })
            

        } else {
            setCantidadTotal (0)
        }
    }

    //3-
    const limpiarCarrito = () => {
        setCarrito ([])
        setCantidadTotal (0)   
        setPrecioTotal (0)   
    }

    //4-
    const estaEnCarrito = (id) => {         
        return carrito.some (item => item.id === id)
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

