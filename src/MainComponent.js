import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

export const MainComponent = () => {

    const nav = useNavigate();
  return (
    <div>
        
        <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    nav('/Welcome')
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    </div>
  )
}
