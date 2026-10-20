// Renders one social asset by driving headless Chrome.
// Usage: node render.mjs <kind> <outFile> <deviceScaleFactor> [fseed] [dseed]
import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const [kind, outFile, dsf = '1', fseed = '', dseed = ''] = process.argv.slice(2);
const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = '/Users/kristinalogan/Desktop/Desktop/Professional/Jade/jade_web';
const SIZES = { banner: [1128, 191], avatar: [400, 400], og: [1200, 630] };
const [W, H] = SIZES[kind];

const PORT = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--allow-file-access-from-files',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'jc-'))}`, 'about:blank',
], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let wsUrl;
for (let i = 0; i < 50; i++) { try { const l = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json(); const p = l.find((t) => t.type === 'page'); if (p) { wsUrl = p.webSocketDebuggerUrl; break; } } catch {} await sleep(200); }
const ws = new WebSocket(wsUrl); await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const x = JSON.parse(m.data); if (x.id && pend.has(x.id)) { pend.get(x.id)(x.result); pend.delete(x.id); } };
const send = (method, params = {}) => new Promise((res) => { const i = ++id; pend.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result?.value;

await send('Page.enable'); await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: Number(dsf), mobile: false });
let q = `kind=${kind}&root=${encodeURIComponent(ROOT)}`;
if (fseed) q += `&fseed=${fseed}`;
if (dseed) q += `&dseed=${dseed}`;
await send('Page.navigate', { url: `file://${HERE}/render.html?${q}` });
for (let i = 0; i < 60; i++) { if (await ev('window.__ready === true')) break; await sleep(250); }
await sleep(300);
const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: W, height: H, scale: 1 } });
writeFileSync(outFile, Buffer.from(shot.data, 'base64'));
console.log(`wrote ${outFile}  (${W}x${H} css px at ${dsf}x)`);
ws.close(); chrome.kill(); process.exit(0);
