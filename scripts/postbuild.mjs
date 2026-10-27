import fs from "node:fs";
import ts from "typescript";
const source = fs.readFileSync("src/data/portfolio.ts", "utf8");
const js = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const { portfolio: p } = await import(
  `data:text/javascript;base64,${Buffer.from(js).toString("base64")}`
);
const escape = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
if (!p.preview && /\[[^\]]+\]/.test(JSON.stringify(p)))
  throw new Error(
    "Replace all bracketed placeholders before disabling preview.",
  );
let html = fs.readFileSync("dist/index.html", "utf8");
if (!p.preview) {
  html = html
    .replace(/<title>.*?<\/title>/, `<title>${escape(p.seo.title)}</title>`)
    .replace("noindex,nofollow", "index,follow")
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*/,
      `$1${escape(p.seo.description)}`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*/,
      `$1${escape(p.seo.title)}`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*/,
      `$1${escape(p.seo.description)}`,
    );
  if (p.seo.siteUrl.startsWith("https://"))
    html = html.replace(
      "</head>",
      `<link rel="canonical" href="${escape(p.seo.siteUrl)}"/><meta property="og:url" content="${escape(p.seo.siteUrl)}"/></head>`,
    );
  if (p.seo.image.startsWith("https://"))
    html = html.replace(
      "</head>",
      `<meta property="og:image" content="${escape(p.seo.image)}"/><meta name="twitter:card" content="summary_large_image"/></head>`,
    );
}
fs.writeFileSync("dist/index.html", html);
const home = process.env.PAGES_BASE_PATH
  ? `${process.env.PAGES_BASE_PATH.replace(/\/$/, "")}/`
  : "./";
fs.writeFileSync(
  "dist/404.html",
  `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Page not found</title><style>body{background:#eeeae1;color:#174c3d;font-family:Georgia;margin:12vw}h1{font-size:clamp(50px,10vw,120px)}a{color:inherit}</style><h1>Page not found.</h1><p>This chapter does not exist.</p><a href="${escape(home)}">Return to the portfolio</a></html>`,
);
