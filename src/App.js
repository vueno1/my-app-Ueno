
import Header from "./componentes/header/Header" 
import Footer from "./componentes/footer/Footer"
import Home from "./Home";
import Carrito from "./Carrito";
import ItemListContainer from "./componentes/main/ItemListContainer"; 
import ItemDetailContainer from "./componentes/main/details/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider from "./componentes/context/mi contexto";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    
    const links = [

        {href: "/productos", name:"all products", id:1}, 
        {href: "/categoria/electronics", name:"electronics", id:2},
        {href: "/categoria/jewelery", name:"jewelery", id:3}, 
        {href: "/categoria/men's clothing", name: "men's clothing", id:4},
        {href: "/categoria/women's clothing", name: "women's clothing", id:5}
    ]

   return (       

            <CustomProvider>
                <BrowserRouter>
                    <Header links={links} />
                
                    <Routes>
                        <Route path= "/" element={<Home/>} />
                        <Route path= "/productos" element={<ItemListContainer nombre={"TIENDA ONLINE"}/>} />
                        <Route path= "/categoria/:id" element={<ItemListContainer nombre={"TIENDA ONLINE"}/>} />
                        <Route path= "/producto/:id" element={<ItemDetailContainer/>} />
                        <Route path= "/carrito" element= {<Carrito/>} />
                    </Routes>

                    <ToastContainer />

                    <Footer/>

                </BrowserRouter>
            </CustomProvider>
            
        )
        
}

export default App