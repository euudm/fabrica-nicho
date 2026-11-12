// Uso: node base/gerar.js <config.js> <saida.html>
// O config.js contém só o objeto (de "{" a "}"). O template é escolhido por CONFIG.estilo (a, b ou c).
// Troca o trecho entre /*CONFIG-INICIO*/ e /*CONFIG-FIM*/ e o bloco SEO-ESTATICO, depois valida o JS.
const fs = require("fs"), path = require("path");
const [cfgPath, outPath] = process.argv.slice(2);
if (!cfgPath || !outPath) { console.log("uso: node base/gerar.js <config.js> <saida.html>"); process.exit(1); }

const cfg = fs.readFileSync(cfgPath, "utf8").trim();
const C = eval("(" + cfg + ")");
const tplPath = path.join(__dirname, `estilo-${C.estilo}.html`);
if (!fs.existsSync(tplPath)) { console.log("template não existe:", tplPath); process.exit(1); }
let t = fs.readFileSync(tplPath, "utf8");

const A = "/*CONFIG-INICIO*/", B = "/*CONFIG-FIM*/";
t = t.slice(0, t.indexOf(A) + A.length) + cfg + t.slice(t.indexOf(B));

const q = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
const seo = `<!-- SEO-ESTATICO -->
<title>${q(C.seo.title)}</title>
<meta name="description" content="${q(C.seo.description)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:title" content="${q(C.seo.title)}">
<meta property="og:description" content="${q(C.seo.description)}">
<meta property="og:image" content="${q(C.seo.ogImage)}">
<meta name="geo.region" content="BR-${C.uf}">
<meta name="geo.placename" content="${q(C.cidade)}">
<!-- /SEO-ESTATICO -->`;
t = t.replace(/<!-- SEO-ESTATICO[\s\S]*?<!-- \/SEO-ESTATICO -->/, () => seo);

const js = [...t.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).join("\n");
new Function(js);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, t);
console.log("ok:", outPath, "(estilo " + C.estilo + ")");
