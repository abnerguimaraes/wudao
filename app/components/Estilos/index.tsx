import classes from './style.module.css'
import estilos from '@/public/estilos.png';
import logoPB from '@/public/logoBW.png';

import Image from "next/image";

function Estilos() {
  return (
    <div className={classes.main}>
      <Image className={classes.image} src={estilos} alt="estilos" />
      <div className={classes.imgContentCtn}>
        <Image className={classes.imgLogoPB} src={logoPB} alt="logo preto e branco" />
        <span>content</span>
      </div>
    </div>
  );
}

export default Estilos;