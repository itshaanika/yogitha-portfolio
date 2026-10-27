import type { TimelineEntry } from "../data/portfolio";
export function Timeline({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: TimelineEntry[];
}) {
  if (!items.length) return null;
  return (
    <section id={id} className="section timeline">
      <div className="section-label">BACKGROUND / {title.toUpperCase()}</div>
      <div>
        <h2 className="section-title">{title}</h2>
        {items.map((x, i) => (
          <article key={i}>
            <p className="eyebrow">
              {x.start} / {x.end}
            </p>
            <h3>{x.title}</h3>
            <p>{x.institution}</p>
            <p>{x.description}</p>
            {x.achievements.length > 0 && (
              <ul>
                {x.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
