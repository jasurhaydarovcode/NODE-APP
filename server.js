const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
    res.end(`
        <html>
            <head>
                <title>NodeJs</title>
                <link rel="icon" href="https://seeklogo.com/images/N/node-js-logo-F4F55CD2D0-seeklogo.com.png"></link>
                <style>
                    body {
                        background-image: url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg');
                        background-repeat: no-repeat;
                        background-size: cover;
                        
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 90vh;
                        user-select: none;
                    }
                    .message-input {
                        margin-top: 20px;
                        padding: 9px 20px;
                        border-radius: 5px;
                        border: 1px solid #0ae5e9;
                        font-size: 16px;
                        &::placeholder {
                            color: #0ae5e9;
                        }
                    }
                    .message-btn {
                        background-color: #0ae5e9;
                        // color: white;
                        font-weight: bold;
                        padding: 11px 20px;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    .active-focus-hover {
                        &:focus {
                            outline: none;
                            border: 2px solid #0ae5e9;
                        }
                        &:active {
                            box-shadow: 0 0 10px #0ae5e9;
                        }
                        &:hover {
                            box-shadow: 0 0 10px #0ae5e9;
                            transition: all 0.3s ease-in-out;
                        }
                    }
                 </style>
            </head>
            <body>
                <form action="/message" method="POST" class="message-form">
                    <input type="text" name="message" placeholder="Request" class="message-input active-focus-hover">
                    <button type="submit" class="message-btn active-focus-hover">Send</button>
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
    // // 404 Page
    // else{
    //     res.end('<body style="background: #000;"></body> <p style="color: #fff;">404 Page not found</p>')
    // }    
});

const PORT = process.env.PORT || 2006;

server.listen(PORT, () => {
    console.log('http://localhost:2006/\nServer is running on PORT: ' + PORT);
})