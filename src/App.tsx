import { useEffect } from "react";
import { portfolio as p } from "./data/portfolio";
import { isSafeUrl } from "./data/helpers";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { Skills } from "./components/Skills";
import { Recognition } from "./components/Recognition";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
export default function App() {
  useEffect(() => {
    document.title = p.preview ? "Portfolio | Content preview" : p.seo.title;
    for (const [selector, value] of [
      [
        'meta[name="description"]',
        p.preview
          ? "An editable portfolio preview. All personal content is placeholder."
          : p.seo.description,
      ],
      ['meta[property="og:title"]', document.title],
      [
        'meta[property="og:description"]',
        p.preview ? "Personal content coming soon." : p.seo.description,
      ],
      ['meta[name="robots"]', p.preview ? "noindex,nofollow" : "index,follow"],
    ])
      document.querySelector(selector)?.setAttribute("content", value);
    if (!p.preview && isSafeUrl(p.seo.siteUrl)) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = p.seo.siteUrl;
      document.head.append(link);
      return () => link.remove();
    }
  }, []);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      {p.preview && (
        <div className="preview-notice">
          CONTENT PREVIEW{" "}
          <span>All personal details and projects are placeholders.</span>
        </div>
      )}
      <Navigation experience={p.experience.length > 0} />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Timeline id="experience" title="Experience" items={p.experience} />
        <Timeline id="education" title="Education" items={p.education} />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
