
//IMPORTS
import Header from "./componentes/header/Header" //COMPONENTE 
import Footer from "./componentes/footer/Footer" //COMPONENTE 
import Home from "./Home";
import Carrito from "./Carrito";

import ItemListContainer from "./componentes/main/ItemListContainer"; // COMPONENTE
import ItemDetailContainer from "./componentes/main/details/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //ROUTER-DOM

import CustomProvider from "./componentes/context/mi contexto";


//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'; 


//----------------------------------------------------------------------------------------------------

const App = () => {


    const links = [

        {href: "/productos", name:"all products", id:1}, //link para todos los productos 
        {href: "/categoria/electronics", name:"electronics", id:2}, //link para electronicas
        {href: "/categoria/jewelery", name:"jewelery", id:3}, // link para jewelery 
        {href: "/categoria/men's clothing", name: "men's clothing", id:4},
        {href: "/categoria/women's clothing", name: "women's clothing", id:5}
    ]

   return (        

            <CustomProvider>

                {/* //TODO ESTO ES EL CHILDREN (PROP) DE CUSTOMPROVIDER */}
                <BrowserRouter>
                    <Header links={links} />
                
                    <Routes>
                        <Route path= "/" element={<Home/>} />
                        <Route path= "/productos" element={<ItemListContainer nombre={"E-COMMERCE"}/>} />
                        <Route path= "/categoria/:id" element={<ItemListContainer nombre={"E-COMMERCE"}/>} />
                        <Route path= "/producto/:id" element={<ItemDetailContainer/>} />
                        <Route path= "/carrito" element= {<Carrito/>} />
                    </Routes>

                    <Footer/>
                </BrowserRouter>
                {/*/////////////////////////////////////////////////////////////// */}

            </CustomProvider>
            
        )
        
}

export default App