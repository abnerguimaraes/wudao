'use client';
import { memo } from 'react'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './style.module.css';

function NavItem({ item, navigated }) {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <Link 
      className={`${classes.main} ${isActive ? classes.active : ''}`} 
      href={item.path}
      onClick={navigated}
    >
      {item.label}
    </Link>
  );
}

export default memo(NavItem);