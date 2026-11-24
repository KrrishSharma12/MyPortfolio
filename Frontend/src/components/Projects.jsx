import Section from "./Section";
import { PROJECTS } from "../data";
import repoPilotImage from "../assets/repopilot.png";
export default function Projects() {
  return (
    <Section id="projects">
      <div className="proj">
        {PROJECTS.map((p) => (
          <article className="card" key={p.name}>
            <div className="shot">
              <div className="chrome"><s></s><s></s><s></s><em>{p.live.replace(/^https:\/\//, "").replace(/\/$/, "")}</em></div>
              {p.image ? <img src={p.image} alt={p.name + " screenshot"} loading="lazy" /> : <div className="slot">screenshot: add image here</div>}
            </div>
            <div className="stack">{p.stack}</div>
            <div className="b">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
              <div className="row">
                <a className="btn" href={p.gh} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="btn ghost" href={p.live} target="_blank" rel="noopener noreferrer">Live demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="more-p">
        <img className="more-p-photo" src={repoPilotImage} alt="RepoPilot extension icon" />
        <div className="more-p-details">
          <b style={{ color: "var(--hi)" }}>RepoPilot</b> — a VS Code extension (TypeScript, VS Code API, GitHub API) for creating GitHub repositories, initializing Git, committing, and pushing projects directly from the editor.{" "}
          <a href="https://marketplace.visualstudio.com/items?itemName=krishsharma.repo-pilot" target="_blank" rel="noopener noreferrer" style={{ color: "var(--acc)" }}>Install in VS Code</a>
          {" · "}
          <a href="https://github.com/KrrishSharma12/RepoPilot" target="_blank" rel="noopener noreferrer" style={{ color: "var(--acc)" }}>View on GitHub</a>
        </div>
      </div>
    </Section>
  );
}
