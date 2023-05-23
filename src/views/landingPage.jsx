import { Box, Button } from '@mui/material';
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
