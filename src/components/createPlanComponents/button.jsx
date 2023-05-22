import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#37C790',
    width: 280,
    height: 40,
    marginTop: 20,
    marginLeft: 15,
    color: '#ffffff',
    fontWeight: 550,
    fontSize: 16,
    '&:hover': {
      backgroundColor: '#45D69E',
      width: 285,
      height: 42,
    },
  },
}));

const CustomButton = ({label}) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} variant="contained">
      {label}
    </Button>
  );
};

export default CustomButton;
