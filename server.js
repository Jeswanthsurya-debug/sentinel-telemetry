const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync('index.html'));
});

const wss = new WebSocket.Server({ noServer: true });
let uiClient = null;

server.on('upgrade', (req, socket, head) => {
    wss.handleUpgrade(req, socket, head, (ws) => {
        wss.emit('connection', ws, req);
    });
});

wss.on('connection', (ws, req) => {
    if (req.url === '/telemetry') {
        ws.on('message', (data) => {
            if (uiClient && uiClient.readyState === WebSocket.OPEN) {
                uiClient.send(data.toString());
            }
        });
    } else if (req.url === '/ui') {
        uiClient = ws;
    }
});

server.listen(9090, '0.0.0.0', () => {
    console.log('Server running at: http://localhost:9090');
});
