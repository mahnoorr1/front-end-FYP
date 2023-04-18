import './globe.png';
import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import SignUp from './views/signUp';
import SignIn from './views/signIn';
import './App.css';

function App() {

  return(
    <>
      <Routes>
      <Route path="/" element={<SignIn />} />

        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </>
  )

}

export default App;


