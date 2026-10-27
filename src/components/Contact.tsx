import { portfolio as p } from "../data/portfolio";
import { isEmail, isSafeUrl } from "../data/helpers";
export function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-label">03 / A CONVERSATION</div>
      <div>
        <h2>
          Let's turn
          <br />
          the <em>page.</em>
        </h2>
        {isEmail(p.email) ? (
          <a className="email" href={`mailto:${p.email}`}>
            {p.email} ↗
          </a>
        ) : (
          <p className="contact-placeholder">
            {p.preview ? "[YOUR EMAIL]" : "Contact details coming soon."}
            <span>Add your email to enable contact.</span>
          </p>
        )}
        <div className="socials">
          {p.socials
            .filter((x) => isSafeUrl(x.url))
            .map((x) => (
              <a key={x.label} href={x.url}>
                {x.label} ↗
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
