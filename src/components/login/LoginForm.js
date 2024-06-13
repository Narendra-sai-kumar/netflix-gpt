import React, {useState, useRef} from 'react'
import {loginValidate} from '../../utils/loginValidate'

const LoginForm = () => {
    const [islogin, setIsLogin] = useState(true);
    const [loginErrors, setLoginErrors] = useState({});

    const firstName = useRef();
    const lastName = useRef();
    const mobileNumber = useRef();
    const email = useRef();
    const password= useRef();

    const handelLoginValidate = (e) => {
        e.preventDefault();
        const obj = {'firstName':firstName.current?.value, 'lastName': lastName.current?.value, 'mobileNumber':mobileNumber.current?.value, 'email':email.current?.value, 'password':password.current?.value, 'islogin':islogin} ;
        const erros = loginValidate(obj);
        setLoginErrors(erros);
    }
   
    const changeLoginOption = () => {
        setIsLogin(!islogin);
        setLoginErrors({});
        email.current.value = '';
        password.current.value = '';
    } 

    return (
        <div className='absolute w-full sm:w-[440px] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-85 text-gray-200  rounded-lg top-[100px]'> 
            <h1 className='text-3xl font-bold m-9 px-4'>{islogin ? "Sign In": "Sign Up"}</h1>
            <div className='w-3/4 m-auto'>
                <form >
                    {!islogin && <>
                        
                        <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="text" placeholder='First name' ref={firstName} required/>
                        {loginErrors?.firstNameError && <p className='text-red-500'>* {loginErrors?.firstNameError} </p>}
                        <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="text" placeholder='Last name' ref={lastName}/>
                        {loginErrors?.lastNameError && <p className='text-red-500'>* {loginErrors?.lastNameError} </p>}
                        <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="number" placeholder='Mobile number' ref={mobileNumber}/>
                        {loginErrors?.mobileNumberError && <p className='text-red-500'>* {loginErrors?.mobileNumberError} </p>}
                    </>}
                    <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="email" placeholder={`Email ${islogin ? 'or mobile number':""}`} ref={email}/>
                    {loginErrors?.emailError && <p className='text-red-500'>* {loginErrors?.emailError} </p>}
                    <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="password" placeholder='Password' ref={password}/>
                    {loginErrors?.passwordError && <p className='text-red-500'>* {loginErrors?.passwordError} </p>}
                    <button className='w-full my-2 p-2 bg-red-600 rounded-md hover:bg-red-700' onClick={(e) => handelLoginValidate(e)} >{islogin ? "Sign In" : "Sign Up" }</button>
                    
                    
                </form>
               <div>
                {!islogin ? <p  className='my-4'>Already have Netflix account? <span className='text-white font-bold hover:underline' onClick={() => changeLoginOption()}>Sign in now.</span></p>
                    :
                    <>
                    <p className='text-center my-2'>OR</p>
                    
                    <button className='w-full my-2 p-2 bg-gray-500 bg-opacity-50 rounded-md hover:bg-opacity-80' >Use a sign-in code</button>
                    <p className='text-center my-2 cursor-pointer hover:underline'>Forgot password?</p>
    
                    <div className='my-2'>
                    <input type="checkbox"/> Remember me
                    </div>
                    <p  className='my-2'>New to Netflix? <span className='text-white font-bold hover:underline' onClick={() => changeLoginOption()}>Sign up now.</span></p>
                    <div  className='my-2 py-4 text-gray-400 text-sm'>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <span className='text-blue-500 cursor-pointer hover:underline'> Learn more.</span>
                    </div>
                    </>}            
               </div>             
            </div>
        </div>
    )
}

export default LoginForm