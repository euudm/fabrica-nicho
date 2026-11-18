// Tour do estilo D: node base/tour.mjs <url> <largura> <altura> <prefixo> [rolagens em px, separadas por vírgula]
// Mede rolagem lateral, letras do título paradas, fps e erros; tira print em cada rolagem (pasta = env SAIDA ou temp).
// CHECK="<expressão JS>" roda uma conferência extra na página.
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const [url, W, H, pref, rolagens = "0"] = process.argv.slice(2);
const dir = process.env.SAIDA || (await import("node:os")).tmpdir(); // prints e perfil do Chrome vão pra cá
const CH = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const porta = 9300 + Math.floor(Math.random() * 300);
const chrome = spawn(CH, ["--headless=new", `--remote-debugging-port=${porta}`, `--user-data-dir=${dir}/chprof-${porta}`, "--hide-scrollbars", `--window-size=${W},${H}`, "about:blank"], { stdio: "ignore" });
const espera = ms => new Promise(r => setTimeout(r, ms));
let alvo;
for (let i = 0; i < 40 && !alvo; i++) { await espera(250); try { alvo = (await (await fetch(`http://127.0.0.1:${porta}/json`)).json()).find(t => t.type === "page"); } catch {} }
const ws = new WebSocket(alvo.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
let id = 0; const pend = new Map(); const logs = [];
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pend.has(m.id)) { pend.get(m.id)(m.result || m.error); pend.delete(m.id); } if (m.method === "Runtime.exceptionThrown") logs.push("EXC " + m.params.exceptionDetails.exception?.description); if (m.method === "Runtime.consoleAPICalled" && /error|warn/.test(m.params.type)) logs.push(m.params.type + " " + m.params.args.map(a => a.value).join(" ")); };
const cmd = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const mobile = +W < 700;
await cmd("Runtime.enable");
await cmd("Emulation.setDeviceMetricsOverride", { width: +W, height: +H, deviceScaleFactor: 1, mobile });
if (mobile) await cmd("Emulation.setTouchEmulationEnabled", { enabled: true });
await cmd("Page.enable");
await cmd("Page.navigate", { url });
await espera(4500);
const ev = async expr => (await cmd("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true })).result?.value;
console.log("medidas:", JSON.stringify(await ev(`(() => {
  const W = innerWidth, largos = [];
  document.querySelectorAll("body *").forEach(el => { const r = el.getBoundingClientRect(); if (r.right > W + 1 && r.width > 0 && getComputedStyle(el).position !== "fixed") largos.push((el.id || el.className || el.tagName) + ":" + Math.round(r.right)); });
  const h = document.querySelector(".hero-sub"), b = document.getElementById("barra");
  return { scrollW: document.documentElement.scrollWidth, innerW: W, anima: document.documentElement.classList.contains("anima"),
    alturaPagina: document.documentElement.scrollHeight, largos: largos.slice(0, 12),
    fimHeroSub: h && Math.round(h.getBoundingClientRect().bottom), topoBarra: b && Math.round(b.getBoundingClientRect().top) };
})()`)));
console.log("ritmo:", JSON.stringify(await ev(`new Promise(r => { let n = 0; const t0 = performance.now(); const f = () => { n++; if (performance.now() - t0 < 1000) requestAnimationFrame(f); else r({ fps: n, letrasParadas: [...document.querySelectorAll("#h1 .lw")].filter(l => getComputedStyle(l).transform !== "none" && !/1, 0, 0, 1, 0, 0\\)/.test(getComputedStyle(l).transform)).length, tempo: Math.round(performance.now()) }); }; requestAnimationFrame(f); })`)));
if (process.env.CHECK) console.log("check:", JSON.stringify(await ev(process.env.CHECK)));
for (const y of rolagens.split(",").map(Number)) {
  await ev(`scrollTo(0, ${y})`);
  await espera(1600);
  const shot = await cmd("Page.captureScreenshot", { format: "png" });
  const arq = `${dir}/${pref}-${y}.png`;
  fs.writeFileSync(arq, Buffer.from(shot.data, "base64"));
  console.log("print:", arq);
}
console.log("erros:", logs.length ? logs : "nenhum");
ws.close(); chrome.kill();
