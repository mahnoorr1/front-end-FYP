import './globe.png';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignUp from './views/signUp';
import SignIn from './views/signIn';
import Profile from './views/profile';
import CreateRoadPlan from './views/createRoadPlan';
import Navbar from './components/navbar';

import Payment from './views/Payment';


function App() {

  return(
    <>
    <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path='/Payment' element={<Payment />} />
      <Route path="/profile" element = {<Profile/>}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/createRoadPlan' element={<CreateRoadPlan />}/>
      </Routes>
    </>
  )

}

export default App;


