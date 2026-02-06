# sumPRO Job Portal – Frontend

A modern, production-ready **Job Portal frontend** built with **React + Vite + Tailwind CSS**, designed for scalability, performance, and a clean recruiter & job-seeker experience.

This repository contains the **frontend application** for the sumPRO Job Portal platform.

---

## 🚀 Tech Stack

* **React 19+** – Component-based UI
* **Vite** – Fast build & dev server
* **Tailwind CSS v4+** – Utility-first styling
* **shadcn/ui** – Accessible,eusable UI components
* **Lucide-react** – Modern icon set
* **Axios** – API communication
* **React Router DOM** – Client-side routing

---

## 📁 Project Structure

```txt
frontend/
├── public/
├── src/
│   ├── assets/            # Images, icons, static assets
│   ├── components/        # Reusable UI components
│   │   ├── Auth/          # Login / Signup / OTP flows
│   │   ├── Common/        # Shared components
│   │   ├── Employer
│   │   ├── Footer
│   │   ├── Hero
│   │   ├── Jobs/          # Job listing & filters
│   │   ├── Navbar/        # Navbar & dropdowns
│   │   ├── profile
│   │   └── Recruiter/     # Recruiter-specific components
│   ├── context
│   ├── hooks
│   ├── Layouts
│   ├── pages/             # Route-level pages
│   ├── services/          # API services
│   ├── utils/             # Helper utilities
│   ├── App.jsx            # App root
│   └── main.jsx           # Entry point
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

## ✨ Features

### 👤 Authentication

* Login & Signup modals
* Role-based flows (Job Seeker / Recruiter)
* Email & Phone OTP verification
* Password strength validation

### 🧑‍💼 Recruiter Flow

* Recruiter signup & onboarding
* Company verification (multi-step)
* Recruiter dashboard components

### 🔍 Job Seeker Flow

* Job listings
* Job filters
* Job seeker profile page

### 🎨 UI / UX

* Responsive design
* Clean, professional layout
* Modular & reusable components
* Accessible UI via shadcn

---

## ⚙️ Environment Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sumproin/job_portel_frontend.git
cd job_portel_frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env` file using `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

### 4️⃣ Run the development server

```bash
npm run dev
```

App will run at:
👉 `http://localhost:5173`

---

## 🔌 Backend Integration

This frontend is designed to work with a **Django REST Framework backend**.

Expected backend features:

* JWT Authentication
* OTP verification APIs
* Recruiter & Job Seeker role handling
* Job CRUD APIs

Backend repo (example):

```
https://github.com/sumproin/job_portel_backend
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🌍 Deployment

Recommended platforms:

* **Vercel** (preferred)
* Netlify
* AWS Amplify

Vercel settings:

* Build Command: `npm run build`
* Output Directory: `dist`
* Framework Preset: `Vite`

---

## 🧪 Code Quality & Best Practices

* Component-based architecture
* Clean folder separation
* No hardcoded API URLs
* Reusable UI primitives
* Ready for scaling to large teams

---

## 📌 Roadmap

* [ ] Recruiter dashboard
* [ ] Job posting & management
* [ ] Saved jobs
* [ ] Notifications
* [ ] Admin panel

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit changes with clear messages
4. Open a pull request

---

## 📄 License

This project is **private / proprietary** to sumPRO.

---

## 👨‍💻 Author

rituraj981

If you have questions or need backend integration help, feel free to reach out.


# extra
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
