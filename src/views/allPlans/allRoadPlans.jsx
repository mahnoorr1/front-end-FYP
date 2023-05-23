import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Box, Link } from "@mui/material";
import '../createRoadPlan.css';
import { Typography } from '@material-ui/core';
import SearchField from "../../components/createPlanComponents/searchField";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const AllPlans = () => {
  return (
    <>
    <Box className='backColor'>
      <Box className='back-image'>
        <Box>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Typography style={{ color: 'white' }} variant="h5" fontWeight="bold" color="#FF0000">
              All Road Plans
            </Typography>
            <Box>
              <SearchField />
            </Box>
          </Box>
          <Box className='back-blur'>
            <Box id='background'></Box>
                <Typography style={{ color: 'white' }} variant="h5" fontWeight="bold" color="#FF0000">
                    Featured Plans
                </Typography>
            <div style ={{
                fontFamily: 'sans-serif',
                display: 'flex',
                alignItems: 'center',
                height: '60vh',
            }}>
                <Carousel breakPoints={breakPoints}>
                <div style = {{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    width: '30vw',
                    borderColor: '#45D69E',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    margin: '5px'
                    }}>
                    <img style={{
                        height: '30vh', 
                        width: '25vw',
                        marginTop: '5px',
                        }} src={require("../../landingBack.jpg")}></img>
                    <Typography style={{ color: 'white' }} variant="h5" fontWeight="bold" color="#FF0000">
                        Noori Road Plan
                    </Typography>    
                    <div style = {{height: '1px', backgroundColor: '#45D69E', width: '90%'}}></div>   
                    <Box sx={{
                        height: '35px',
                        width: '60%',
                        borderColor: '#45D69E',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderRadius: '20px',
                        marginTop: '8px',
                        display: 'flex',
                        alignSelf: 'center',
                        marginLeft: '15px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography style = {{
                            color: '#45D69E',
                            marginTop: '5px', 
                        }} variant="h7" fontWeight="bold" >
                            Area: Karachi Korangi
                        </Typography> 
                    </Box>
                    <Link style = {{
                        color: '#45D69E',
                        fontSize: '18px',
                        marginTop: '15px'
                    }} href = '#'>
                        View Details
                    </Link>
                    
                </div>
                <div style = {{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    width: '30vw',
                    borderColor: '#45D69E',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    margin: '5px'
                    }}>
                    <img style={{
                        height: '30vh', 
                        width: '25vw',
                        marginTop: '5px',
                        }} src={require("../../landingBack.jpg")}></img>
                    <Typography style={{ color: 'white' }} variant="h5" fontWeight="bold" color="#FF0000">
                        Noori Road Plan
                    </Typography>    
                    <div style = {{height: '1px', backgroundColor: '#45D69E', width: '90%'}}></div>   
                    <Box sx={{
                        height: '35px',
                        width: '60%',
                        borderColor: '#45D69E',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderRadius: '20px',
                        marginTop: '8px',
                        display: 'flex',
                        alignSelf: 'center',
                        marginLeft: '15px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography style = {{
                            color: '#45D69E',
                            marginTop: '5px', 
                        }} variant="h7" fontWeight="bold" >
                            Area: Karachi Korangi
                        </Typography> 
                    </Box>
                    <Link style = {{
                        color: '#45D69E',
                        fontSize: '18px',
                        marginTop: '15px'
                    }} href = '#'>
                        View Details
                    </Link>
                    
                </div>
                <div style = {{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    width: '30vw',
                    borderColor: '#45D69E',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    margin: '5px'
                    }}>
                    <img style={{
                        height: '30vh', 
                        width: '25vw',
                        marginTop: '5px',
                        }} src={require("../../landingBack.jpg")}></img>
                    <Typography style={{ color: 'white' }} variant="h5" fontWeight="bold" color="#FF0000">
                        Noori Road Plan
                    </Typography>    
                    <div style = {{height: '1px', backgroundColor: '#45D69E', width: '90%'}}></div>   
                    <Box sx={{
                        height: '35px',
                        width: '60%',
                        borderColor: '#45D69E',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderRadius: '20px',
                        marginTop: '8px',
                        display: 'flex',
                        alignSelf: 'center',
                        marginLeft: '15px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography style = {{
                            color: '#45D69E',
                            marginTop: '5px', 
                        }} variant="h7" fontWeight="bold" >
                            Area: Karachi Korangi
                        </Typography> 
                    </Box>
                    <Link style = {{
                        color: '#45D69E',
                        fontSize: '18px',
                        marginTop: '15px'
                    }} href = '#'>
                        View Details
                    </Link>
                    
                </div>
                <div style = {{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    width: '30vw',
                    borderColor: '#45D69E',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    margin: '5px'
                    }}>
                    <img style={{
                        height: '30vh', 
                        width: '25vw',
                        marginTop: '5px',
                        }} src={require("../../landingBack.jpg")}></img>
                    <Typography style={{ color: 'white' }} variant="h5" fontWeight="bold" color="#FF0000">
                        Noori Road Plan
                    </Typography>    
                    <div style = {{height: '1px', backgroundColor: '#45D69E', width: '90%'}}></div>   
                    <Box sx={{
                        height: '35px',
                        width: '60%',
                        borderColor: '#45D69E',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderRadius: '20px',
                        marginTop: '8px',
                        display: 'flex',
                        alignSelf: 'center',
                        marginLeft: '15px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography style = {{
                            color: '#45D69E',
                            marginTop: '5px', 
                        }} variant="h7" fontWeight="bold" >
                            Area: Karachi Korangi
                        </Typography> 
                    </Box>
                    <Link style = {{
                        color: '#45D69E',
                        fontSize: '18px',
                        marginTop: '15px'
                    }} href = '#'>
                        View Details
                    </Link>
                    
                </div>
                </Carousel>
            </div>
            </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}


const Item = () => {
    <div style = {{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      width: '30vw',
      borderColor: '#45D69E',
      borderStyle: 'solid',
      borderWidth: '2px',
      color: '#fff',
      margin: '0 15px',
      fontSize: '4em',
    }}>
      
    </div>
}
export default AllPlans;