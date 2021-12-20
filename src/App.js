
//IMPORTS
import Header from "./componentes/header/Header" //COMPONENTE 
import Footer from "./componentes/footer/Footer" //COMPONENTE 
import Home from "./Home";

import ItemListContainer from "./componentes/main/ItemListContainer"; // COMPONENTE
import ItemDetailContainer from "./componentes/main/details/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //ROUTER-DOM

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';


//----------------------------------------------------------------------------------------------------

const App = () => {

    const links = [

        {href: "/productos", name:"productos", id:1}, //link para todos los productos 
        {href: "/categoria", name:"categorias", id:2}, //link para electronicas
        {href: "/categoria/id", name:"seleccionado", id:3}, // link para jewelery 
    ]


   return (
            <BrowserRouter>

                <Header links={links} />
              
                <Routes>
                    <Route path= "/" element={<Home/>} />
                    <Route path= "/productos" element={<ItemListContainer nombre={"E-COMMERCE"}/>} />
                    <Route path= "/categoria" element={<ItemListContainer nombre={"E-COMMERCE"}/>} />
                    <Route path= "/categoria/id" element={<ItemDetailContainer/>} />
                </Routes>

                <Footer/>

            </BrowserRouter>
            
        )
        
}

export default App