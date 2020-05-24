import React from 'react';
import { brandColors } from '../constants/brand';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: brandColors.purple,
    height: '2rem',
    width: '8rem',
    padding: '0.5rem',
    color: brandColors.pureWhite,
    textAlign: 'center',
    borderRadius: '2rem',
    lineHeight: '2rem',
    fontWeight: 'bold',
  },
  linkReset: {
    textDecoration: 'none',
  },
}));

interface customButtonProps {
  buttonText: string;
}

const CustomButton = (props: customButtonProps) => {
  const classes = useStyles();

  return (
    <Link to='/landing' className={classes.linkReset}>
      <div className={classes.root}>{props.buttonText}</div>
    </Link>
  );
};

export default CustomButton;
