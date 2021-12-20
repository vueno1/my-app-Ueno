
//IMPORTS
import NavBar from "./NavBar" // COMPONENTE 


//---------------------------------------------------------------------

const Header = ({links}) => {
    
    return (

        <>
            <header className= "header"> 

                <h1>TIENDA</h1>

                {/*//////
                COMPONENTE
                ///////// */}
                <NavBar links={links} /> {/* le paso a navbar los links creados */}

            </header>

        </>
    )
}

export default Header