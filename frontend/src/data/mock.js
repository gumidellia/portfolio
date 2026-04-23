// Mock data for the portfolio website (frontend-only phase)
import profileImg from "../assets/profile.png";

export const profile = {
  name: "Aryan Gumidelli",
  initials: "AG",
  title: "Computer Science Undergraduate",
  subtitle: "Aspiring Software Engineer",
  intro:
    "I build practical software at the intersection of backend systems, AI, and data \u2014 currently exploring intelligent automation, full-stack engineering, and systems that learn from the real world.",
  location: "Hyderabad, India",
  availability: "Open to Summer 2026 Internships",
  status: "Available",
  // To change the profile picture, replace /app/frontend/src/assets/profile.png
  photo: profileImg,
};

export const about = {
  body:
    "I am a third-year Computer Science student at Mahindra University with a strong interest in software development, artificial intelligence, and building practical technology solutions. I enjoy developing projects that combine backend systems, data processing, and intelligent automation \u2014 shipping things that are not only technically sound, but genuinely useful.",
};

export const researchInterests = [
  { label: "Artificial Intelligence", hint: "LLMs, reasoning, agents" },
  { label: "Machine Learning", hint: "Applied ML pipelines" },
  { label: "Software Engineering", hint: "Scalable, maintainable systems" },
  { label: "Full Stack Web Development", hint: "React, Node, APIs" },
  { label: "Data-driven Systems", hint: "Analytics \u00b7 automation" },
];

export const personalDetails = [
  { k: "Name", v: "Aryan Gumidelli" },
  { k: "Phone", v: "+91 6300104532" },
  { k: "Personal Email", v: "gumidellia@gmail.com" },
  { k: "College Email", v: "se23umcs006@mahindrauniversity.edu" },
  { k: "University", v: "Mahindra University" },
  { k: "Degree", v: "B.Tech in Computer Science" },
  { k: "Year", v: "3rd Year" },
  { k: "Location", v: "Hyderabad, India" },
];

export const skills = [
  {
    group: "Programming",
    items: ["Python", "JavaScript", "C++", "Java"],
  },
  {
    group: "Web Development",
    items: ["React", "HTML", "CSS", "Node.js"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "MongoDB", "MySQL"],
  },
];

export const projects = [
  {
    id: "alumni-alert",
    title: "Alumni Alert Intelligence Dashboard",
    tagline: "RSS \u2192 GPT insights \u2192 Dashboard",
    description:
      "A system that collects alumni event data using RSS feeds, processes it with GPT-based analysis, and displays curated insights in an interactive dashboard.",
    tech: ["PHP", "MySQL", "GPT API", "RSS Parsing"],
    github: "https://github.com/gumidellia/alumni-alert-dashboard",
    year: "2024",
    role: "Full-stack",
  },
  {
    id: "ai-study-assistant",
    title: "AI Study Assistant",
    tagline: "Revise \u00b7 Summarize \u00b7 Answer",
    description:
      "An AI-powered study assistant designed to help students revise concepts, generate summaries, and answer academic questions across subjects using NLP and lightweight ML models.",
    tech: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/gumidellia/ai-study-assistant",
    year: "2024",
    role: "Solo build",
  },
];

export const portfolioLinks = {
  github: "https://github.com/gumidellia/portfolio",
  live: "https://gumidellia.github.io/portfolio",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/gumidellia" },
  { label: "Portfolio Repo", href: "https://github.com/gumidellia/portfolio" },
  { label: "Live Site", href: "https://gumidellia.github.io/portfolio" },
  { label: "Email", href: "mailto:gumidellia@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-gumidelli" },
];
