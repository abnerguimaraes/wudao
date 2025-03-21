import classes from './style.module.css';

function Title ({ text, altColor = false }) {
  return (
    <div className={`${classes.main} ${altColor ? classes.alt : null}`}>
      <div className={classes.hrCtn}>
        <hr className={classes.hrRed} />
        <hr className={altColor ? classes.altHrGreen : classes.hrGreen }/>
      </div>
      <span className={classes.text}>{ text }</span>
      <div className={classes.hrCtn}>
        <hr className={classes.hrRed} />
        <hr className={altColor ? classes.altHrGreen : classes.hrGreen }/>
      </div>
    </div>
  );
}

export default Title;