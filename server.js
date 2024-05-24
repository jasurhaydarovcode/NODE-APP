const http = require('http')

const server = http.createServer((req, res) => console.log(req)).listen(3000)