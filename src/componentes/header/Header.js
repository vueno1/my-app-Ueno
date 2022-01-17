
//IMPORTS
import NavBar from "./NavBar" // COMPONENTE 
import { NavLink } from "react-router-dom"
import { useContexto } from "../context/mi contexto"//importo el customHOok "usecontexto"


//---------------------------------------------------------------------

const Header = ({links}) => {


    const {cantidadTotal} = useContexto () //este valor me lo traigo de mi contexto
    
    
    return (

        <>
            <header className= "header"> 

                <NavLink to="/" className="headerInicio">home</NavLink>       

                {/*//////
                COMPONENTE
                ///////// */}
                <NavBar links={links} cantidadTotal={cantidadTotal} /> {/* le paso a navbar los links creados */}

            </header>

        </>
    )
}

export default Header