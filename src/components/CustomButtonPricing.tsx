import React from 'react';
import { brandColors } from '../constants/brand';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: brandColors.purple,
    height: '3rem',
    width: '12rem',
    padding: '0.5rem',
    color: brandColors.pureWhite,
    textAlign: 'center',
    borderRadius: '2rem',
    lineHeight: '3rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '3rem',
  },
  linkReset: {
    textDecoration: 'none',
  },
}));

interface customButtonProps {
  buttonText: string;
  linkTo: string;
}

const CustomButtonPricing = (props: customButtonProps) => {
  const classes = useStyles();

  return (
    <Link to={props.linkTo} className={classes.linkReset}>
      <div className={classes.root}>{props.buttonText}</div>
    </Link>
  );
};

export default CustomButtonPricing;
