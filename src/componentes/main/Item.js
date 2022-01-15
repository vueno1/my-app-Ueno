import React from 'react'
import {Link} from "react-router-dom"
import { Card, Button } from 'react-bootstrap' // bootstrap


//----------------------------------------------------------------------------------

//recibo los props del padre → "articulo y precio"
function Item({item}) {
    
    
    return (

        <>
        
            {/* y los muestro en el DOM */}

            <Card className='Cards'>

                <Card.Img className='cardImg' variant="top" src={item.imagen}/>
    
                <Card.Body className='cardBody'>
                    
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>USD {item.precio}</Card.Text>
                    
                    <Link to={`/producto/${item.id}`}>
                        <Button variant="outline-info">Ver Producto</Button>
                    </Link>
            
                </Card.Body>

            </Card>
        
        </>
    )
}

export default Item
