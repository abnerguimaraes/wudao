"use client";

import { memo, useState, useEffect, useRef } from "react";
import { useStore } from "../../context/StoreContext";
import classes from "./style.module.css";
import routes from "./routes";
import NavItem from "../NavItem";
import NavSecLevel from "../NavSecLevel";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useStore();
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Atualiza pelo clique no menu (hashchange)
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || "#home";
      const label = routes.find((route) => route.path === currentHash)?.label || "Página desconhecida";

      dispatch({ type: "SET_ROUTE", payload: label });
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [dispatch]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const activeId = visibleSection.target.getAttribute("data-section");
          const activeRoute = routes.find((r) => r.path === `#${activeId}`)?.label || "Página desconhecida";

          dispatch({ type: "SET_ROUTE", payload: activeRoute });
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <section className={`${classes.main}`} ref={menuRef}>
      <button className={classes.menuButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <span className={classes.activePage}>
        {state.activeRoute || "Página desconhecida"}
      </span>
      <div className={`${classes.menu} ${isOpen ? classes.open : classes.closed}`}>
        {routes.map((item) =>
          item?.path ? (
            <NavItem key={item.name} item={item} navigated={() => setIsOpen(false)} />
          ) : (
            <NavSecLevel key={item.name} item={item} navigated={() => setIsOpen(false)} />
          )
        )}
      </div>
    </section>
  );
}

export default memo(Navbar);
