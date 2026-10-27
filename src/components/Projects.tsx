import { portfolio as p } from "../data/portfolio";
import { asset, isSafeUrl } from "../data/helpers";
export function Projects() {
  const projects = p.projects.filter((x) => p.preview || !x.placeholder);
  if (!projects.length) return null;
  return (
    <section id="projects" className="projects section">
      <div className="section-heading">
        <div>
          <div className="section-label">02 / THE WORK</div>
          <h2 className="section-title">
            Selected
            <br />
            <em>chapters.</em>
          </h2>
        </div>
        <p>
          {p.preview
            ? "Project layouts, ready for your work. All imagery and project content below are placeholders."
            : "A selection of projects, ideas and explorations."}
        </p>
      </div>
      <div className="project-spread">
        {projects.map((x, i) => (
          <article className={`project project-${i % 3}`} key={x.id}>
            <figure>
              <img
                src={asset(x.image)}
                alt={x.imageAlt}
                width="1000"
                height="760"
                loading="lazy"
              />
              <figcaption>
                <span>
                  {String(i + 1).padStart(2, "0")} / {x.category}
                </span>
                <span>{x.status}</span>
              </figcaption>
            </figure>
            <h3>{x.title}</h3>
            <p>{x.description}</p>
            {x.technologies.length > 0 && (
              <p className="technologies">{x.technologies.join(" / ")}</p>
            )}
            <details>
              <summary>Read the project notes</summary>
              <div className="project-notes">
                <h4>The problem</h4>
                <p>{x.problem}</p>
                <h4>My contribution</h4>
                <p>{x.contribution}</p>
              </div>
            </details>
            <div className="project-links">
              {isSafeUrl(x.repositoryUrl) && (
                <a href={x.repositoryUrl}>Source code ↗</a>
              )}
              {isSafeUrl(x.liveUrl) && (
                <a href={x.liveUrl}>Live demonstration ↗</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
