import './globe.png';
import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom'

import SignUp from './views/signUp';
import SignIn from './views/signIn';
import Profile from './views/profile';
import Payment from './views/Payment';

function App() {

  return(
    <>
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path='/Payment' element={<Payment />} />
      <Route path="/profile" element = {<Profile/>}/>
      <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </>
  )

}

export default App;


