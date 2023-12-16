import { FC } from "react";
import classes from "./Header.module.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  return <header className={classes.header}></header>;
};

export default Header;
