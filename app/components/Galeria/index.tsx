import classes from './styles.module.css';
import Title from '../Title';

function Galeria() {
  return (
    <div className={classes.main}>
      <Title text="GALERIA DE FOTOS" altColor={true}/>
    </div>
  );
}

export default Galeria;