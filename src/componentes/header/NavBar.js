import CartWidget from './CartWidget'; 
import Nav from 'react-bootstrap/Nav'; 
import {NavLink } from 'react-router-dom';
import Authgoogle from '../../authentication/AuthGoogle';

const NavBar = ({links}) => {

    return (             
        <Nav className='headerNav'>
            {links.map ((elemento) => {
                return <NavLink key={elemento.id} to={elemento.href}> {elemento.name} </NavLink>      
            })}                 
            <CartWidget/>
            <Authgoogle/>
        </Nav>
    )
}

export default NavBar