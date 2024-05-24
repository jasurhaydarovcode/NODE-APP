const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
    res.end('<h1>Response from server</h1>')
    }else if(req.url === '/about'){
        res.end('<h1>About Page</h1>')
    }else{
        res.end('<h2>Page not found</h2>')
    }
});

const PORT = process.env.PORT || 2006;

server.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
})