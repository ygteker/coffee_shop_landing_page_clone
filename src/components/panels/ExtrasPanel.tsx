import ExtrasItem from '../items/ExtrasItem';
import img1 from '../../assets/extras-1.webp';
import img2 from '../../assets/extras-2.webp';
import img3 from '../../assets/extras-3.webp';
import classes from './ExtrasPanel.module.css';

const title = 'Endless extras';
const text =
  'Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.';
const extrasItems = [
  {
    imgSrc: img1,
    title: 'Fun freebies',
    text: 'Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.',
  },
  {
    imgSrc: img2,
    title: 'Order & pay ahead',
    text: 'Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.',
  },
  {
    imgSrc: img3,
    title: 'Get to free faster',
    text: 'Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.',
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
