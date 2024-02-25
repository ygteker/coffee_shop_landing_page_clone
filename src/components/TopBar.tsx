import { FC } from 'react';
import classes from './TopBar.module.css';
import logo from '../assets/logo.png';

const TopBar = () => {
  return (
    <div className={classes.topbar}>
      <img className={classes.logo} src={logo} />
      <div className={classes.menu}>
        <a className={classes.active}>MENU</a>
        <a>REWARDS</a>
        <a>GIFT CARDS</a>
      </div>
    </div>
  );
};

export default TopBar;
