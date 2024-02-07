import exp from 'constants';
import classes from './ExtrasItem.module.css';

interface ExtrasItem {
  imgSrc: string;
  title: string;
  text: string;
}

const ExtrasItem = (props: ExtrasItem) => {
  return (
    <div>
      <img className={classes.image} src={props.imgSrc} />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default ExtrasItem;
