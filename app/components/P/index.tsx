import classes from './style.module.css';

function P ({ text }) {
  return <p className={classes.main}>{text}</p>
}

export default P;