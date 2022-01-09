//mi contexto → no es un componente, no hace falta q vaya en mayusucula.
//sino que tiene componentes customizados para que los use globalmente. 
//como por ejemplo "useContexto"

//1-
import {createContext, useContext, useState} from 'react' //importo hooks

//2-
const contexto = createContext () 

//3-
//el componente que me da el contexto es PROVIDER. 
//y lo exporto para usarlo
export const {Provider} = contexto

//3-
//creo una funcion que lo que hace es retornar un valor, q lo que me retorna es el valor que yo le hardcodie a "contexto"
//esta funcion es lo que llamamos CUSTOM hook. → actua como un useState (), pero creado x nosotros
//a esta funcion la defino con una variable → USECONTEXTO
//y lo exporto para poder usarlo en carrito y header.
export const useContexto = () => { 
     
    return useContext (contexto) 
 
}

//creo mi componente CUSTOMPROVIDER para poder utilizarlo globalmente.
const CustomProvider = ({children}) => {

    //variable "cantidadtotal" que se inicializa en CERO
    //funcion setcantidadtotal que se encargara del cambio del estado de "cantidadtotal"
    const [cantidadTotal, setCantidadTotal] = useState (0)

    //variable "carrito" que se inicializa en array vacio 
    //funcion "setcarrito" que se encarga del cambio de estado de "carrito"
    const [carrito, setCarrito] = useState ([])

    const agregarAlCarrito = (producto, cantidad) => {
        //itemDetalil.js tiene toda esta informacion (producto+cantidad)
        //itemDetail.js consume este contexto (a traves de esta funcion)
        //esta funcion la ejecuto desde itemDetail.js
        //clickeo itemDitail.js [agregarAlCarrito] → eso viaja desde itemDetail.js hasta el contexto

        //copia del carrito y de ahi pushearlo

        if (estaEnCarrito ()) {

        } else {
            
        }
    }

    const borrarDelCarrito = () => {

    }

    const limpiarCarrito = () => {
        setCarrito ([])
    }

    const estaEnCarrito = (id) => {

        return //true o false 
        //solo cambia la cantidad, no el array. 
        //si el producto que agregaste ya esta en carrito, solo suma la cantidad 

    }

    const valorDelContexto = {
        cantidadTotal,
        carrito,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito,
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

