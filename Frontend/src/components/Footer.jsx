import { PROFILE } from "../data";
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <strong>Krish Sharma</strong><br />Full Stack Developer
          <div className="fl">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={"mailto:" + PROFILE.email}>Email</a>
          </div>
        </div>
        <button className="top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
      </div>
      <div className="copy">© {new Date().getFullYear()} Krish Sharma. All rights reserved.</div>
    </footer>
  );
}
