import NavItem from '../NavItem';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import classes from './style.module.css';

function NavSecLevel({ item, navigated }) {
  const [isOpen, setIsOpen] = useState(false);
  const secRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = item.sub.some(item => pathname === item.path);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (secRef.current && !secRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const setNavigated = () => {
    setIsOpen(false);
    navigated();
  }

  return (
    <section className={`${classes.main} ${isActive ? classes.active : ''}`} ref={secRef}>
      <button
        type="button"
        onMouseDown={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen)}
        className={classes.label}
      >
        {item.label}
      </button>
      {isOpen && (
        <button className={classes.subMenuCtn} onMouseDown={(e) => e.stopPropagation()}>
          {item.sub.map((subItem) => (
            <NavItem key={subItem.name} item={subItem} navigated={() => setNavigated()} />
          ))}
        </button>
      )}
    </section>
  );
}

export default NavSecLevel;
