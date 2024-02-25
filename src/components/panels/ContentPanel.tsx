import { FC } from 'react';
import classes from './ContentPanel.module.css';
import StarButton from '../StarButton';
import star from '../../assets/starbucks-star.png';

interface ContentPanelProps {}

const ContentPanel: FC<ContentPanelProps> = (props) => {
  return (
    <div>
      <div className={classes.adtext}>
        <div className={classes.textwrapper}>
          <p className={classes.freecoffee}>FREE COFFEE IS A TAP AWAY</p>
          <p>Join now to start earning Rewards.</p>
          <StarButton buttonText="Join now" />
          <p>
            Or join <a>in the app</a> for the best experience
          </p>
        </div>
        <div className={classes.imageWrapper}>
          <img src={star} />
        </div>
      </div>
    </div>
  );
};

export default ContentPanel;
