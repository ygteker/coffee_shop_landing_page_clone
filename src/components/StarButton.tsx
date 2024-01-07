import React from 'react';
import classes from './StarButton.module.css';

interface ButtonProps {
  buttonText: string;
}

const StarButton = (props: ButtonProps) => {
  return <button className={classes.starbutton}>{props.buttonText}</button>;
};

export default StarButton;
