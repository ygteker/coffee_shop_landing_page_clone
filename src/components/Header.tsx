import { FC } from 'react';
import classes from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  return (
    <header className={classes.header}>
      <h2>STARBUCKS REWARDS</h2>
    </header>
  );
};

export default Header;
