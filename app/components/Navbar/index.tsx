import  Image from 'next/image';
import { memo } from 'react'

import classes from './style.module.css'
import routes from './routes';
import menuLogo from '@/public/menuimg.jpeg'
import NavItem from '../NavItem';

function Navbar() {
  return (
    <section className={classes.main}>
      <Image className={classes.menuLogo} alt='logo' src={menuLogo} />
      { routes.map((item) => (
        <NavItem key={item.name} item={item}/>
      ))}
    </section>
  );
}

export default memo(Navbar)