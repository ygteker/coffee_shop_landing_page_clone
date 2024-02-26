import ExtrasItem from '../items/ExtrasItem';
import img1 from '../../assets/extras-1.webp';
import img2 from '../../assets/extras-2.webp';
import img3 from '../../assets/extras-3.webp';
import classes from './ExtrasPanel.module.css';

const title = 'Endless extras';
const text =
  'By joining Greenbox Rewards, you can unlock exclusive benefits. Enjoy free coffee, birthday treats, and coffee and tea refills.';
const extrasItems = [
  {
    imgSrc: img1,
    title: 'Exciting freebies',
    text: 'Not only can you earn free coffee, but also look forward to a special treat on your birthday and unlimited coffee and tea refills.',
  },
  {
    imgSrc: img2,
    title: 'Order & pay in advance',
    text: 'Experience the convenience of ordering and paying ahead for your favorite drinks. Choose in-store, curbside, or drive-thru pickup at select locations.',
  },
  {
    imgSrc: img3,
    title: 'Accelerate your rewards',
    text: 'Earn Stars faster with Bonus Star challenges, Double Star Days, and engaging games.',
  },
];

const ExtrasPanel = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.text}>{text}</p>
      <div className={classes.itemsWrapper}>
        {extrasItems.map((item) => (
          <ExtrasItem
            imgSrc={item.imgSrc}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ExtrasPanel;
