import React from 'react';
import classes from './FavoritesPanel.module.css';

interface FavoriteItemProps {
  title: string;
  text: string;
  imgSrc: string;
}

const FavoriteItem = (props: FavoriteItemProps) => {
  return (
    <div className={classes.root}>
      <img src={props.imgSrc} />
      <div className={classes.textWrapper}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default FavoriteItem;
