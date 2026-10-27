import { portfolio as p } from "../data/portfolio";
export function About() {
  return (
    <section id="about" className="about section">
      <div className="section-label">01 / THE PERSON</div>
      <div>
        <h2 className="section-title">
          A little
          <br />
          <em>context.</em>
        </h2>
        <p className="about-lead">{p.about.biography}</p>
        <dl className="about-notes">
          {[
            ["Interests", p.about.interests],
            ["Looking ahead", p.about.goals],
            ["The approach", p.about.approach],
          ]
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
        </dl>
        {p.about.areas.length > 0 && <p>{p.about.areas.join(" / ")}</p>}
      </div>
    </section>
  );
}
