import { useEffect, useState } from "react";
import { PROFILE } from "../data";
export default function Hero() {
  const [in_, setIn] = useState(false);
  useEffect(() => { const r = requestAnimationFrame(() => setIn(true)); return () => cancelAnimationFrame(r); }, []);
  const rv = (d, className = "") => ({
    className: `${className} rv${in_ ? " in" : ""}`.trim(),
    style: { "--d": d },
  });
  return (
    <header className="hero" id="home">
      <div className="wrap">
        <div>
          <p {...rv(0, "tag")}>Krish — Full Stack Developer &amp; Problem Solver.</p>
          <h1 {...rv(1)}>Building ideas into <em>real-world applications.</em></h1>
          <p {...rv(2, "sub")}>I’m a Computer Science student and Full Stack Developer passionate about building modern web applications, solving problems and exploring new technologies.</p>
          <div {...rv(3, "cta")}>
            <a className="btn" href="#projects">Explore Projects</a>
            <a className="btn ghost" href={PROFILE.resume} download="Krish_Sharma_Full_Stack_Developer_Resume.pdf">Download Resume</a>
          </div>
          <div {...rv(4, "socials")}>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={PROFILE.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
          </div>
          <div {...rv(5, "solved")}><strong>200+</strong><span>Problems Solved On Leetcode</span></div>
        </div>
        <div {...rv(3, "vis")} aria-hidden="true">
          <div className="sq float" style={{ width: 90, height: 90, left: 0, top: 0 }}></div>
          <div className="sq" style={{ width: 50, height: 50, left: 36, top: 30 }}></div>
          <div className="dots" style={{ right: 0, bottom: 60 }}></div>
          <div className="term">
            <div className="bar"><s></s><s></s><s></s>&nbsp;krish.ts</div>
            <pre>
              <span className="k">const</span> krish = {"{"}{"\n"}  role: <span className="k">"Full Stack Developer"</span>,{"\n"}  stack: [<span className="k">"Next.js"</span>, <span className="k">"Node"</span>,{"\n"}          <span className="k">"PostgreSQL"</span>],{"\n"}  solving: <span className="k">"200+ problems"</span>,{"\n"}{"};"}{"\n"}<span className="c">// building next…</span><span className="cur"></span>
            </pre>
          </div>
          <div className="status">Currently <b style={{ color: "var(--hi)" }}>enhancing my skills</b></div>
        </div>
      </div>
    </header>
  );
}
