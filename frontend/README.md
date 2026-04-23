# Aryan Gumidelli — Portfolio

A modern, responsive personal portfolio built with **React**, **React Router (HashRouter)**, and plain CSS.

- **Live site**: https://gumidellia.github.io/portfolio
- **GitHub repo**: https://github.com/gumidellia/portfolio

---

## Tech stack

- React 19 + React Router (`HashRouter`)
- `NavLink` for active nav highlighting
- Plain CSS with CSS variables for theming
- `lucide-react` for icons
- Google Fonts: **Instrument Serif**, **Inter**, **JetBrains Mono**

## Project structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js                 # HashRouter + routes
│   ├── App.css                # Global tokens, buttons, sections
│   ├── index.js
│   ├── index.css
│   ├── assets/
│   │   └── profile.png        # Profile photo (swap this file to change)
│   ├── components/
│   │   ├── Navbar.jsx + .css  # NavLink, mobile menu
│   │   └── Footer.jsx + .css  # Contact + social links
│   ├── data/
│   │   └── mock.js            # All portfolio content lives here
│   └── pages/
│       ├── Home.jsx + .css    # Hero, About, Interests, Skills, Details
│       └── Projects.jsx + .css# Search + filter + project cards
└── package.json
```

## Run locally

```bash
cd frontend
yarn install
yarn start
# open http://localhost:3000
```

## Edit content

Everything is centralised in **`src/data/mock.js`**:

- Name, title, tagline
- About paragraph
- Research interests
- Personal details
- Skills (Programming, Web, Tools)
- Projects (title, description, tech, GitHub URL, year, role)
- Social links + portfolio GitHub / live URLs

To change the profile photo, just replace `src/assets/profile.png` with your image.

---

## Deploy to GitHub Pages

The project is pre-configured. Here are the exact commands:

### 1. Create an empty repo

Go to https://github.com/new and create a repo named **`portfolio`** under the `gumidellia` account.

### 2. Push the code

```bash
cd frontend
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/gumidellia/portfolio.git
git push -u origin main
```

### 3. Deploy

```bash
cd frontend
yarn deploy
```

This will run:
1. `predeploy` → `yarn build` (produces `/build`)
2. `deploy` → `gh-pages -d build` (pushes the build to a `gh-pages` branch)

### 4. Enable Pages

1. On GitHub, open your repo → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Pick branch **`gh-pages`** / folder **`/ (root)`** and **Save**

Your site will be live at:

> **https://gumidellia.github.io/portfolio**

---

## Why HashRouter?

GitHub Pages serves only static files with no server-side routing. Using `HashRouter` (URLs like `/#/projects`) makes direct-links and refresh work without 404s. `BrowserRouter` would require redirect hacks to behave correctly on GitHub Pages.

## Configured fields

In `frontend/package.json`:

```json
{
  "homepage": "https://gumidellia.github.io/portfolio",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^6.3.0"
  }
}
```

---

## Contact

- Email: **gumidellia@gmail.com**
- College: se23umcs006@mahindrauniversity.edu
- Phone: **+91 6300104532**
- Location: Hyderabad, India
