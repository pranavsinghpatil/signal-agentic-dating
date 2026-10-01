import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = process.cwd();
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8' };

createServer(async (request, response) => {
  const url = new URL(request.url, 'http://localhost');
  const file = url.pathname === '/' ? 'index.html' : normalize(url.pathname).replace(/^[/\\]+/, '');
  if (file.includes('..')) { response.writeHead(403).end('Forbidden'); return; }
  try {
    const content = await readFile(join(root, file));
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    response.end(content);
  } catch { response.writeHead(404).end('Not found'); }
}).listen(process.env.PORT || 4173, () => console.log('Signal is running at http://localhost:4173'));
