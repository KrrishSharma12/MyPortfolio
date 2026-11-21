import repoMindImage from "./assets/repomind.png";
import syncChatImage from "./assets/syncchat.png";
import careerLensImage from "./assets/proj-careerlens.jpg";
import swayamImage from "./assets/proj-swayam.jpg";

export const PROFILE = {
  email: "krrishxtech@gmail.com",
  github: "https://github.com/KrrishSharma12",
  linkedin: "https://www.linkedin.com/in/krish-sharma-47126b325",
  leetcode: "https://leetcode.com/u/Krish__Sharma/",
  resume: "Krrish_Sharma_Full_Stack_Developer_Resume.pdf", // put your PDF in /public/resume.pdf
};
export const NAV = [
  ["home", "home"], ["about-me", "about-me"], ["skills", "skills"],
  ["projects", "projects"], ["education-and-journey", "journey"], ["contacts", "contacts"],
];
export const SKILLS = {
  Languages: ["Java", "C", "C++", "Python", "JavaScript", "TypeScript"],
  Frontend: ["HTML", "CSS", "React.js", "Next.js"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
  Tools: ["Git", "GitHub", "Docker", "Postman"],
  "AI & Development": ["Gemini API", "RAG", "Embeddings", "Vector Search", "AI Integration"],
};
const G = PROFILE.github + "/";
export const PROJECTS = [
  {
    name: "RepoMind AI", live: "https://repomind.krrishlabs.tech/", gh: G + "RepoMind-AI",
    desc: "An AI app where developers sign in with GitHub and chat with their repository in plain English. Answers cite exact files and line numbers.",
    stack: "Next.js TypeScript PostgreSQL pgvector Gemini API",
    image: repoMindImage,
    points: ["RAG pipeline with Gemini embeddings and pgvector", "Hybrid search (vector + keyword), streamed replies", "AI pull request reviewer via GitHub webhooks", "150+ Vitest tests, GitHub Actions CI",

    ]
  },
  {
    name: "SyncChat", live: "https://syncchatt.vercel.app/", gh: G + "SyncChat",
    desc: "A real-time messaging app with live presence, typing indicators and unread counts.",
    stack: "React TypeScript Node.js Socket.IO Prisma PostgreSQL",
    image: syncChatImage,
    points: ["JWT access and refresh tokens, Google OAuth, OTP email", "Responsive dark and light UI"]
  },
  {
    name: "CareerLens", live: "https://career-lens-bykrish.vercel.app/login", gh: G + "CareerLens",
    desc: "An AI resume analyzer that compares your resume with a job description, finds skill gaps and builds a learning roadmap and interview questions.",
    stack: "React Node.js Express MongoDB Gemini API",
    image: careerLensImage,
    points: ["MVC-style Express backend", "Analytics dashboard in React"]
  },
  {
    name: "Swayam Fest Website", live: "https://www.swayammvjce.cc/", gh: G + "Swayam",
    desc: "The live website for the college fest, with event browsing, registrations and Razorpay payments. Built in a 4-person agile team.",
    stack: "React Node.js Express PostgreSQL Supabase Razorpay",
    points: ["Supabase row-level security, OAuth 2.0 login", "My part: frontend and payment integration"],
    image: swayamImage

  },
];
export const JOURNEY = [
  ["Started B.E. in Computer Science", "Built the core: data structures, algorithms, OOP, DBMS, operating systems and networks."],
  ["Learned full stack development", "React, Node.js, Express and PostgreSQL, with REST APIs and authentication."],
  ["Built SyncChat", "Real-time messaging with Socket.IO, JWT auth, Google OAuth and OTP verification."],
  ["Led the web team at Swayam fest", "Shipped the live fest site with registrations and Razorpay payments in a 4-person agile team."],
  ["Moved into AI-powered apps", "CareerLens with the Gemini API, then RepoMind AI with RAG, pgvector and an AI PR reviewer."],
  ["Now: sharpening the fundamentals", "DSA on LeetCode (200+ solved), system design, Docker, Kubernetes, AWS and microservices."],
];
