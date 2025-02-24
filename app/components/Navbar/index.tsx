"use client";

import Image from "next/image";
import { memo, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "../../context/StoreContext";
import classes from "./style.module.css";
import routes from "./routes";
import menuLogo from "@/public/menuimg.jpeg";
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
      dispatch({ type: "SET_ROUTE", payload: pathname });
    }
  }, [pathname, dispatch, state.activeRoute]);

  return (
    <section className={classes.main} ref={menuRef}>
      <button className={classes.menuButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <span className={classes.activePage}>
        {routes.find((r) => `${r.path}/` === state.activeRoute)?.label || "Página desconhecida"}
      </span>
      <Image className={classes.menuLogo} alt="logo" src={menuLogo} />
      <div className={`${classes.menu} ${isOpen ? classes.open : classes.closed}`}>
        {routes.map((item) =>
          item?.path ? (
            <NavItem key={item.name} item={item} navigated={() => setIsOpen(false)} />
          ) : (
            <NavSecLevel key={item.name} item={item} navigated={() => {}} />
          )
        )}
      </div>
    </section>
  );
}

export default memo(Navbar);
