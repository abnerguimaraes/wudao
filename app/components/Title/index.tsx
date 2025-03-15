import classes from './style.module.css';
import Image from 'next/image';
import contorno from '@/public/contorno.png';

function Title ({ text, altColor = false }) {
  return (
    <div className={`${classes.main} ${altColor ? classes.alt : null}`}>
      <Image className={classes.contornoImg} alt="nada" src={contorno} />
      <span className={classes.text}>{ text }</span>
      <Image className={classes.contornoImg} alt="nada" src={contorno} />
    </div>
  );
}

export default Title;