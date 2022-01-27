import React from 'react'
import {Link} from "react-router-dom"
import { Card, Button } from 'react-bootstrap' 

function Item({item}) {    
    
    return (        
        <Card className='Cards'>
            <Card.Img className='cardImg' variant="top" src={item.imagen}/>    
            <Card.Body className='cardBody'>                    
                <Card.Title className='itemTitle'>{item.title}</Card.Title>
                <Card.Text className='itemPrecio'>USD {item.precio}</Card.Text>                    
                <Link to={`/producto/${item.id}`}>
                    <Button variant="outline-info">Ver Producto</Button>
                </Link>            
            </Card.Body>
        </Card>        
    )
}

export default Item
