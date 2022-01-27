import { signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import {auth, provider} from "../firebase"
import googleIcon from '../assets/google.png'
import { Button } from 'react-bootstrap';

const Authgoogle = () => {

    const [isSignIn, setIsSignIn] = useState (true)

    const signInWithGoogle = () => {

        signInWithPopup (auth, provider)
    
        .then ((result) => {
            const name = result.user.displayName
            const email = result.user.email
            const profilePic = result.user.photoURL
    
            localStorage.setItem ("name", name)
            localStorage.setItem ("email", email)
            localStorage.setItem ("profilePic", profilePic)

            setIsSignIn (false)
    
        }) 
    
        .catch ((error) => {
            console.log (error)
        })
    }
    
    const signOutGoogle = ()=>{

        signOut (auth) 
    
        .then ((resultado) =>{
            console.log (resultado)
            setIsSignIn (true)
        })
        .catch ((error)=>{
            console.log (error)
        })
    }

    if (isSignIn) {
        return (
            <div>
                <img className='googleIcon' src={googleIcon} alt="googleIcon" />
                <Button onClick={signInWithGoogle} variant="light">Sign in</Button>
            </div>
        );

    } else {

        return (
            <div className='divGoogleProfile'>
                <img className='googlePic' src={localStorage.getItem ("profilePic")} alt='profilePic'/>            
                <Button onClick={signOutGoogle} variant="outline-dark">Salir</Button>
            </div>
        );

    }

}

export default Authgoogle;
