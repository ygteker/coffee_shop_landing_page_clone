import classes from './BenefitsPanel.module.css';
import BenefitItem from '../items/BenefitItem';
import img1 from '../../assets/benefit1.png';
import img2 from '../../assets/benefit2.png';
import img3 from '../../assets/benefit3.png';
import img4 from '../../assets/benefit4.png';

const cells = [
  {
    title: '1⭐️ Star per dollar',
    text: 'Pay as you go',
    items: [
      {
        title: 'Scan and pay separately',
        text: 'Use cash or credit/debit card at the register.',
        imgSrc: img1,
      },
      {
        title: 'Save payment in the app',
        text: 'Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.',
        imgSrc: img2,
      },
    ],
  },
  {
    title: '2⭐️ Star per dollar',
    text: 'Add funds in the app',
    items: [
      {
        title: 'Preload',
        text: 'To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.',
        imgSrc: img3,
      },
      {
        title: 'Register your gift card',
        text: 'Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.',
        imgSrc: img4,
      },
    ],
  },
];

const BenefitsPanel = () => {
  return (
    <div className={classes.root}>
      {cells.map((cell) => {
        return (
          <BenefitItem title={cell.title} text={cell.text} items={cell.items} />
        );
      })}
    </div>
  );
};

export default BenefitsPanel;
