import React from 'react'
import Header from './Header'
import Login_footer from './login/Login_footer'
import Login_form from './login/Login_form'

const Login = () => {

    return (
        // <div>
        //     <Header/>
        //     <img className='w-full bg-gradient-to-b from-black to-transparent opacity-70 h-auto' alt ="Background-image" src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        
            
        // </div>
        <div>
          <Header />
          <div className="w-full h-screen">
            <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
              alt="Description of image"
              className="w-full h-full object-cover"
            />
          </div>
          
          <Login_form/>
          <Login_footer/>
      </div>
       
    )
}

export default Login