import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Home () { 


    return (
        <main className='mainDetalle'>
            <div className='home'>
                <h1>Bienvenido!😄</h1>  
                <Link to="/productos" className='btn_ingrese'>
                    <Button variant="outline-info">Ingrese</Button>
                </Link>
            </div>
        </main>
    )
}

export default  Home
