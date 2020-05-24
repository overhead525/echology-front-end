import React from 'react';
import { brandColors } from '../constants/brand';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: brandColors.purple,
    height: '1.5rem',
    width: '6rem',
    padding: '0.375rem',
    color: brandColors.pureWhite,
    textAlign: 'center',
    borderRadius: '1.5rem',
    lineHeight: '1.5rem',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
  linkReset: {
    textDecoration: 'none',
  },
}));

interface customButtonProps {
  buttonText: string;
  linkTo: string;
}

const SmallerCustomButon = (props: customButtonProps) => {
  const classes = useStyles();

  return (
    <Link to={props.linkTo} className={classes.linkReset}>
      <div className={classes.root}>{props.buttonText}</div>
    </Link>
  );
};

export default SmallerCustomButon;
