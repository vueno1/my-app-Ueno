import {createContext, useContext, useState} from 'react' 
const contexto = createContext () 

export const {Provider} = contexto
export const useContexto = () => {      
    return useContext (contexto)  
}

const CustomProvider = ({children}) => {

    const [cantidadTotal, setCantidadTotal] = useState (0)
    const [carrito, setCarrito] = useState ([])
    const [precioTotal, setPrecioTotal] = useState (0)

    const agregarAlCarrito = (producto, cantidad) => {

        const id = producto[0].id 

        if (estaEnCarrito (id)) { 

            const copiaCarrito = [...carrito] 

            let match = copiaCarrito.find ((p) => p[0].id === producto[0].id)
            match.cantidad = match.cantidad + cantidad
            setCarrito (copiaCarrito) 

        } else {            
            const copiaProducto = {...producto}
            copiaProducto.cantidad = cantidad
            setCarrito ([...carrito, copiaProducto])    
        }

        producto.map ( (e) => {     
            const precioPorCantidad = e.precio*cantidad    
            setPrecioTotal (precioTotal + precioPorCantidad)             
        })                
        setCantidadTotal (cantidadTotal + cantidad)         
    }

    const borrarDelCarrito = (id, cantidad) => { 

        const nuevoCarritoFiltrado = carrito.filter (item => item[0].id !== id)    
        setCarrito (nuevoCarritoFiltrado)
        setCantidadTotal (cantidadTotal - cantidad)

        let sumaFiltrada = 0 
        nuevoCarritoFiltrado.map ((e)=> {

            const sumaDePreciosFiltrados = e[0].precio*cantidad
            sumaFiltrada += sumaDePreciosFiltrados
        })

        setPrecioTotal (sumaFiltrada)         
    }

    const limpiarCarrito = () => {
        setCarrito ([])
        setCantidadTotal (0)   
        setPrecioTotal (0)   
    }

    const estaEnCarrito = (id) => {    
        return carrito.some (item => item[0].id === id) 
    }

    const valorDelContexto = {
        cantidadTotal, 
        carrito, 
        precioTotal,
        agregarAlCarrito,  
        borrarDelCarrito, 
        limpiarCarrito, 
        estaEnCarrito 
    }

    return (
        <Provider value= {valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider

