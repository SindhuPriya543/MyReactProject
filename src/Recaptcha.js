import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from 'react'

export const Recaptcha = () => {
  const [action,setAction] = useState("Please Capture Recaptcha");
  function CaptureRecaptha(value) {
    console.log("Captcha Value", value)
    if(value){
    setAction("Recaptcha Captured Sucessfully");
    }
  }
  return (
    <div>
        
        <ReCAPTCHA sitekey='6LcNlTUqAAAAAKf9HGaDxh78LlxuWhANiKWoOVlM' onChange={CaptureRecaptha}>
                  <h3>{action}</h3>
        </ReCAPTCHA>
    </div>
  )
}
