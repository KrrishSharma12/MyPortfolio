import Section from "./Section";
import { PROJECTS } from "../data";
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
      <div className="more-p">// also built: <b style={{ color: "var(--hi)" }}>RepoPilot</b>, a VS Code extension (TypeScript, VS Code API, GitHub API) for creating and publishing GitHub repos from the editor. Link coming soon.</div>
    </Section>
  );
}
