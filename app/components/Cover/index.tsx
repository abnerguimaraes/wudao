import classes from './style.module.css';
import homeContent from '@/public/homeContent.png';

import Image from "next/image";

function Cover() {
  return (
    <div className={classes.main}>
      <Image className={classes.image} src={homeContent} alt='logo' />
    </div>
  );
}

export default Cover;