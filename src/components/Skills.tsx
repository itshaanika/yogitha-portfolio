import { portfolio as p } from "../data/portfolio";
export function Skills() {
  if (!p.skills.length) return null;
  return (
    <section className="section skills" id="skills">
      <div className="section-label">TOOLKIT</div>
      <div>
        <h2 className="section-title">Skills & tools.</h2>
        {p.skills.map((x) => (
          <div className="skill-row" key={x.category}>
            <h3>{x.category}</h3>
            <p>{x.items.join(" / ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
