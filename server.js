const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
});

const PORT = process.env.PORT || 2006;

server.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
})