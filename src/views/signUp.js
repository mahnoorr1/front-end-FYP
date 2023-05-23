import '../globe.png';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import  {registerUser}  from '../api/userAxiosApi';
import './signUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');
  const [fname, setFname] = useState('');
  const [fnameError, setFnameError] = useState('');
  const [lname, setLname] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');


  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email');
      return false;
    }
    setEmailError('');
    return true;
  };
  
  const validateName = (name, setError) => {
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(name)) {
      setError('Invalid name');
      return false;
    }
    setError('');
    return true;
  };
  
  const validatePhone = () => {
    const phonePattern = /^03[0-4]\d{8}$/;
    if (!phonePattern.test(phone)) {
      setPhoneError('Invalid phone number');
      return false;
    }
    setPhoneError('');
    return true;
  };
  
  const validatePasswords = () => {
    if (password !== confirmPass) {
      setConfirmPassError('Passwords do not match');
      return false;
    }
    setConfirmPassError('');
    return true;
  };
  

  const handleButtonClick = (event) => {
    event.preventDefault(); 
    // Prevents the default form submission behavior
  
    // Perform validation checks
    const isEmailValid = validateEmail();
    const isFirstNameValid = validateName(fname, setFnameError);
    const isLastNameValid = validateName(lname, setLnameError);
    const isPhoneValid = validatePhone();
    const arePasswordsValid = validatePasswords();
    console.log(email , " " , lname , " " , fname)
    if (isEmailValid && isFirstNameValid && isLastNameValid 
      && isPhoneValid && arePasswordsValid &&password != '') 
      {
        console.log('Inside If')
        registerUser(
          fname, lname, email, password, 'Male', './logo192.png', phone, false
          );
      }
  };
  
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
                style: { color: 'rgb(174, 193, 209)' },
              }}
              label="First Name"
              type="text"
              required
              value={fname}
              onChange={e => { setFname(e.target.value) }}
              error={fnameError !== ''}
              helperText={fnameError}
            />
              <div className='break-signUp'></div>
            <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)' },
              }}
              label="Last Name"
              type="text"
              required
              value={lname}
              onChange={e => { setLname(e.target.value) }}
              error={lnameError !== ''}
              helperText={lnameError}
/>
              <div className='break-signUp'></div>
              <TextField
                className='field'
                InputLabelProps={{
                  style: { color: 'rgb(174, 193, 209)' },
                }}
                label="Email"
                type="email"
                required
                value={email}
                onChange={e => { setEmail(e.target.value) }}
                error={emailError !== ''}
                helperText={emailError}
/>
              <div className='break-signUp'></div>
              <TextField
                className='field'
                InputLabelProps={{
                  style: { color: 'rgb(174, 193, 209)' },
                }}
                label="Phone Number"
                type="tel"
                required
                value={phone}
                onChange={e => { setPhone(e.target.value) }}
                error={phoneError !== ''}
                helperText={phoneError}
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
                  style: { color: 'rgb(174, 193, 209)' },
                }}
                label="Confirm Password"
                type="password"
                required
                value={confirmPass}
                onChange={e => { setConfirmPass(e.target.value) }}
                error={confirmPassError !== ''}
                helperText={confirmPassError}
/>
              <div className='break'></div>
            <Button
              //Gender Is missing that's why i used Male as default 
              //Image Upload Option is missing i used './logo192.png'
              onClick = {
                handleButtonClick
                    }
              style={{
                borderRadius: 10,
                padding: "10px 26px",
                fontSize: "16px",
                }}
              type="submit"
              fullWidth
              variant="outlined"
              sx= {{ 
                    mt: 2, 
                    mb: 2, 
                    color: 'white'
              }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2" color={"rgb(216, 232, 245)"}>
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


