import React from 'react';
import { text } from 'stream/consumers';
import Step from '../items/Step';
import classes from './GettingStartedPanel.module.css';

const stepTexts = [
  {
    id: 1,
    title: 'Sign up for an account',
    text: 'To get started, sign up now. You can also join in the app to access the full range of Greenbox Rewards benefits.',
  },
  {
    id: 2,
    title: 'Order and pay your way',
    text: "Use cash, credit/debit card, or save time and pay directly through the app. You'll earn Stars with every purchase. Learn more",
  },
  {
    id: 3,
    title: 'Earn Stars and enjoy Rewards',
    text: 'As you accumulate Stars, you can redeem them for Rewards—such as free food, drinks, and more. Start redeeming with just 25 Stars!',
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
