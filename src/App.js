
//IMPORTS
import Header from "./componentes/header/Header" //COMPONENTE 
import Footer from "./componentes/footer/Footer" //COMPONENTE 
import ItemListContainer from "./componentes/main/ItemListContainer"; // COMPONENTE



//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';


//----------------------------------------------------------------------------------------------------

const App = () => {


   return (
            <>
                <Header/>
                <ItemListContainer nombre={"E-COMMERCE"}/>                    
                <Footer/>
            </>
            
        )
        
}

export default App