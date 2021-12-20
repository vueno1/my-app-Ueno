

//IMPORTS
import CartWidget from './CartWidget'; // COMPONENTE 
import Nav from 'react-bootstrap/Nav'; //BOOTSTRAP NAV 

import {NavLink } from 'react-router-dom';


//---------------------------------------------------------------------------------------------------
const NavBar = ({links}) => {

    
    return (        
        <>   

            {/* ///////////////
              BOOTSTRAP = "nav" 
            /////////////////*/}
       
            <Nav className='headerNav'>

                {/*mapeo la lista de links y lo imprimo.*/}
                {links.map ((elemento) => { 
                    
                    //imprimo cada link creado.
                    return <NavLink key={elemento.id} to={elemento.href}> {elemento.name} </NavLink>      

                })}                 


                {/* //////
                COMPONENTE
                //////// */}
                <CartWidget/>

            </Nav>
    

        </>
    )
}

export default NavBar