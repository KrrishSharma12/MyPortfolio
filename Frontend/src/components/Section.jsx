import { useReveal } from "../hooks";
export default function Section({ id, children }) {
  const [ref, shown] = useReveal();
  return (
    <section id={id} ref={ref} className={"rv" + (shown ? " in" : "")}>
      <h2 className="h2"><b>#</b>{id}<i></i></h2>
      {children}
    </section>
  );
}
