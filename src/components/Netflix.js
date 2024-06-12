import React from 'react'
import Login from './Login.js'
import Browse from './Browse.js'
import { Routes, Route } from 'react-router-dom'

const Netflix = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/browse" element={<Browse/>}></Route>
      </Routes>
  )
}

export default Netflix