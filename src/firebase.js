import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBMvBoXFfEkFF-N2jJ41W67va2xDRuuhzM",
    authDomain: "reactappuenovaleria.firebaseapp.com",
    projectId: "reactappuenovaleria",
    storageBucket: "reactappuenovaleria.appspot.com",
    messagingSenderId: "742103353236",
    appId: "1:742103353236:web:6fbe62ed40d702628d3181"
}

const app = initializeApp (firebaseConfig)

export const db = getFirestore (app)
