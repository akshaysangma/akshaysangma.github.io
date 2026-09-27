const path = require("path");
const katex = require(process.env.KATEX || "katex");
const root = path.resolve(__dirname, "..");
global.window = {};
require(path.join(root, "data/modules.js"));
require(path.join(root, "data/papers.js"));
const problems = [];
const check = (where, s) => {
  if (typeof s !== "string") return;
  for (const m of s.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g)) {
    const src = m[1] ?? m[2];
    try { katex.renderToString(src, { throwOnError: true, displayMode: !!m[1] }); }
    catch (e) { problems.push(`${where}: ${e.message.split("\n")[0]}  <<${src.slice(0, 80)}>>`); }
  }
};
const checkQ = (q) => { check(q.id + ".q", q.q); check(q.id + ".explanation", q.explanation); check(q.id + ".note", q.note); (q.options || []).forEach((o, i) => check(`${q.id}.opt${i}`, o)); };
for (const m of window.IPO_MODULES) {
  m.lessons.forEach((l, i) => check(`${m.id}.lesson${i}`, l.body));
  (m.formulas || []).forEach((f, i) => { try { katex.renderToString(f.tex, { throwOnError: true }); } catch (e) { problems.push(`${m.id}.formula${i}: ${e.message.split("\n")[0]}`); } check(`${m.id}.formula${i}.name`, f.name); check(`${m.id}.formula${i}.when`, f.when); });
  (m.examples || []).forEach((x, i) => { check(`${m.id}.ex${i}.q`, x.q); check(`${m.id}.ex${i}.sol`, x.solution); check(`${m.id}.ex${i}.sc`, x.shortcut); });
  (m.traps || []).forEach((t, i) => check(`${m.id}.trap${i}`, t));
  m.practice.forEach(checkQ);
}
window.IPO_PAPERS.forEach(p => p.questions.forEach(checkQ));
console.log(problems.join("\n") || "KaTeX: all expressions render");
process.exit(problems.length ? 1 : 0);
