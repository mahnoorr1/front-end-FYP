import './globe.png';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./globe.png')} className="App-logo"/>
        <div className='background'>
          <div id='background'></div>
          <div className='sign'>Sign In</div>
          <hr></hr>
          <div >
            <form className='input_column'>
              <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="Email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <div className='break'></div>
              
              <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="Password"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <FormControlLabel
              control={<Checkbox value="remember" sx = {{color: 'white'}}/>}
              label="Remember me"
              className = "remember"
            />
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color={"rgb(216, 232, 245)"}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color={"rgb(216, 232, 245)"}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            </form>
              
          </div>
        
        </div>
        
        
      </header>
    </div>
  );
}

export default App;


