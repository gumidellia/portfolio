import React, { useState, useMemo } from "react";
import { Github, ArrowUpRight, Search, Filter, FolderGit2 } from "lucide-react";
import { projects } from "../data/mock";
import "./Projects.css";

const allTech = (items) => {
  const s = new Set();
  items.forEach((p) => p.tech.forEach((t) => s.add(t)));
  return ["All", ...Array.from(s)];
};

const Projects = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const techs = useMemo(() => allTech(projects), []);

  const filtered = projects.filter((p) => {
    const matchQ =
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase());
    const matchF = filter === "All" || p.tech.includes(filter);
    return matchQ && matchF;
  });

  return (
    <>
      <section className="proj-hero">
        <div className="container proj-hero__inner">
          <div className="section-label rise">Projects</div>
          <h1 className="proj-hero__title serif rise-2">
            Things I&apos;ve designed, built, and broken{" "}
            <span className="proj-hero__accent">on purpose.</span>
          </h1>
          <p className="proj-hero__intro rise-3">
            A small collection of projects — some academic, some personal
            — that reflect how I think about software, data, and
            problem-solving.
          </p>

          <div className="proj-controls rise-4">
            <label className="proj-search">
              <Search size={16} strokeWidth={1.8} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
              />
            </label>
            <div className="proj-filter">
              <Filter size={14} strokeWidth={1.8} />
              <div className="proj-filter__chips">
                {techs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`proj-chip ${filter === t ? "is-active" : ""}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="proj-meta mono">
            <span>
              <FolderGit2 size={14} strokeWidth={1.8} /> {filtered.length} of{" "}
              {projects.length} projects
            </span>
            <span>sorted · recent</span>
          </div>

          <div className="proj-grid">
            {filtered.map((p, i) => (
              <article key={p.id} className="proj-card">
                <div className="proj-card__head">
                  <span className="mono proj-card__idx">
                    0{i + 1} / 0{projects.length}
                  </span>
                  <span className="mono proj-card__year">{p.year}</span>
                </div>

                <div className="proj-card__cover">
                  <div className="proj-card__cover-grid">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="proj-card__cover-title serif">
                    {p.title.split(" ").slice(0, 2).join(" ")}
                  </div>
                </div>

                <h3 className="proj-card__title serif">{p.title}</h3>
                <div className="proj-card__tagline mono">{p.tagline}</div>
                <p className="proj-card__desc">{p.description}</p>

                <ul className="proj-card__tech">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="proj-card__foot">
                  <span className="mono proj-card__role">{p.role}</span>
                  <a
                    className="proj-card__link"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={15} strokeWidth={1.8} />
                    View on GitHub
                    <ArrowUpRight size={15} strokeWidth={1.8} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="proj-empty">
              <div className="serif proj-empty__title">No projects match that filter.</div>
              <p>Try clearing the search or selecting &quot;All&quot;.</p>
              <button
                className="btn btn-ghost"
                onClick={() => {
                  setQuery("");
                  setFilter("All");
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
