import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './views/profile';
import CreateRoadPlan from './views/createRoadPlan';
import Navbar from './components/navbar';

import Payment from './views/Payment';


function OtherRoutes() {

    return(
      <>
       <Navbar></Navbar>
        <Routes>
        <Route path='/' >
            <Route path='/Payment' element={<Payment />} />
            <Route path="/profile" element = {<Profile/>}/>
            <Route path='/createRoadPlan' element={<CreateRoadPlan />}/>
        </Route>
        </Routes>
      </>
    )
  
}
export default OtherRoutes;