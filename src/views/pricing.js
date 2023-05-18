import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './pricing.css'

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      'Basic Usage',
      'Viewing Routes',
      'Viewing Projects & stats',
      'Help and Support',
    ],
    buttonText: 'GET STARTED',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    price: '15',
    description: [
      '10 Plans creation',
      'Viewing Routes',
      'Viewing Projects & stats',
      'Help and Support',
    ],
    buttonText: 'BUY PROGRAM',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
        '10 Plans creation',
        'Viewing Routes',
        'Viewing Projects & stats',
        'Help and Support',
    ],
    buttonText: 'BUY PROGRAM',
    buttonVariant: 'outlined',
  },
];


function PricingContent() {
  return (
    <React.Fragment >
    <div className='back'>
    
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 2}}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="white"
          gutterBottom
        >
          Subscription Plans
        </Typography>
        <Typography variant="h5" align="center" color="white" component="p">
          Subscribe your desired Plan
        </Typography>
      </Container>
      {/* End hero unit */}
      <div className='background-pricing'>
        <div id='background'></div>
      <Container maxWidth="md" component="main" >
        <Grid container spacing={5} >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /month
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="start"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <button className="button buy">
                    {tier.buttonText}
                  </button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className='skip'>Skip</div>
      </div>
      </div>
      
    </React.Fragment>
  );
}

export default PricingContent;