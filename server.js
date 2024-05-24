const http = require('http');
const uuid = require('uuid');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
    res.end(`<h1>Response from server</h1>`)
    }
    // About Page
    else if(req.url === '/about'){
        res.end('<h1>About Page</h1>')
    }
    // Contact Page
    else if(req.url === '/contact'){
        res.end('<h1>Contact Page</h1>')
    }
    // 404 Page
    else{
        res.end('<body style="background: #000;"></body> <p style="color: #fff;">404 Page not found</p>')
    }
});

console.log(uuid.v4());

const PORT = process.env.PORT || 2006;

server.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
})