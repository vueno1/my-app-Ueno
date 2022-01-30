import { signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react'
import {auth, provider} from "../firebase"
import googleIcon from '../assets/google.png'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Authgoogle = () => {

    const [isSignIn, setIsSignIn] = useState (true)

    const signInGoogle = () => {

        signInWithPopup (auth, provider)
    
        .then ((resultado) => {
            const name = resultado.user.displayName
            const email = resultado.user.email
            const foto = resultado.user.photoURL
    
            localStorage.setItem ("name", name)
            localStorage.setItem ("email", email)
            localStorage.setItem ("foto", foto)

            setIsSignIn (false)    
        }) 
    
        .catch ((error) => {
            console.log (error)
        })
    }
    
    const signOutGoogle = ()=>{

        signOut (auth) 
    
        .then ((resultado) =>{
            localStorage.removeItem ("email")
            localStorage.removeItem ("name")
            localStorage.removeItem ("foto")
            document.location.reload()
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
                <Link to="/productos">
                    <Button onClick={signInGoogle} variant="light">Sign in</Button>
                </Link>
            </div>
        )

    } else {
        return (
            <div className='divGoogleProfile'>
                <img className='googlePic' src={localStorage.getItem ("foto")} alt='foto'/> 
                <Link to="/productos">
                    <Button onClick={signOutGoogle} variant="outline-dark">Salir</Button>
                </Link>          
            </div>
        )
    }
}

export default Authgoogle;
