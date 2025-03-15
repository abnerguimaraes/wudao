import classes from './styles.module.css';
import Title from '../Title';

function Contato() {
 return (
  <div className={classes.main}>
    <div className={classes.titleDesk}>
      <Title  text="VENHA TREINAR COM A GENTE"/>
    </div>
    <div className={classes.titleMobile}>
      <Title text="VENHA TREINAR"/>
    </div>
    <div className={classes.contentCtn}>
      <div>H</div>
      <div>P</div>
      <div>C</div>
    </div>
  </div>
 );
}

export default Contato;