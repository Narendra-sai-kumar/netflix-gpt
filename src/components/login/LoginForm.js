import React, {useState, useRef} from 'react'
import {loginValidate} from '../../utils/loginValidate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth} from '../../utils/firebase';


const LoginForm = () => {
    const [isSignin, setIsSignin] = useState(true);
    const [loginErrors, setLoginErrors] = useState({});
    const [firebaseError, setFirebaseError] = useState("")

    const firstName = useRef();
    const lastName = useRef();
    const mobileNumber = useRef();
    const email = useRef();
    const password= useRef();

    const handelLoginValidate = (e) => {
        e.preventDefault();
        const obj = {'firstName':firstName.current?.value, 'lastName': lastName.current?.value, 'mobileNumber':mobileNumber.current?.value, 'email':email.current?.value, 'password':password.current?.value, 'islogin':isSignin} ;
        const errors = loginValidate(obj);
        console.log("errors", errors)
        setLoginErrors(errors);
        if(Object.keys(errors).length) { return }

        
        //Signup with firebase
        if(!isSignin){
            createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateProfile(auth.currentUser, {
                    displayName: firstName.current?.value, photoURL: "https://tse2.mm.bing.net/th?id=OIP.7tlP1ph61ompULJdycVJlQHaHa&pid=Api&P=0&h=180"
                    }).then(() => {

                    }).catch((error) => {
                        setFirebaseError(error)
                    });
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setFirebaseError(`${errorCode} + ' - ' + ${errorMessage}`)
            });

        }else{
            //Signin with firebase

            signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                .then((userCredential) => {
                    
                    const user = userCredential.user;
                    console.log("signedin", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setFirebaseError(`${errorCode} + ' - ' + ${errorMessage}`)
                });
        }   
    }
   
    const changeLoginOption = () => {
        setIsSignin(!isSignin);
        setLoginErrors({});
        email.current.value = '';
        password.current.value = '';
    } 

    return (
        <div className='absolute w-full sm:w-[440px] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-85 text-gray-200  rounded-lg top-[100px]'> 
            <h1 className='text-3xl font-bold m-9 px-4'>{isSignin ? "Sign In": "Sign Up"}</h1>
            <div className='w-3/4 m-auto'>
                <form >
                    {!isSignin && <>
                        
                        <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="text" placeholder='First name' ref={firstName} required/>
                        {loginErrors?.firstNameError && <p className='text-red-500'>* {loginErrors?.firstNameError} </p>}
                        <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="text" placeholder='Last name' ref={lastName}/>
                        {loginErrors?.lastNameError && <p className='text-red-500'>* {loginErrors?.lastNameError} </p>}
                        <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="number" placeholder='Mobile number' ref={mobileNumber}/>
                        {loginErrors?.mobileNumberError && <p className='text-red-500'>* {loginErrors?.mobileNumberError} </p>}
                    </>}
                    <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="email" placeholder={`Email ${isSignin ? 'or mobile number':""}`} ref={email}/>
                    {loginErrors?.emailError && <p className='text-red-500'>* {loginErrors?.emailError} </p>}
                    <input className='w-full my-2 p-4 bg-black bg-opacity-85 border-2 rounded-md' type="password" placeholder='Password' ref={password}/>
                    {loginErrors?.passwordError && <p className='text-red-500'>* {loginErrors?.passwordError} </p>}
                    <button className='w-full my-2 p-2 bg-red-600 rounded-md hover:bg-red-700' onClick={(e) => handelLoginValidate(e)} >{isSignin ? "Sign In" : "Sign Up" }</button>
                    <p>{firebaseError} </p>                    
                    
                </form>
               <div>
                {!isSignin ? <p  className='my-4'>Already have Netflix account? <span className='text-white font-bold hover:underline' onClick={() => changeLoginOption()}>Sign in now.</span></p>
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