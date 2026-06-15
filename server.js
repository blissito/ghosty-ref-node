// App de referencia mínima para probar el pipeline de Ghosty Launch.
// Sin dependencias, sin build: solo escucha en $PORT y responde.
const http = require("http");

const port = process.env.PORT || 3000;

http
  .createServer((_req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(
      `<!doctype html><html><head><meta charset="utf-8"><title>Ghosty Launch</title></head>` +
        `<body style="font-family:system-ui;display:grid;place-items:center;height:100vh;margin:0;background:#0b0b0f;color:#a78bfa">` +
        `<div style="text-align:center"><h1>👻 Live en EasyBits</h1>` +
        `<p style="color:#787882">Publicado por Ghosty Launch — dev in prod.</p></div>` +
        `</body></html>`
    );
  })
  .listen(port, () => console.log(`ref-node escuchando en :${port}`));
