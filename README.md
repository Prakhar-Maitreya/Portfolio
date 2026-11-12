# Prakhar Maitreya Parashar — Developer Portfolio

> A modern, professional software engineering portfolio built with Next.js, React, and Tailwind CSS.

🌐 **Live:** [portfolio-prakhar-maitreya-parashar.vercel.app](https://portfolio-prakhar-maitreya-parashar.vercel.app)
💻 **Repository:** [github.com/Prakhar-Maitreya/Portfolio](https://github.com/Prakhar-Maitreya/Portfolio)

---

## Overview

This is the personal developer portfolio of **Prakhar Maitreya Parashar**, a Computer Science undergraduate at Lovely Professional University (2023–2027). The portfolio presents my experience, projects, skills and certifications relevant to a Software Engineering internship, with a focus on backend development, Java/Spring Boot, Python/Django, REST APIs and developer tooling.

---

## Technology Stack

| Category        | Technologies                              |
|-----------------|------------------------------------------|
| Framework       | Next.js 16 (App Router)                  |
| UI Library      | React 19                                 |
| Language        | JavaScript (ES6+)                        |
| Styling         | Tailwind CSS v4                          |
| Animations      | Framer Motion                            |
| Icons           | Lucide React                             |
| Deployment      | Vercel (connected to GitHub main branch) |

---

## Features

- **Hero Section** — Name, role typewriter, CTA buttons (View Projects, Contact Me, Download CV), social links
- **About** — Education at LPU, CGPA, prior schooling, career objective
- **Technical Skills** — Programming Languages, Frameworks & Technologies, Developer Tools, Core Concepts
- **Featured Projects** — Library Management REST API (Java/Spring Boot) and Employee Management System (Python/Django)
- **Training & Experience** — CipherSchools Full Stack Development Training with clear context
- **Certifications** — Three verified certifications from CipherSchools and Coursera
- **Contact** — Social links + contact form (opens mail client with pre-filled message)
- **Footer** — Social links, branding and copyright
- **Responsive** — Mobile, tablet and desktop layouts
- **SEO** — Page metadata, Open Graph tags, semantic HTML

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind v4 theme + global styles
│   ├── layout.js          # Root layout (metadata, fonts, Navbar)
│   └── page.js            # Home page (section composition)
├── components/
│   ├── Navbar.js          # Fixed top navigation with active-section tracking
│   ├── Footer.js          # Footer with social links
│   ├── sections/
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Certifications.js
│   │   └── Contact.js
│   └── ui/
│       ├── Button.js
│       ├── SectionWrapper.js
│       ├── AnimatedCard.js
│       └── Toast.js
public/
└── assets/
    ├── pfp.jpg                          # Profile photo
    ├── PrakharMaitreyaParasharCV.pdf    # CV (download link target)
    └── project-employee.jpg             # Employee portal screenshot
```

---

## Getting Started

### Prerequisites

- Node.js v18+ (v22 recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## CV File

The CV download button links to `/public/assets/PrakharMaitreyaParasharCV.pdf`.

Place your CV PDF at:

```
public/assets/PrakharMaitreyaParasharCV.pdf
```

The file is already present in the repository.

---

## Deployment (Vercel)

This project is deployed on **Vercel**, connected to the `main` branch of the GitHub repository.

- Every push to `main` triggers an automatic deployment.
- No environment variables are required for the current configuration.
- The build command is `next build`; the output directory is handled automatically by Vercel.

To deploy manually via Vercel CLI:

```bash
npx vercel --prod
```

---

## Content Accuracy

All content in this portfolio — projects, skills, certifications, training experience and personal information — reflects accurately verified information from the developer's CV. No claims are fabricated or inflated.

---

## License

This project is personal and not licensed for reuse. Please do not use it as a template without permission.
