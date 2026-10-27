import { portfolio as p } from "../data/portfolio";
import { asset } from "../data/helpers";
export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-kicker">
        <span>INDEPENDENT PORTFOLIO</span>
        <span>VOL. 01 / INTRODUCTION</span>
      </div>
      <h1 id="hero-title">
        A personal
        <br />
        <span className="serif">point of view.</span>
      </h1>
      <div className="hero-bottom">
        <div className="hero-intro">
          <span className="eyebrow">HELLO, I'M</span>
          <h2>{p.name}</h2>
          <p>{p.title}</p>
          <p className="intro-text">{p.introduction}</p>
          {p.location && <p>{p.location}</p>}
          <div className="actions">
            <a className="button" href="#projects">
              Explore the work <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <figure className="portrait">
          <img
            src={asset(p.portrait)}
            alt={p.portraitAlt}
            width="600"
            height="720"
          />
          <figcaption>
            01 / {p.preview ? "PORTRAIT PLACEHOLDER" : "PORTRAIT"}
          </figcaption>
        </figure>
        <div className="hero-margin">
          IDEAS, PROCESS
          <br />& PERSPECTIVE.
        </div>
      </div>
    </section>
  );
}
