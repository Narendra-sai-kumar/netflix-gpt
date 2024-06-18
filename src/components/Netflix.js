import React, {useEffect} from 'react'
import Login from './Login.js'
import Browse from './Browse.js'
import { Routes, Route } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { UserAvatar } from '../utils/constants.js'

const Netflix = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("auth from firebase", auth);
  
    
    useEffect (() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          console.log("onAuthStateChanged", user,  displayName);
          
         // const  photoURL = initialPhotoUrl || UserAvatar;
          
          dispatch(addUser({uid:uid, email:email, displayName:displayName|| "Name", photoURL:photoURL || UserAvatar}))
           navigate("/browse")
        } else {
          dispatch(removeUser());
           navigate("/")
        }
      });
      //Unsubscribe when component unmount
      return () => { unsubscribe()}
    }, [])

  return (
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/browse" element={<Browse/>}></Route>
    </Routes>
  )
}

export default Netflix