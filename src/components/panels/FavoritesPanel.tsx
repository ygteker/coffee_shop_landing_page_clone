import React from 'react';
import classes from './FavoritesPanel.module.css';
import FavoriteItem from '../items/FavoriteItem';
import { useState } from 'react';
import img025 from '../../assets/025.png';
import img100 from '../../assets/100.png';
import img200 from '../../assets/200.png';
import img300 from '../../assets/300.png';
import img400 from '../../assets/400.png';

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
    title: 'Personalize your beverage',
    text: 'Make your drink just the way you like it with an extra shot of espresso, your preferred dairy substitute, or a touch of your favorite syrup.',
    imageSrc: img025,
    alt: '25 points',
  },
  {
    id: 2,
    title: 'Hot brewed coffee, bakery item, or tea',
    text: 'Pair your freshly brewed cup of coffee with a delicious coffee cake or an almond croissant.',
    imageSrc: img100,
    alt: '100 points',
  },
  {
    id: 3,
    title: 'Handcrafted beverage, hot breakfast, or parfait',
    text: 'Start your day off right with a handcrafted drink, a satisfying breakfast sandwich, or a healthy parfait.',
    imageSrc: img200,
    alt: '200 points',
  },
  {
    id: 4,
    title: 'Salad, sandwich, or protein box',
    text: 'Fuel your day with a nutritious Chipotle Chicken Wrap or an Eggs & Cheese Protein Box.',
    imageSrc: img300,
    alt: '300 points',
  },
  {
    id: 5,
    title: 'Choose merchandise or enjoy coffee at home',
    text: 'Take home a signature a coffee cup, a bag of coffee, or select coffee accessories of your choice.',
    imageSrc: img400,
    alt: '400 points',
  },
];

const FavoritesPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={classes.root}>
      <h1>Get your favorites for free</h1>
      <div className={classes.pointsWrapper}>
        {pointsList.map((point) => (
          <p
            className={
              activeTab === point.id - 1
                ? classes.pointTextActive
                : classes.pointText
            }
            onClick={() => setActiveTab(point.id - 1)}
          >
            {point.points}⭐️
          </p>
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
