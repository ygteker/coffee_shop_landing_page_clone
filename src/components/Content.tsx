import React from 'react';
import classes from './Content.module.css';
import star from '../assets/starbucks-star.png';

const Content = () => {
  return (
    <div>
      <div className={classes.mainad}>
        <section>
          <h2>FREE COFFEE IS A TAP AWAY</h2>
          <h3>Join now to start earning Rewards.</h3>
          <button>Join now</button>
          <h4>
            Or join <a>in the app</a> for the best experience
          </h4>
        </section>
        <section>
          <img src={star}></img>
        </section>
      </div>
    </div>
  );
};

export default Content;
