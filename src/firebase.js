//1-importo mi libreria firebase y la inicializo con este hook → initializeApp
import {initializeApp} from "firebase/app"

//4- si quiero usar firebase solamente exporto app y listo.
//pero solo quiero usar su servicio de base de datos
//y para eso, importo firestore (base de datos de firebase)
import {getFirestore} from "firebase/firestore"

//2- me voy a mi pagina de firebase y copia la configuracion de mi base de datos
const firebaseConfig = {
    apiKey: "AIzaSyBMvBoXFfEkFF-N2jJ41W67va2xDRuuhzM",
    authDomain: "reactappuenovaleria.firebaseapp.com",
    projectId: "reactappuenovaleria",
    storageBucket: "reactappuenovaleria.appspot.com",
    messagingSenderId: "742103353236",
    appId: "1:742103353236:web:6fbe62ed40d702628d3181"
}

//3- y nuestra aplicacion va a ser todo esto, guardada en una variable.
// mi constante "app" se inicializa con la configuracion que le ponga en ()
const app = initializeApp (firebaseConfig)

//5-y lo exporto como una variable, en donde uso el servicio de base de datos (firestore)
//que esta en mi (app)
// entonces, solamente exporto la variable "db". 
export const db = getFirestore (app)

// donde voy a usar db? → en los containers (item y detail) 
