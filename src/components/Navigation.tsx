import { useState } from "react";
export function Navigation({ experience }: { experience: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="masthead">
      <a className="wordmark" href="#home" aria-label="Portfolio home">
        folio<span>.</span>
      </a>
      <span className="masthead-note">A PERSONAL PORTFOLIO</span>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav
        id="navigation"
        aria-label="Main navigation"
        className={open ? "is-open" : ""}
      >
        {[
          ["Home", "home"],
          ["About", "about"],
          ["Projects", "projects"],
          ...(experience ? [["Experience", "experience"]] : []),
          ["Contact", "contact"],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
