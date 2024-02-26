import classes from './BenefitsPanel.module.css';
import BenefitItem from '../items/BenefitItem';
import img1 from '../../assets/benefit1.png';
import img2 from '../../assets/benefit2.png';
import img3 from '../../assets/benefit3.png';
import img4 from '../../assets/benefit4.png';

const title = 'Cash or card, you earn stars';
const text =
  'No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.';
const cells = [
  {
    title: '1⭐️ Star per dollar',
    text: 'Pay as you go',
    items: [
      {
        title: 'Convenient payment options',
        text: "Choose how you want to pay, whether it's with cash, credit/debit card, or through the app.",
        imgSrc: img1,
      },
      {
        title: 'Fast and easy check-out',
        text: 'Save your payment information in the app for quicker check-out. Order ahead or scan and pay at the register seamlessly.',
        imgSrc: img2,
      },
    ],
  },
  {
    title: '2⭐️ Stars for every dollar spent',
    text: 'Add funds through the app',
    items: [
      {
        title: 'Preload your digital Greenbox Card',
        text: 'Save time and earn Stars twice as fast by adding money to your digital Greenbox Card using any payment option. Scan and pay in one step or order ahead in the app.',
        imgSrc: img3,
      },
      {
        title: 'Register your gift card',
        text: 'Use your gift card to pay through the app. You can even consolidate balances from multiple cards in one place.',
        imgSrc: img4,
      },
    ],
  },
];

const BenefitsPanel = () => {
  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className={classes.cellWrapper}>
        {cells.map((cell) => {
          return (
            <BenefitItem
              title={cell.title}
              text={cell.text}
              items={cell.items}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BenefitsPanel;
