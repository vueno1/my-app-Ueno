
//IMPORTS
import NavBar from "./NavBar" // COMPONENTE 
import { NavLink } from "react-router-dom"


//---------------------------------------------------------------------

const Header = ({links}) => {
    
    return (

        <>
            <header className= "header"> 

                <NavLink to="/" className="headerInicio" >INICIO</NavLink>       

                {/*//////
                COMPONENTE
                ///////// */}
                <NavBar links={links} /> {/* le paso a navbar los links creados */}

            </header>

        </>
    )
}

export default Header