import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import { renderToStaticMarkup } from "react-dom/server";
const transpile = (path) =>
  ts.transpileModule(fs.readFileSync(path, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      jsx: ts.JsxEmit.ReactJSX,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
const load = async (source) =>
  import(
    `data:text/javascript;base64,${Buffer.from(source.replaceAll('\"react/jsx-runtime\"', JSON.stringify(import.meta.resolve("react/jsx-runtime")))).toString("base64")}`
  );
const { portfolio: p } = await load(transpile("src/data/portfolio.ts"));
const { Timeline } = await load(transpile("src/components/Timeline.tsx"));
test("empty optional timeline is absent; populated entries render", () => {
  assert.equal(
    renderToStaticMarkup(
      Timeline({ id: "experience", title: "Experience", items: [] }),
    ),
    "",
  );
  const html = renderToStaticMarkup(
    Timeline({
      id: "experience",
      title: "Experience",
      items: [
        {
          institution: "[ORGANISATION]",
          title: "[ROLE]",
          start: "[START]",
          end: "[END]",
          description: "[DESCRIPTION]",
          achievements: [],
        },
      ],
    }),
  );
  assert.match(html, /\[ORGANISATION\]/);
  assert.match(html, /id="experience"/);
});
test("placeholder projects have complete editable fields and existing local assets", () => {
  
  for (const x of p.projects) {
    
    for (const field of [
      "title",
      "description",
      "problem",
      "contribution",
      "category",
      "status",
    ])
      assert.ok(x[field]);
    assert.ok(fs.existsSync(`public/${x.image}`));
    for (const url of [x.liveUrl, x.repositoryUrl]) { if (url) assert.match(url, /^https:\/\//); }
  }
  assert.ok(fs.existsSync(`public/${p.portrait}`));
});
test("projects have unique IDs and configured contact is valid", () => {
 assert.equal(new Set(p.projects.map(x=>x.id)).size,p.projects.length);
 if(p.email) assert.match(p.email,/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
 for(const link of p.socials) assert.match(link.url,/^https:\/\//);
});
