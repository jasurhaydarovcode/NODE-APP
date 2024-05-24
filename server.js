const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
    res.end(`
        <html>
            <head>
                <title>NodeJs</title>
            </head>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
    `)
}
    if(req.url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            fs.writeFileSync('message.txt', parsedBody.split('=')[1]);
        })
        res.end();
    }
    // // About Page
    // else if(req.url === '/about'){
    //     res.end('<h1>About Page</h1>')
    // }
    // // 404 Page
    // else{
    //     res.end('<body style="background: #000;"></body> <p style="color: #fff;">404 Page not found</p>')
    // }
});

const PORT = process.env.PORT || 2006;

server.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
})