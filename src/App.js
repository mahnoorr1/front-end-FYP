import './globe.png';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignUp from './views/signUp';
import SignIn from './views/signIn';
import OtherRoutes from './OtherRoutes';



function App() {

  return(
    <>
    
      <Routes>
      <Route path="/" element={<SignIn />} />
       <Route path='/signup' element={<SignUp />}/>
      <Route path='/*' element={<OtherRoutes />} />
      </Routes>
    </>
  )

}

export default App;


