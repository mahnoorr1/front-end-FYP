import { useContext, useState } from 'react'; 
import './createRoadPlan.css'
import { Box, Typography, Paper, Grid, Button } from '@material-ui/core';
import SearchField from '../components/createPlanComponents/searchField';
import RoundedInput from '../components/createPlanComponents/roundedField';
import Map from '../components/createPlanComponents/Map';
import CustomButton from '../components/createPlanComponents/button';
import CheckBox from '../components/createPlanComponents/checkbox';
import Navbar from '../components/navbar';
import RoadPlanMapView from './roadPlanAerialView';
import Link from '@mui/material/Link';
import {RoadPlanContext, RoadPlanProvider} from '../context/roadPlanContext';

function CreateRoadPlan() {
  const [clickedComponent, setClickedComponent] = useState('');
  // Remove the useState declarations for start and end

  const { start, updateStart, end, updateEnd } = useContext(RoadPlanContext);
  const [area, setArea] = useState('Selected Area')


  const handleComponentClick = (component) => {
    setClickedComponent(component);
  };

  return (
    <>
    <Box className='back'>
      <Box className='back-image'>
        <Box>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Typography style={{ color: 'white' }} variant="h5" fontWeight="bold" color="#FF0000">
              Create New Road Plan
            </Typography>
            <Box>
              <SearchField />
            </Box>
          </Box>

          <Box className='back-blur'>
            <Box id='background'></Box>
            <RoundedInput colorr={"#0B5E6F"} clickable={false} label={area}></RoundedInput>
            <Grid container spacing={1}>
              <Grid item>
                <RoundedInput colorr={"#0B5E6F"} clickable={true} 
                label={start.lat == 0 ? "Start Loaction" : `lat:${start.lat.toFixed(4)}, lng:${start.lng.toFixed(4)}`} 
                onClick={() => handleComponentClick(start)} />
              </Grid>
              <Grid item>
                <RoundedInput colorr={"#0B5E6F"} clickable={true} 
                label={end.lat == 0 ? "End Location" : `lat:${end.lat.toFixed(4)}, lng:${end.lng.toFixed(4)}`} 
                onClick={() => handleComponentClick(end)} />
              </Grid>
            </Grid>
            <Map height={'45vh'} width={'60%'} />
            <Link href="/roadPlanMapView" variant="body2">
                  Aerial View
                </Link>
            <CheckBox/>
            <CustomButton label={"Generate Plan"} path={''}/>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}

export default CreateRoadPlan;
