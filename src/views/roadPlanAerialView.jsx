import {useState, useContext} from 'react';
import './createRoadPlan.css'
import { Box, Typography, Paper, Grid, Divider } from '@material-ui/core';
import AerialMap from '../components/createPlanComponents/aerialViewMap';
import {RoadPlanContext} from '../context/roadPlanContext';

function RoadPlanMapView() {
  const [clickedComponent, setClickedComponent] = useState('');
  const { start, updateStart, end, updateEnd } = useContext(RoadPlanContext);

  const handleComponentClick = (component) => {
    setClickedComponent(component);
  };


  return (
    <>
    <Box className='back'>
      <Box className='back-image'>
        <Box>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Typography style={{ color: 'white' }} variant="h5" fontWeight="bold">
              Create New Road Plan
            </Typography>
          </Box>

          <Box className='back-blur'>
            <Box id='background'></Box>
            <Typography style={{ color: 'white', marginLeft: 15 }} variant="h5" fontWeight="bold" >
                Set on Map
            </Typography>
            <Divider style={{width: '40%', margin: 15, backgroundColor: '#246C7E'}}></Divider>
            <AerialMap height={'67vh'} width={'80%'}></AerialMap>
            
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}

export default RoadPlanMapView;
