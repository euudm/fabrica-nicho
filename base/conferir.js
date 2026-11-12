// Uso: node base/conferir.js <arquivo.html> [larguras=375,390]
// Carrega a página dentro de um iframe com a largura exata (o Edge headless não abre janela
// menor que ~500px), mede o checklist do MOBILE.md e salva print da primeira tela em
// %TEMP%/conferir-<nome>-<largura>.png
const fs = require("fs"), path = require("path"), os = require("os"), { execFileSync } = require("child_process");
const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const arq = path.resolve(process.argv[2]);
const larguras = (process.argv[3] || "375,390").split(",").map(Number);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "conferir-"));
const url = p => "file:///" + p.replace(/\\/g, "/");
const nome = path.basename(arq, ".html");

const medir = `<script>
setTimeout(() => {
  const vw = innerWidth, vh = innerHeight, R = {};
  const barra = document.querySelector(".barra"), bt = barra ? barra.getBoundingClientRect().top : vh;
  R.largura = vw; R.rolagemHorizontal = document.documentElement.scrollWidth > vw;
  R.vazando = [...document.querySelectorAll("body *")].filter(el => {
    if (el.closest(".trilho,.sheet,.lb,.veu,.faixa")) return false;
    const r = el.getBoundingClientRect(); return r.width && (r.right > vw + 1 || r.left < -1);
  }).slice(0, 5).map(el => el.tagName + "." + el.className);
  R.botaoFlutuanteRedondo = !!document.querySelector(".fab");
  R.barraVisivel = !!barra && getComputedStyle(barra).display !== "none";
  R.barraBotoes = barra ? [...barra.querySelectorAll("a")].map(a => a.textContent.trim() + " " + Math.round(a.getBoundingClientRect().height) + "px") : [];
  const h1 = document.querySelector("h1"), hr = h1.getBoundingClientRect();
  R.h1Palavras = h1.textContent.trim().split(/\\s+/).length;
  const ap = document.querySelector(".apoio"); R.apoioLinhas = ap ? Math.round(ap.getBoundingClientRect().height / parseFloat(getComputedStyle(ap).lineHeight)) : null;
  const foto = document.querySelector(".hero-foto").getBoundingClientRect();
  /* hero com foto em tela cheia: o que precisa caber acima da barra é o texto (h1, apoio, chips, linha) */
  const fotoCheia = foto.height >= vh * 0.9;
  const textoFim = Math.max(...[...document.querySelectorAll(".hero h1, .hero .apoio, .hero .chips, .hero .linha-chip")].map(el => el.getBoundingClientRect().bottom));
  R.primeiraTela = { h1Inicio: Math.round(hr.top), textoFim: Math.round(textoFim), fotoFim: Math.round(foto.bottom), fotoLargura: Math.round(foto.width), fotoTelaCheia: fotoCheia, barraTopo: Math.round(bt),
    cabe: fotoCheia ? textoFim <= bt && hr.top >= 64 : foto.bottom <= bt };
  R.fonteCorpo = getComputedStyle(document.body).fontSize;
  const h2 = document.querySelector("section h2"); R.tituloSecao = h2 ? getComputedStyle(h2).fontSize : null;
  R.toqueMenor48 = [...document.querySelectorAll("a, button, summary")].filter(el => {
    if (el.closest(".sheet,.lb") || !el.offsetParent) return false;
    if (el.closest("p, dd")) return false;
    const r = el.getBoundingClientRect(); return r.height < 48 || r.width < 48;
  }).map(el => (el.textContent.trim().slice(0, 25) || el.className) + " " + Math.round(el.getBoundingClientRect().width) + "x" + Math.round(el.getBoundingClientRect().height));
  R.wa = [...document.querySelectorAll(".js-wa")].every(a => a.href.startsWith("https://wa.me/55"));
  R.tel = [...document.querySelectorAll(".js-tel")].every(a => a.href.startsWith("tel:+55"));
  R.secoes = document.querySelectorAll("main > section, main > div").length;
  R.imgSemTamanho = [...document.querySelectorAll("img")].filter(i => !i.getAttribute("width") || !i.getAttribute("height")).length;
  R.imgLazyForaHero = [...document.querySelectorAll("img")].filter(i => !i.closest(".hero")).every(i => i.loading === "lazy");
  scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" });
  const ft = document.querySelector("footer").getBoundingClientRect();
  R.rodapeLivreDaBarra = !R.barraVisivel || ft.bottom <= barra.getBoundingClientRect().top + 1;
  scrollTo({ top: 0, behavior: "instant" });
  parent.postMessage(JSON.stringify(R), "*");
}, 1500);
<\/script>`;

const teste = path.join(tmp, "teste.html");
fs.writeFileSync(teste, fs.readFileSync(arq, "utf8").replace("</body>", medir + "</body>"));

for (const w of larguras) {
  const moldura = (src, comMedida) => `<!DOCTYPE html><body style="margin:0;background:#888"><iframe src="${src}" width="${w}" height="844" style="border:0;display:block"></iframe>` +
    (comMedida ? `<pre id="__resultado"></pre><script>addEventListener("message", e => document.getElementById("__resultado").textContent = e.data)<\/script>` : "") + `</body>`;
  const mMedir = path.join(tmp, `m-medir-${w}.html`), mPrint = path.join(tmp, `m-print-${w}.html`);
  fs.writeFileSync(mMedir, moldura(url(teste), true));
  fs.writeFileSync(mPrint, moldura(url(arq), false));
  const base = ["--headless", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--allow-file-access-from-files",
    `--user-data-dir=${path.join(tmp, "perfil")}`, "--window-size=520,844", "--virtual-time-budget=7000"];
  const dom = execFileSync(EDGE, [...base, "--dump-dom", url(mMedir)], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  const m = dom.match(/<pre id="__resultado">([\s\S]*?)<\/pre>/);
  console.log(`\n== ${nome} @ ${w}px`);
  const txt = m && m[1] ? m[1].replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&") : "";
  console.log(txt ? JSON.stringify(JSON.parse(txt)) : "sem resultado");
  const png = path.join(os.tmpdir(), `conferir-${nome}-${w}.png`);
  try { execFileSync(EDGE, [...base, `--screenshot=${png}`, url(mPrint)], { stdio: "ignore" }); console.log("print:", png); } catch (e) {}
}
