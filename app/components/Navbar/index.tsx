"use client";

import Image from "next/image";
import { memo, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "../../context/StoreContext";
import classes from "./style.module.css";
import routes from "./routes";
import menuLogo from "@/public/logo.png";
import NavItem from "../NavItem";
import NavSecLevel from "../NavSecLevel";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useStore();
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (pathname && state.activeRoute !== pathname) {
      let label = '';
      routes.forEach((route) => {
        if (route.path?.replaceAll('/', '') === pathname.replaceAll('/', '')) {
          label = route.label;
        }

        if (route?.sub?.length !== undefined) {
          route.sub.forEach((sub) => {
            if (sub.path?.replaceAll('/', '') === pathname.replaceAll('/', '')) {
              label = sub.label;
            }
          });
        }
      });

      dispatch({ type: "SET_ROUTE", payload: label });
    }
  }, [pathname, dispatch, state.activeRoute]);

  return (
    <section className={classes.main} ref={menuRef}>
      <button className={classes.menuButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <span className={classes.activePage}>
        { state.activeRoute || "Página desconhecida"}
      </span>
      <Image className={classes.menuLogo} alt="logo" src={menuLogo} />
      <div className={`${classes.menu} ${isOpen ? classes.open : classes.closed}`}>
        {routes.map((item) =>
          item?.path ? (
            <NavItem key={item.name} item={item} navigated={() => setIsOpen(false)} />
          ) : (
            <NavSecLevel key={item.name} item={item} navigated={() => {setIsOpen(false)}} />
          )
        )}
      </div>
    </section>
  );
}

export default memo(Navbar);
