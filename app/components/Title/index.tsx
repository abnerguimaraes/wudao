import classes from './style.module.css';

function Title ({ text }) {
  return <h1 className={classes.main}>{text}</h1>
}

export default Title;