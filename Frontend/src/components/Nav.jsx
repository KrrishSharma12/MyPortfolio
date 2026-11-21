import { useEffect, useState } from "react";
import { NAV } from "../data";
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  return (
    <nav className={scrolled ? "s" : ""}>
      <div className="wrap">
        <a className="logo" href="#home">Krish Sharma</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <i></i><i></i><i></i>
        </button>
        <div className={"links" + (open ? " open" : "")} onClick={() => setOpen(false)}>
          {NAV.map(([id, label]) => (
            <a key={id} href={"#" + id} className={active === id ? "on" : ""}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
