import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  console.log("user", user);

  // Sign-out 
  const handelLogOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser({}))

    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className='absolute flex justify-between bg-gradient-to-b from-gray-950 from-gray-600 w-full'>
        <div className='w-48 mx-32 z-50'>
            <img  src ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
        </div>
        {
          user && (
            <div className='flex z-50' >
                <div className='m-2 p-2'>
                  <p className="font-bold  text-white rounded-lg">{user.displayName}</p>
                  <button className="font-bold  text-white rounded-lg" onClick={() => handelLogOut()}>Sign Out</button>
                </div>
                <img className=' m-2 p-2 w-16  rounded-full ' src={user.photoURL} alt="User Image"/>
              
            </div>
       )
        }
    </div>
  )
}

export default Header