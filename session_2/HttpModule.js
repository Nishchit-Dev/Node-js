const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log("connected")
        res.write("hello i m connected")
        res.end()
    }
    if (req.url === '/greet') {
        console.log('connected to greet')
        res.write("hello nishchit")
        res.end();
    }
});
server.on('connection', (socket) => {
    console.log('new connection  ')
})
server.listen(8080);

console.log('listening on port 8080');