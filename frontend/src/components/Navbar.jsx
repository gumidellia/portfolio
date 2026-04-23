import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-mark">AG</span>
          <span className="nav__brand-text">
            <span className="serif">Aryan Gumidelli</span>
            <span className="mono nav__brand-sub">cs.undergrad / 2026</span>
          </span>
        </Link>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav__link" + (isActive ? " nav__link--active" : "")
            }
            onClick={() => setOpen(false)}
          >
            <span className="mono nav__idx">01</span> Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              "nav__link" + (isActive ? " nav__link--active" : "")
            }
            onClick={() => setOpen(false)}
          >
            <span className="mono nav__idx">02</span> Projects
          </NavLink>
          <a
            className="nav__cta"
            href="mailto:gumidellia@gmail.com"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </a>
        </nav>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
