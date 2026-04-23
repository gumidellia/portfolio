import React from "react";
import { Link } from "react-router-dom";
import { Mail, Github, MapPin, ArrowUpRight } from "lucide-react";
import { profile, socials } from "../data/mock";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__lead">
          <div className="mono footer__label">// Let&apos;s build</div>
          <h3 className="serif footer__title">
            Have an idea, an internship, or a problem worth solving?
          </h3>
          <a
            className="footer__mail"
            href="mailto:gumidellia@gmail.com"
          >
            gumidellia@gmail.com
            <ArrowUpRight size={18} strokeWidth={1.6} />
          </a>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <div className="mono footer__heading">Contact</div>
            <ul>
              <li>
                <Mail size={14} strokeWidth={1.6} />
                <a href="mailto:gumidellia@gmail.com">
                  gumidellia@gmail.com
                </a>
              </li>
              <li>
                <Mail size={14} strokeWidth={1.6} />
                <a href="mailto:se23umcs006@mahindrauniversity.edu">
                  se23umcs006@mahindrauniversity.edu
                </a>
              </li>
              <li>
                <MapPin size={14} strokeWidth={1.6} />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="mono footer__heading">Navigate</div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><a href="mailto:gumidellia@gmail.com">Contact</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="mono footer__heading">Elsewhere</div>
            <ul>
              {socials.map((s) => (
                <li key={s.label}>
                  {s.label === "GitHub" && <Github size={14} strokeWidth={1.6} />}
                  {s.label === "Email" && <Mail size={14} strokeWidth={1.6} />}
                  {s.label === "LinkedIn" && <ArrowUpRight size={14} strokeWidth={1.6} />}
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bar container">
        <span className="mono">
          {`\u00A9 ${year} Aryan Gumidelli \u00b7 Built with React`}
        </span>
        <span className="mono footer__status">
          <span className="footer__dot" /> {`${profile.status} \u2014 ${profile.availability}`}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
