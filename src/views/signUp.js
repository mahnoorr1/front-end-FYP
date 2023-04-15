import '../globe.png';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import '../App.css';
import './signUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [ConfirmPass, setConfirmPass] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('../globe.png')} className="App-logo"/>
        <div className='background-signUp'>
          <div id='background'></div>
          <div className='sign'>Sign Up</div>
          <hr></hr>
            <form className='input_column'>
            <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="First Name"
                type="text"
                required
                value={fname}
                onChange={e => {setFname(e.target.value)}}
              />
              <div className='break-signUp'></div>
              <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="Last Name"
                type="text"
                required
                value={lname}
                onChange={e => {setLname(e.target.value)}}
              />
              <div className='break-signUp'></div>
              <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="Email"
                type="email"
                required
                value={email}
                onChange={e => {setEmail(e.target.value)}}
              />
              <div className='break-signUp'></div>
              <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="Phone Number"
                type="tel"
                required
                value={phone}
                onChange={e => {setPhone(e.target.value)}}
              />
              <div className='break-signUp'></div>
              <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="Password"
                type="password"
                required
                value={password}
                onChange={e => {setPassword(e.target.value)}}
              />
              <div className='break-signUp'></div>
              <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="Confirm Password"
                type="password"
                required
                value={ConfirmPass}
                onChange={e => {setConfirmPass(e.target.value)}}
              />
              <div className='break'></div>
            <Button 
            
              style={{
                borderRadius: 10,
                padding: "10px 26px",
                fontSize: "16px",
            }}
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 2, mb: 2, color: 'white'}}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" color={"rgb(216, 232, 245)"}>
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            </form>
              
        
        </div>
        
        
      </header>
    </div>
  );
}

export default SignUp;


