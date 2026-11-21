import Section from "./Section";
import { SKILLS } from "../data";
export default function Skills() {
  return (
    <Section id="skills">
      <div className="skills">
        {Object.entries(SKILLS).map(([title, items]) => (
          <div className="box" key={title}>
            <h3>{title}</h3>
            <p>{items.map((i) => <span key={i}>{i}</span>)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
