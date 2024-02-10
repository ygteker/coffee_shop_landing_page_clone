import React from 'react';
import classes from './BenefitItem.module.css';
import { Divider } from '@mui/material';

interface BenefitItemProps {
  title: string;
  text: string;
  items: BenefitItemCell[];
}

interface BenefitItemCell {
  title: string;
  text: string;
  imgSrc: string;
}

const BenefitItem = (props: BenefitItemProps) => {
  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <div className={classes.itemWrapper}>
        {props.items.map((item) => {
          return (
            <React.Fragment>
              <div className={classes.cellWrapper}>
                <img src={item.imgSrc} alt={item.title} />
                <div className={classes.cellTextWrapper}>
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                </div>
              </div>
              <Divider orientation="horizontal" flexItem />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitItem;
