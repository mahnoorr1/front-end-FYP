import './globe.png';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import SignUp from './views/signUp';
import SignIn from './views/signIn';
import Profile from './views/profile';
import CreateRoadPlan from './views/createRoadPlan';
import Navbar from './components/navbar';

import Payment from './views/Payment';
import RoadPlanMapView from './views/roadPlanAerialView';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


function App() {
  const location = useLocation();
  const shouldRenderNavbar = !location.pathname.includes('/profile')||
  location.pathname.includes('/signup');
  return(
    <>
    {shouldRenderNavbar && <Navbar />}
      <Routes>
      <Route path="/" element={<CreateRoadPlan />} />
      <Route path='/Payment' element={<Elements stripe={stripePromise}><Payment /></Elements>} />
      <Route path="/profile" element = {<Profile/>}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/createRoadPlan' element={<CreateRoadPlan />}/>
      <Route path='/roadPlanMapView' element={<RoadPlanMapView/>}/>
      </Routes>
    </>
  )

}

export default App;


