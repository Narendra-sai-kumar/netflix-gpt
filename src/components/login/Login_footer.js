import React from 'react'

const Login_footer = () => {
  return (
        <div className='w-fulll bg-black text-gray-300 pt-56 pb-12 text-sm'  >
          <p className='w-3/4 m-auto'>Questions? Call 000-800-919-1694</p>
          <div className='flex flex-wrap  w-3/4 m-auto' >
              
                <a className='w-1/2  sm:w-1/2 lg:w-1/4 underline  py-2 my-2' href=''>FAQ</a>
                <a className='w-1/2  sm:w-1/2 lg:w-1/4 underline  py-2 my-2' href=''>Help Centre</a>
                <a className='w-1/2  sm:w-1/2 lg:w-1/4 underline  py-2 my-2' href=''>Terms of Use</a>
                <a className='w-1/2  sm:w-1/2 lg:w-1/4 underline  py-2 my-2' href=''>Privacy</a>
                <a className='w-1/2  sm:w-1/2 lg:w-1/4 underline  py-2 my-2' href=''>Cookie Preferences</a>
                <a className='w-1/2  sm:w-1/2 lg:w-1/4 underline  py-2 my-2' href=''>Corporate Information</a>
          </div>
          <div className='w-3/4 mx-auto my-4'>  
            <select className='py-2 px-4 bg-black border-gray-100 border-2 rounded-md'>
              <option vlaue='english'>English</option>
              <option value='hindi'>Hindi</option>
            </select>
          </div>
        </div>
  )
}

export default Login_footer