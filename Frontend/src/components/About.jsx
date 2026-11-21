import { useState } from "react";
import Section from "./Section";
import me from "../assets/me.jpg";
export default function About() {
  const [open, setOpen] = useState(false);
  return (
    <Section id="about-me">
      <div className={"about" + (open ? " open" : "")}>
        <div>
          <p>Hey, I’m Krish!</p>
          <p>I’m a Computer Science student and Full Stack Developer who enjoys building useful digital products and solving challenging problems. I enjoy working across the frontend and backend, exploring new technologies and turning ideas into functional applications.</p>
          <p>I believe in learning by building. Through my projects, I’ve explored full-stack development, authentication, databases, real-time communication and AI integration.</p>
          <p className="more">Outside development, I enjoy solving DSA problems, exploring technology and continuously improving my skills.</p>
          <button className="btn" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Show less" : "Read more"}</button>
        </div>
        <div className="about-vis" aria-hidden="true">
          <div className="dots" style={{ left: 0, top: 0 }}></div>
          <div className="dots" style={{ right: 0, bottom: 0 }}></div>
          <div className="frame"><img src={me} alt="Krish Sharma" width="240" height="278" /><span>Krish Sharma, Bengaluru</span></div>
        </div>
      </div>
    </Section>
  );
}
