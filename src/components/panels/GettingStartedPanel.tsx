import React from 'react';
import { text } from 'stream/consumers';
import Step from '../items/Step';
import classes from './GettingStartedPanel.module.css';

const stepTexts = [
  {
    id: 1,
    title: 'Create an account',
    text: 'To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.',
  },
  {
    id: 2,
    title: 'Order and pay how you’d like',
    text: 'Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how',
  },
  {
    id: 3,
    title: 'Earn Stars, get Rewards',
    text: 'As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!',
  },
];

const GettingStartedPanel = () => {
  return (
    <div className={classes.root}>
      <h1>Getting started is easy</h1>
      <p>Earn Stars and get rewarded in a few easy steps.</p>
      <div className={classes.stepsWrapper}>
        {stepTexts.map((step) => (
          <Step order={step.id} header={step.title} description={step.text} />
        ))}
      </div>
    </div>
  );
};

export default GettingStartedPanel;
