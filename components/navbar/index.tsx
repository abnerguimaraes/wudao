import Link from 'next/link';
import Image from 'next/image';
import Style from './style.module.css';
import menuIcon from './menuimg.jpeg';

function Navbar () {
  return (
    <nav className={Style.main}>
      <Image className={Style.navLogo} src={menuIcon} alt="Menu Icon" />
      <ul className={Style.navItem}>
        <Link href="/">home</Link>
      </ul>
      <ul className={Style.navItem}>
        <Link href="/">localizaçao</Link>
      </ul>
      <ul className={Style.navItem}>
        <Link href="/">horários</Link>
      </ul>
      <ul className={Style.navItem}>
        <Link href="/">estilos</Link>
      </ul>
      <ul className={Style.navItem}>
        <Link href="/">fotos</Link>
      </ul>
      <ul className={Style.navItem}>
        <Link href="/">contato</Link>
      </ul>
    </nav>
  );
}


export default Navbar;