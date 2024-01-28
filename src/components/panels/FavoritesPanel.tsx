import React from 'react';
import classes from './FavoritesPanel.module.css';
import FavoriteItem from './FavoriteItem';
import { useState } from 'react';
import img025 from '../../assets/025.png.webp';
import img100 from '../../assets/100.png.webp';
import img200 from '../../assets/200.png.webp';
import img300 from '../../assets/300.png.webp';
import img400 from '../../assets/400.png.webp';

const pointsList = [
  {
    id: 1,
    points: 25,
  },
  {
    id: 2,
    points: 100,
  },
  {
    id: 3,
    points: 200,
  },
  {
    id: 4,
    points: 300,
  },
  {
    id: 5,
    points: 400,
  },
];
const imageList = [
  {
    id: 1,
    title: 'Customize your drink',
    text: 'Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.',
    imageSrc: img025,
    alt: '25 points',
  },
  {
    id: 2,
    title: 'Brewed hot coffee, bakery item or hot tea',
    text: 'Pair coffee cake or an almond croissant with your fresh cup of hot brew.',
    imageSrc: img100,
    alt: '100 points',
  },
  {
    id: 3,
    title: 'Handcrafted drink, hot breakfast or parfait',
    text: 'Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.',
    imageSrc: img200,
    alt: '200 points',
  },
  {
    id: 4,
    title: 'Salad, sandwich or protein box',
    text: 'Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.',
    imageSrc: img300,
    alt: '300 points',
  },
  {
    id: 5,
    title: 'Select merchandise or at-home coffee',
    text: 'Take home a signature cup, a bag of coffee or your choice of select coffee accessories.',
    imageSrc: img400,
    alt: '400 points',
  },
];

const FavoritesPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <h1>Get your favorites for free</h1>
      <div className={classes.pointsWrapper}>
        {pointsList.map((point) => (
          <p onClick={() => setActiveTab(point.id - 1)}>{point.points}⭐️</p>
        ))}
      </div>
      <FavoriteItem
        title={imageList[activeTab].title}
        text={imageList[activeTab].text}
        imgSrc={imageList[activeTab].imageSrc}
      />
    </div>
  );
};

export default FavoritesPanel;
