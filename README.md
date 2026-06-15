# ghosty-ref-node

App de referencia trivial para [Ghosty Launch](https://github.com/blissito/ghosty-launch).
Server HTTP sin dependencias ni build: escucha en `$PORT` y responde. Su único trabajo es
probar el pipeline de deploy (clone → `npm ci` → `npm start` → expose) sobre una VM de EasyBits.

```bash
npm start   # PORT=3000 por default
```
