import Section from "./Section";
import { JOURNEY } from "../data";
import { useReveal } from "../hooks";
export default function Journey() {
  const [ref, shown] = useReveal();
  return (
    <Section id="education-and-journey">
      <div className="jr">
        <div className="edu">
          <small>education</small>
          <h3>B.E. Computer Science</h3>
          <p>MVJ College of Engineering, Bengaluru</p>
          <p>Final year · Expected May 2027</p>
          <p>CGPA: <b style={{ color: "var(--hi)" }}>8.79 / 10</b></p>
          <p className="c2">DSA · OOP · DBMS · Operating Systems · Computer Networks</p>
          <small style={{ display: "block", marginTop: 18 }}>extracurricular</small>
          <p>Web Team Member &amp; Event Coordinator, Swayam College Fest</p>
          <p>Participated in 2 hackathons</p>
        </div>
        <ol className={"tl" + (shown ? " in" : "")} ref={ref}>
          {JOURNEY.map(([t, d], i) => (
            <li key={t}><b style={i === JOURNEY.length - 1 ? { color: "var(--acc)" } : null}>{t}</b><br /><span>{d}</span></li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
