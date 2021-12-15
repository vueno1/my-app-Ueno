
//IMPORTS
import Header from "./componentes/header/Header" //COMPONENTE 
import Footer from "./componentes/footer/Footer" //COMPONENTE 
import ItemListContainer from "./componentes/main/ItemListContainer"; // COMPONENTE
import ItemDetailContainer from "./componentes/main/details/ItemDetailContainer";



//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';


//----------------------------------------------------------------------------------------------------

const App = () => {


   return (
            <>
                <Header/>
                <ItemListContainer nombre={"E-COMMERCE"}/>  
                <ItemDetailContainer/>
                <Footer/>
            </>
            
        )
        
}

export default App