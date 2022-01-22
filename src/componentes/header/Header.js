import NavBar from "./NavBar" 
import { NavLink } from "react-router-dom"
import { useContexto } from "../context/mi contexto"

const Header = ({links}) => {

    const {cantidadTotal} = useContexto () 
    
    return (
        <>
            <header className= "header"> 

                <NavLink to="/" className="headerInicio">home</NavLink>       
                <NavBar links={links} cantidadTotal={cantidadTotal} /> 

            </header>
        </>
    )
}

export default Header