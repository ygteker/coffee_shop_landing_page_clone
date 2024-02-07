import ExtrasItem from '../items/ExtrasItem';
import img1 from '../../assets/extras-1.webp';
import img2 from '../../assets/extras-2.webp';
import img3 from '../../assets/extras-3.webp';
import classes from './ExtrasPanel.module.css';

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
    <div className={classes.wrapper}>
      {extrasItems.map((item) => (
        <ExtrasItem imgSrc={item.imgSrc} title={item.title} text={item.text} />
      ))}
    </div>
  );
};

export default ExtrasPanel;
