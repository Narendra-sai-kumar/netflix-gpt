import React, {useState} from 'react'

const Login_form = () => {
    const [islogin, setIsLogin] = useState(true)


    return (
        <div className='absolute w-full sm:w-[440px] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-85 text-gray-200  rounded-lg top-[100px]'> 
            <h1 className='text-3xl font-bold m-9 px-4'>{islogin ? "Sign In": "Sign Up"}</h1>
            <div className='w-3/4 m-auto'>
                <form onSubmit={(e) => e.preventDefault()}>
                    {!islogin && <><input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="text" placeholder='First name'/>
                        <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="text" placeholder='Last name'/>
                    <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="number" max='10' placeholder='Mobile number'/></>}
                    <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="email" placeholder='Email or mobile number'/>
                    <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="password" placeholder='Password'/>
                    {islogin ? <button className='w-full my-2 p-2 bg-red-600 rounded-md hover:bg-red-700' >Sign In</button>
                         : <button className='w-full my-2 p-2 bg-red-600 rounded-md hover:bg-red-700' >Sign Up</button>}
                    
                    
                </form>
               <div>
                {!islogin ? <p  className='my-4'>Already have Netflix account? <span className='text-white font-bold hover:underline' onClick={() => setIsLogin(!islogin)}>Sign in now.</span></p>
                    :
                    <>
                    <p className='text-center my-2'>OR</p>
                    
                    <button className='w-full my-2 p-2 bg-gray-500 bg-opacity-50 rounded-md hover:bg-opacity-80' >Use a sign-in code</button>
                    <p className='text-center my-2 cursor-pointer hover:underline'>Forgot password?</p>
    
                    <div className='my-2'>
                    <input type="checkbox"/> Remember me
                    </div>
                    <p  className='my-2'>New to Netflix? <span className='text-white font-bold hover:underline' onClick={() => setIsLogin(!islogin)}>Sign up now.</span></p>
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

export default Login_form