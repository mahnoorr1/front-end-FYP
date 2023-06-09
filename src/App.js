import './globe.png';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import SignUp from './views/signUp';
import SignIn from './views/signIn';
import OtherRoutes from './OtherRoutes';
import Payment from './views/Payment';
import RoadPlanMapView from './views/roadPlanAerialView';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/navbar';
import Profile from './views/profile';
import CreateRoadPlan from './views/createRoadPlan'
import LandingPage from './views/landingPage';
import PricingContent from './views/pricing';
import AllPlans from './views/allPlans/allRoadPlans';
import PaymentForm from './views/acceptPayment';
// import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:5000/'

const stripePromise = loadStripe('pk_test_51NAEw6Apl2m6sshaxUhU5fLcS4mc6g9Zrnq7rFbOAmzWyn2z3c4a175P7AY4hMKts0cbLUb2eoYchrRLKUBsAAfd005AZdXoZ0');


function App() {
  const location = useLocation();
  const shouldRenderNavbar =
    !location.pathname.includes('/profile') &&
    !location.pathname.includes('/signup') &&
    !location.pathname.includes('/payment') &&
    !location.pathname.includes('/signIn') &&
    location.pathname !== '/';
  
  return (
    <>
      {shouldRenderNavbar && <Navbar />}
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/payment" element={<Elements stripe={stripePromise}><PaymentForm /></Elements>} />
        <Route path='pricing' element = {<PricingContent/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createRoadPlan" element={<CreateRoadPlan />} />
        <Route path="/roadPlanMapView" element={<RoadPlanMapView />} />
        <Route path="/allRoadPlans" element={<AllPlans/>} />
        <Route path="/" element = {<LandingPage/>}></Route>
      </Routes>
    </>
  );

}

export default App;


