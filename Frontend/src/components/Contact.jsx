import { useState } from "react";
import Section from "./Section";
import { PROFILE } from "../data";
const ENDPOINT = import.meta.env.VITE_API_URL || "https://my-portfolio-gilt-six-75.vercel.app/send-email";
const EMPTY = { name: "", email: "", subject: "", message: "" };
function validate(d) {
  const e = {};
  if (!d.name.trim()) e.name = "This field is required.";
  if (!d.email.trim()) e.email = "This field is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Enter a valid email address.";
  if (!d.subject.trim()) e.subject = "This field is required.";
  if (!d.message.trim()) e.message = "This field is required.";
  else if (d.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}
function Field({ k, label, ph, type = "text", area, d, errs, set }) {
  return (
    <div className="fld" {...(errs[k] ? { "data-bad": "" } : {})}>
      <label htmlFor={k}>{label}</label>
      {area && <span className="cnt">{d[k].length} / 150</span>}
      {area
        ? <textarea required id={k} value={d[k]} onChange={set(k)} maxLength={150} placeholder={ph} aria-invalid={!!errs[k]} />
        : <input required id={k} type={type} value={d[k]} onChange={set(k)} placeholder={ph} aria-invalid={!!errs[k]} autoComplete={k} />}
      <span className="err">{errs[k]}</span>
    </div>
  );
}
export default function Contact() {
  const [d, setD] = useState(EMPTY);
  const [errs, setErrs] = useState({});
  const [state, setState] = useState({ kind: "", msg: "", busy: false });
  const [copied, setCopied] = useState(false);
  const set = (k) => (e) => setD((current) => ({ ...current, [k]: e.target.value }));
  const copy = () => {
    navigator.clipboard?.writeText(PROFILE.email).then(
      () => { setCopied(true); setTimeout(() => setCopied(false), 1800); },
      () => { window.location.href = "mailto:" + PROFILE.email; }
    );
  };
  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate(d);
    if (Object.keys(e).length) {
      setTimeout(() => {
        setErrs(e);
      }, 6000);

      return;
    }
    try {
      const r = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
    console.log(r);
    
      if (r.ok) {
        setD(EMPTY);
        setState({ kind: "ok", msg: "Message sent. Thanks, I’ll reply soon.", busy: false });

      }
      else {
        const response = await r.json().catch(() => null);
        setState({
          kind: "bad",
          msg: response?.message || `Message failed to send (${r.status}). Try again or use the email link.`,
          busy: false,
        });
      }

    } catch (e) {
      setState({ kind: "bad", msg: "Message failed to send. Try again or use the email link.", busy: false });
    }
    finally {
      setTimeout(() => {
        setState({ kind: "", msg: "", busy: false });
      }, 6000);

    }
  };
  return (
    <Section id="contacts">
      <div className="ct">
        <div>
          <h3>Let’s connect and build something.</h3>
          <p>I’m open to developer opportunities, collaborations, interesting projects and conversations about technology. Feel free to reach out.</p>
          <div className="direct">
            <button type="button" onClick={copy}><span>{PROFILE.email}</span><small>{copied ? "copied" : "copy"}</small></button>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><small>krish-sharma</small></a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"><span>GitHub</span><small>KrrishSharma12</small></a>
          </div>
        </div>
        <div className="win">
          <div className="bar"><s></s><s></s><s></s><span>new-message.ts</span></div>
          <form onSubmit={submit} noValidate>
            <div className="two">
              <Field k="name" label="name" ph="Your name" d={d} errs={errs} set={set} />
              <Field k="email" label="email" ph="you@example.com" type="email" d={d} errs={errs} set={set} />
            </div>
            <Field type="text" required k="subject" label="subject" ph="What is this about?" d={d} errs={errs} set={set} />
            <Field type="text" k="message" label="message" ph="Tell me about the role, project or idea…" area d={d} errs={errs} set={set} />
            <div className="sendrow">
              <button className="btn" type="submit" disabled={state.busy}>{state.busy ? "Sending…" : "Send Message"}</button>
              <div id="status" className={state.kind} role="status" aria-live="polite">{state.msg}</div>
            </div>
            {!ENDPOINT && <div className="setup">Setup needed: no email service is connected yet. Set <code>VITE_CONTACT_ENDPOINT</code> in <code>.env</code> (Formspree, Web3Forms or your own API). Until then, sending opens your email app with the message ready.</div>}
          </form>
        </div>
      </div>
    </Section>
  );
}
