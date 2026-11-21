# 🚀 Krish Sharma — Full Stack Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-5.3.0-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v22-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Resend](https://img.shields.io/badge/Resend-Email_API-black?style=flat&logo=resend&logoColor=white)](https://resend.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, responsive personal developer portfolio with a sleek terminal-inspired aesthetic, interactive project showcases, scroll-driven animations, and a dedicated Express.js email backend powered by the Resend API.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Backend Setup](#1-backend-setup)
  - [2. Frontend Setup](#2-frontend-setup)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Contact & Profile](#-contact--profile)

---

## 🌟 Overview

This monorepo contains both the **Frontend** (React + Vite single-page application) and **Backend** (Express REST API with Resend integration) for Krish Sharma's personal developer portfolio.

The portfolio is designed to showcase engineering expertise across full-stack development, real-time applications, AI systems (RAG, Gemini API), and computer science fundamentals.

---

## ✨ Key Features

### 🖥️ Frontend (React + Vite)
- **Terminal & Code Aesthetic**: Modern dark theme inspired by code editors with syntax highlighting accents, window frames, and cursor animations.
- **Dynamic Navigation**: Smooth scrolling with active section indicator powered by `IntersectionObserver`.
- **Hero Section**: Highlighting full-stack capabilities, LeetCode stats (200+ solved), quick action CTAs, and a direct resume download trigger.
- **Categorized Skills Grid**: Structured skill tags across *Languages*, *Frontend*, *Backend*, *Databases*, *Tools*, and *AI & Development*.
- **Interactive Projects Showcase**: Detailed cards with screenshots, tech stack tags, architecture points, live application demos, and GitHub repository links:
  - **RepoMind AI**: GitHub RAG app with vector search & AI PR reviewer.
  - **SyncChat**: Real-time messaging with Socket.IO, JWT auth, and OTP verification.
  - **CareerLens**: AI resume analyzer with roadmap generation via Gemini API.
  - **Swayam Fest Website**: Production event portal with Supabase RLS and Razorpay payments.
- **Education & Journey Timeline**: Interactive timeline visualizing academic milestones at MVJ College of Engineering (B.E. CSE, 8.79 CGPA) and project growth.
- **Interactive Contact Form**:
  - Live client-side input validation and error prompts.
  - Character counter for messages.
  - One-click email copy-to-clipboard with visual feedback.
  - Direct API submission to the backend with fallback mailto support.

### ⚙️ Backend (Node.js + Express)
- **Modular Architecture**: Clean separation between server setup (`server.js`), application routing (`app.js`), and email services (`sendEmail.js`).
- **Resend Email Service**: Delivers inquiries sent through the contact form directly to the recipient's inbox.
- **Branded HTML Email Template**: Beautiful dark-mode responsive email format with HTML entity escaping to prevent XSS.
- **CORS Configured**: Secure cross-origin resource sharing tailored for frontend access.
- **Vercel Serverless Ready**: Includes `vercel.json` configuration for one-click serverless backend deployment.

---

## 🛠️ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Frontend** | React 18, Vite 5, JavaScript (ES Modules), CSS3 (Custom Properties & Flexbox/Grid) |
| **Backend** | Node.js (v22+), Express.js 5, Resend SDK, CORS, Dotenv |
| **Security & Email** | Resend API, HTML Escaping / XSS Sanitization, Input Validation |
| **Deployment** | Vercel (Serverless Functions for Backend & Static Hosting for Frontend) |

---

## 📂 Project Architecture

```plaintext
krish-portfolio-react/
│
├── Backend/                            # Express backend service
│   ├── .env                            # Backend environment configuration
│   ├── app.js                          # Express app configuration & API routes
│   ├── emailTemplate.js                # HTML template generator for contact emails
│   ├── package.json                    # Backend dependencies & metadata
│   ├── sendEmail.js                    # Resend API integration logic
│   ├── server.js                       # Local HTTP server entry point (port 4000)
│   └── vercel.json                     # Vercel serverless deployment config
│
├── Frontend/                           # React + Vite client application
│   ├── public/                         # Static assets (Resume PDF, icons)
│   │   └── Krrish_Sharma_Full_Stack_Developer_Resume.pdf
│   ├── src/
│   │   ├── assets/                     # Project screenshots & profile images
│   │   ├── components/                 # Modular React UI components
│   │   │   ├── About.jsx               # About Me section with expand toggle
│   │   │   ├── Contact.jsx             # Interactive contact form with validation
│   │   │   ├── Footer.jsx              # Footer with social links & back-to-top
│   │   │   ├── Hero.jsx                # Landing hero banner with terminal widget
│   │   │   ├── Journey.jsx             # Education & milestone timeline
│   │   │   ├── Nav.jsx                 # Sticky responsive navigation bar
│   │   │   ├── Projects.jsx            # Project gallery with live links
│   │   │   ├── Section.jsx             # Section wrapper layout component
│   │   │   └── Skills.jsx              # Categorized technical skills matrix
│   │   ├── App.jsx                     # Root React component
│   │   ├── data.js                     # Portfolio data (profile, projects, skills, journey)
│   │   ├── hooks.js                    # Custom hooks (IntersectionObserver reveal)
│   │   ├── main.jsx                    # React DOM entry point
│   │   └── styles.css                  # Global styles and responsive design
│   ├── .env                            # Frontend environment configuration
│   ├── index.html                      # HTML document shell
│   ├── package.json                    # Frontend dependencies & scripts
│   └── vite.config.js                  # Vite build configuration
│
└── README.md                           # Main documentation
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version **18.x** or higher, recommended v20+ or v22)
- [npm](https://www.npmjs.com/) (bundled with Node.js) or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)

---

### 1. Backend Setup

The backend handles the email contact form using the Resend API.

```bash
# Navigate to the backend directory
cd Backend

# Install dependencies
npm install

# Create or verify your .env file
# Add your Resend API Key:
# RESEND_API_KEY=re_your_api_key_here

# Start the server
node server.js
```

The backend server will run on `http://localhost:4000`.

---

### 2. Frontend Setup

```bash
# In a new terminal, navigate to the frontend directory
cd Frontend

# Install dependencies
npm install

# Create or verify your .env file
# Point the contact endpoint to the running backend:
# VITE_CONTACT_ENDPOINT=http://localhost:4000/send-email

# Start the Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

---

## 🔐 Environment Variables

### Backend (`Backend/.env`)

| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Your API key obtained from [Resend](https://resend.com/) | `re_123456789...` |

### Frontend (`Frontend/.env`)

| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `VITE_CONTACT_ENDPOINT` | Full URL of the backend email endpoint | `http://localhost:4000/send-email` |

> 💡 **Note**: If `VITE_CONTACT_ENDPOINT` is omitted or empty, the frontend gracefully falls back to opening the client's default email application with prefilled message details.

---

## 📡 API Reference

### Health Check
- **Endpoint**: `GET /`
- **Description**: Verifies that the backend service is up and running.
- **Response**:
  ```text
  Hello from the backend!
  ```

### Send Email
- **Endpoint**: `POST /send-email`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Opportunity Discussion",
    "message": "Hi Krish, I would love to connect regarding a full-stack role."
  }
  ```
- **Validation**:
  - All four fields (`name`, `email`, `subject`, `message`) are required.
- **Responses**:
  - `200 OK`:
    ```json
    {
      "message": "Email sent successfully",
      "reply": { ... }
    }
    ```
  - `400 Bad Request`:
    ```json
    {
      "message": "All fields are required"
    }
    ```
  - `500 Internal Server Error`:
    ```json
    {
      "message": "Failed to send email",
      "error": { ... }
    }
    ```

---

## 🎨 Customization Guide

All portfolio content is organized in `Frontend/src/data.js` for quick and centralized updates:

1. **Profile & Social Links**:
   Update `PROFILE` with your email, GitHub, LinkedIn, and LeetCode handles.
2. **Resume PDF**:
   Replace `Krrish_Sharma_Full_Stack_Developer_Resume.pdf` in `Frontend/public/` with your resume file and ensure the filename in `data.js` matches.
3. **Projects**:
   Add or modify entries in `PROJECTS` (project name, description, live link, GitHub link, tech stack, key bullets, and preview image).
4. **Skills**:
   Update the `SKILLS` object categories and skill tags to match your current proficiency.
5. **Career Journey**:
   Update the `JOURNEY` array to reflect new experiences, achievements, and milestones.
6. **Recipient Email**:
   Update the destination email in `Backend/sendEmail.js` (`to: ['your-email@example.com']`).

---

## 🚢 Deployment

### Frontend (Vercel / Netlify)
1. Build the static site:
   ```bash
   cd Frontend
   npm run build
   ```
2. Deploy the generated `Frontend/dist` directory to **Vercel**, **Netlify**, or **GitHub Pages**.
3. Set the environment variable `VITE_CONTACT_ENDPOINT` in your hosting dashboard to point to your deployed production backend API.

### Backend (Vercel Serverless)
The backend includes a pre-configured `vercel.json`:
1. Connect your repository to Vercel and set the root directory to `Backend`.
2. Add your `RESEND_API_KEY` under **Environment Variables** in the Vercel dashboard.
3. In `Backend/app.js`, update CORS origins with your deployed frontend domain.

---

## 👨‍💻 Contact & Profile

- **Author**: Krish Sharma
- **GitHub**: [@KrrishSharma12](https://github.com/KrrishSharma12)
- **LinkedIn**: [Krish Sharma](https://www.linkedin.com/in/krish-sharma-47126b325)
- **LeetCode**: [Krish__Sharma](https://leetcode.com/u/Krish__Sharma/)
- **Email**: [krrishxtech@gmail.com](mailto:krrishxtech@gmail.com)

---

*Made with ❤️ by Krish Sharma.*
