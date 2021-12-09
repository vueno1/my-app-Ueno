

//IMPORTS
import CartWidget from './CartWidget'; // COMPONENTE 
import Nav from 'react-bootstrap/Nav'; //BOOTSTRAP NAV 

//---------------------------------------------------------------------------------------------------
const NavBar = () => {
    
    return (

        
        <>   

            {/* ///////////////
              BOOTSTRAP = "nav" 
            /////////////////*/}
       
            <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>

                <Nav.Item>
                    <Nav.Link href="/home">Inicio</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link-1">otra pagina</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link-2">otra pagina 2</Nav.Link>
                </Nav.Item>      
                    


                {/* //////
                COMPONENTE
                //////// */}
                <CartWidget/>

            </Nav>
    

        </>
    )
}

export default NavBar