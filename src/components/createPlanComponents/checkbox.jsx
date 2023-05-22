import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#6F8C92',
  },
}));
const CheckBox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();
  return (
    <div>
      <Checkbox
        className={classes.root}
        checked={checked}
        onChange={handleCheckboxChange}
        color="#6F8C92"
        inputProps={{ 'aria-label': 'example checkbox' }}
      />
      <label style={{color: '#6F8C92'}} htmlFor="example-checkbox">Keep the project Private</label>
    </div>
  );
};

export default CheckBox;
