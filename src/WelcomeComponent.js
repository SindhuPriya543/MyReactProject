import React from 'react'
import { useNavigate } from 'react-router-dom'

export const WelcomeComponent = () => {
    const nav = useNavigate();

    function NavRecaptcha(){
        nav('/Recaptcha')
    }
  return (
    <div>
        
        <h3>
            WELCOME TO EDUREKA REACT JS TRAINING !!!!!!
        </h3>

        <input type = 'button' value = 'Go To Recaptcha Screen' onClick={NavRecaptcha}/>
    </div>
  )
}
