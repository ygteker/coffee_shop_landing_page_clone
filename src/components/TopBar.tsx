import { FC } from "react";
import classes from "./TopBar.module.css";
import logo from "../assets/image.svg";

const TopBar = () => {
  return (
    <div className={classes.topbar}>
      <img className={classes.logo} src={logo} />
    </div>
  );
};

export default TopBar;
