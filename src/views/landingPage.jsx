import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../components/createPlanComponents/button';

const LandingPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(to right, #0A323D, #121F27)',
        position: 'relative',
      }}
    >
      <img
        src={require('../landingBack.jpg')}
        alt="Background"
        style={{
          height: '99.4%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: 0,
          width: '100%',
          height: '40%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
        }}
      >
        <Button variant="contained" sx={{ 
          height: '45px',
          width: '10vw',
          borderRadius: '30px',
          bottom: '26vh',
          left: '92.5%',
          transform: 'translateX(-50%)',
          borderColor: '#45D69E',
          borderWidth: '2px',
          backgroundColor: '#45D69E',
          borderStyle: 'solid',
          fontWeight: 'bold',
          zIndex: 10,
          '&:hover': {
              backgroundColor: '#45D69E',
              width: '10.5vw',
            },
      }}
      onClick={()=>{window.location.href = '/signUp'}}
      >
          Sign Up
      </Button>
      <Button variant="contained" sx={{ 
          height: '45px',
          width: '10vw',
          borderRadius: '30px',
          bottom: '26vh',
          left: '71%',
          transform: 'translateX(-50%)',
          borderColor: '#45D69E',
          borderWidth: '3px',
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          fontWeight: 'bold',
          zIndex: 10,
          '&:hover': {
              backgroundColor: '#45D69E',
              width: '10.5vw',
            },
      }}
      onClick={()=>{window.location.href = '/signIn'}}
      >
          Sign In
      </Button>
      {/* Overlay content */}
      <div style = {{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignContent: 'center'
        }}>
          <Typography fontSize={42} fontWeight={'bold'} color={'white'} marginRight={'10px'}>
            Tired of Using 
          </Typography>
          <Typography fontSize={42} fontWeight={'bold'} color={'#45D69E'} marginRight={'10px'}>
             Man Power
          </Typography>
          <Typography fontSize={42} fontWeight={'bold'} color={'white'} marginRight={'10px'}>
            For  
          </Typography>
          <Typography fontSize={42} fontWeight={'bold'} color={'#45D69E'} marginRight={'10px'}>
             Demonstrating
          </Typography>
        </div>

        <div style = {{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignContent: 'center'
        }}>
          <Typography fontSize={42} fontWeight={'bold'} color={'white'} marginRight={'10px'}>
            and  
          </Typography>
          <Typography fontSize={42} fontWeight={'bold'} color={'#45D69E'} marginRight={'10px'}>
             Generating Plans
          </Typography>
          <Typography fontSize={42} fontWeight={'bold'} color={'white'} marginRight={'10px'}>
            ?
          </Typography>
        </div>

        <div style = {{
        display: 'flex',  
        justifyContent: 'center',
        alignContent: 'center'
        }}>
          <Typography alignContent={'center'} fontSize={24} fontWeight={500} color={'#C5C6D0'} marginRight={'10px'}>
            We are here to assist you to choose Legal areas for Legal Construction
          </Typography>
        </div>
        <div style = {{
        display: 'flex',  
        justifyContent: 'center',
        alignContent: 'center'
        }}>
          <Typography fontSize={24} fontWeight={500} color={'#C5C6D0'} marginRight={'10px'}>
             Plans Generations and Accessing Routes
          </Typography>
        </div>

      <Button variant="contained" sx={{ 
        height: '50px',
        width: '15vw',
        position: 'absolute',
        bottom: '-60px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#45D69E',
        zIndex: 10,
        '&:hover': {
            backgroundColor: '#45D69E',
            width: 285,
            height: 42,
          },
      }}
      onClick={()=>{window.location.href = '/signIn'}}
      >
          Explore
        </Button>
        {/* Content inside the overlay Box */}
      </Box>
    </Box>
  );
};

export default LandingPage;
