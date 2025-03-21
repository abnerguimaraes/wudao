import Title from "../Title";
import classes from './styles.module.css';

function Localizacao() {
  return (
    <div className={classes.main}>
      <Title text="Localização" altColor={true} />
      <iframe
        title="Google Maps"
        width="100%"
        height="100%"
        className={classes.mainMap}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.9047590455387!2d-46.7847229!3d-23.538326099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf02210905c50b%3A0x94f7e3a1620ad8c4!2sAv.%20C%C3%A9sar%20Abra%C3%A3o%2C%20211%20-%20Vila%20Osasco%2C%20Osasco%20-%20SP%2C%2006086-170!5e0!3m2!1sen!2sbr!4v1710458123456!5m2!1sen!2sbr&z10"
      ></iframe>
    </div>
  );
}

export default Localizacao

//, 