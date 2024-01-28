import React from 'react';
import classes from './Step.module.css';

interface StepProps {
  order: number;
  header: string;
  description: string;
}

const Step = (props: StepProps) => {
  return (
    <div>
      <p>{props.order}</p>
      <p className={classes.header}>{props.header}</p>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default Step;
