import { portfolio as p } from "../data/portfolio";
export function Footer() {
  return (
    <footer>
      <div className="footer-line">
        <span>
          {p.name} © {new Date().getFullYear()}
        </span>
        <a href="#home">Back to top ↑</a>
      </div>
      <details className="privacy">
        <summary>Privacy & site information</summary>
        <p>
          This static website uses no analytics, cookies, contact forms, or
          tracking scripts. Contact links open your email provider; external
          links follow the destination's privacy policies. Your hosting provider
          may process access logs. Update this notice if you add services. All
          abstract artwork is original placeholder artwork; replace it with
          images you have permission to use.
        </p>
      </details>
    </footer>
  );
}
