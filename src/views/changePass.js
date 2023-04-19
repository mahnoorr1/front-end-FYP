import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import '../App.css';
import './changePass.css'

function ChangePass() {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <div className='background-changePass'>
          <div id='background'></div>
          <div className='change'>Change Password</div>
          <hr></hr>
          <div >
            <form className='input_column'>
              <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="Old Password.."
                type="password"
                required
                value={oldPass}
                onChange={e => setOldPass(e.target.value)}
              />
              <div className='break'></div>
              
              <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="New Password"
                type="password"
                required
                value={newPass}
                onChange={e => setNewPass(e.target.value)}
              />
              <div className='break'></div>
            <TextField
              className='field'
              InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label="Confirm Password"
                type="password"
                required
                value={confirmPass}
                onChange={e => setConfirmPass(e.target.value)}
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
              Confirm
            </Button>
            
            </form>
              
          </div>
        
        </div>
        
        
      </header>
    </div>
  );
}

export default ChangePass;


