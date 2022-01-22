import NavBar from "./NavBar" 
import { NavLink } from "react-router-dom"
import { useContexto } from "../context/mi contexto"

const Header = ({links}) => {

    const {cantidadTotal} = useContexto () 
    
    return (
        <div className= "header">
            <NavLink to="/" className="headerInicio">home</NavLink>       
            <NavBar links={links} cantidadTotal={cantidadTotal} />
        </div>
    )
}

export default Header