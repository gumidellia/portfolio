import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Sparkles,
  Code2,
  Wrench,
  Globe2,
} from "lucide-react";
import {
  profile,
  about,
  researchInterests,
  personalDetails,
  skills,
} from "../data/mock";
import "./Home.css";

const skillIcon = (group) => {
  if (group === "Programming") return <Code2 size={16} strokeWidth={1.6} />;
  if (group === "Web Development") return <Globe2 size={16} strokeWidth={1.6} />;
  return <Wrench size={16} strokeWidth={1.6} />;
};

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <div className="hero__tag rise">
              <span className="hero__dot" />
              <span className="mono">{profile.availability}</span>
            </div>

            <h1 className="hero__title rise-2">
              <span className="serif hero__name">{profile.name}</span>
              <span className="hero__role">
                {profile.title}
                <span className="hero__slash mono">{"  /  "}</span>
                <span className="hero__role-soft">{profile.subtitle}</span>
              </span>
            </h1>

            <p className="hero__intro rise-3">{profile.intro}</p>

            <div className="hero__cta rise-4">
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} strokeWidth={1.8} />
              </Link>
              <a href="#about" className="btn btn-ghost">
                About me <ArrowUpRight size={16} strokeWidth={1.8} />
              </a>
            </div>

            <div className="hero__meta rise-4">
              <span className="mono">
                <MapPin size={14} strokeWidth={1.6} /> {profile.location}
              </span>
              <span className="hero__sep" />
              <span className="mono">
                <GraduationCap size={14} strokeWidth={1.6} /> Mahindra University
              </span>
              <span className="hero__sep" />
              <span className="mono">{"B.Tech CS \u00b7 3rd Year"}</span>
            </div>
          </div>

          <div className="hero__card rise-3">
            <div className="hero__card-head">
              <div className="hero__avatar" aria-label="Profile">
                <span className="serif">{profile.initials}</span>
              </div>
              <div>
                <div className="hero__card-name serif">Aryan Gumidelli</div>
                <div className="hero__card-sub mono">@aryangumidelli</div>
              </div>
              <span className="hero__badge">
                <Sparkles size={12} strokeWidth={1.8} /> 2026
              </span>
            </div>
            <div className="hero__card-body">
              <div className="hero__stat">
                <div className="mono hero__stat-k">focus</div>
                <div className="hero__stat-v">{"AI \u00b7 Backend \u00b7 Data"}</div>
              </div>
              <div className="hero__stat">
                <div className="mono hero__stat-k">stack</div>
                <div className="hero__stat-v">{"Python \u00b7 React \u00b7 Node"}</div>
              </div>
              <div className="hero__stat">
                <div className="mono hero__stat-k">learning</div>
                <div className="hero__stat-v">Distributed systems</div>
              </div>
            </div>
            <div className="hero__card-foot mono">
              <span>status</span>
              <span className="hero__card-status">
                <span className="hero__dot hero__dot--green" />
                {profile.status.toLowerCase()} for internships
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container about">
          <div className="about__left">
            <div className="section-label">About</div>
            <h2 className="section-title serif">
              Building software that is useful, not just impressive.
            </h2>
          </div>
          <div className="about__right">
            <p className="about__body">{about.body}</p>
            <div className="about__signature mono">
              {"\u2014 Aryan, writing from Hyderabad"}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section className="section">
        <div className="container">
          <div className="section-label">Research Interests</div>
          <h2 className="section-title serif">Areas I&apos;m actively exploring.</h2>
          <div className="interests">
            {researchInterests.map((r, i) => (
              <div className="interest" key={r.label}>
                <span className="mono interest__idx">0{i + 1}</span>
                <div>
                  <div className="interest__label">{r.label}</div>
                  <div className="interest__hint mono">{r.hint}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL DETAILS */}
      <section className="section">
        <div className="container details">
          <div>
            <div className="section-label">Personal Details</div>
            <h2 className="section-title serif">The quick facts.</h2>
            <p className="section-intro">
              If you&apos;d like to reach out for a collaboration, internship,
              or just to say hi {"\u2014"} here&apos;s the quickest way to find me.
            </p>
            <div className="details__actions">
              <a className="btn btn-primary" href="mailto:aryangumidelli@gmail.com">
                <Mail size={16} strokeWidth={1.8} /> Email me
              </a>
              <a className="btn btn-ghost" href="tel:+91">
                <Phone size={16} strokeWidth={1.8} /> Call
              </a>
            </div>
          </div>
          <div className="details__card">
            <div className="details__grid">
              {personalDetails.map((d) => (
                <div className="details__row" key={d.k}>
                  <div className="mono details__k">{d.k}</div>
                  <div className="details__v">{d.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-label">Skills</div>
          <h2 className="section-title serif">
            Languages, frameworks, and tools I reach for.
          </h2>
          <div className="skills">
            {skills.map((s) => (
              <div className="skill" key={s.group}>
                <div className="skill__head">
                  <span className="skill__icon">{skillIcon(s.group)}</span>
                  <span className="skill__group">{s.group}</span>
                </div>
                <ul className="skill__list">
                  {s.items.map((item) => (
                    <li className="skill__chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section cta">
        <div className="container cta__inner">
          <div>
            <div className="section-label">Projects</div>
            <h2 className="section-title serif">
              See what I&apos;ve been building.
            </h2>
            <p className="section-intro">
              From dashboards powered by GPT to AI study tools {"\u2014"} here are
              the things I&apos;ve shipped.
            </p>
          </div>
          <Link to="/projects" className="btn btn-primary cta__btn">
            Explore projects <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
