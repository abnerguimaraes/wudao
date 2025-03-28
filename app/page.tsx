import classes from './style.module.css';
import Cover from './components/Cover';
import Estilos from './components/Estilos';
import Mestres from './components/Mestres';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';

export default function Home() {
  return (<section className={classes.main}>
    <div className={classes.content}>
      <section id="inicio" data-section="inicio">
        <Cover />
      </section>
      <section id="styles" data-section="styles">
        <Estilos />
      </section>
      <section id="mestres" data-section="mestres">
        <Mestres />
      </section>
      <section id="photos" data-section="photos">
        <Galeria />
      </section>
      <section id="contato" data-section="contato">
        <Contato />
      </section>
      <section id="localizacao" data-section="localizacao">
        <Localizacao />
      </section>
      <section>
        <Footer />
      </section>  
    </div>
  </section>);
}
