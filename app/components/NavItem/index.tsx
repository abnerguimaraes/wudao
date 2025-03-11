'use client';
import { memo } from 'react'

import { usePathname } from 'next/navigation';
import classes from './style.module.css';

function NavItem({ item, navigated }) {
  const pathname = usePathname();
  const isActive = pathname.replaceAll('/', '') === item.path.replaceAll('/', '');

  return (
    <a 
      className={`${classes.main} ${isActive ? classes.active : ''}`} 
      href={item.path}
      onClick={navigated}
    >
      {item.label}
    </a>
  );
}

export default memo(NavItem);