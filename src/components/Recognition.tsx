import { portfolio as p } from "../data/portfolio";
import { isSafeUrl } from "../data/helpers";
export function Recognition() {
  const groups = [
    ["Achievements", p.achievements],
    ["Certifications", p.certifications],
  ] as const;
  return (
    <>
      {groups.map(
        ([title, items]) =>
          items.length > 0 && (
            <section className="section timeline" key={title}>
              <div className="section-label">RECOGNITION</div>
              <div>
                <h2 className="section-title">{title}</h2>
                {items.map((x, i) => (
                  <article key={i}>
                    <h3>{x.title}</h3>
                    <p>
                      {x.issuer} / {x.date}
                    </p>
                    {x.url && isSafeUrl(x.url) && (
                      <a href={x.url}>View credential ↗</a>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ),
      )}
    </>
  );
}
