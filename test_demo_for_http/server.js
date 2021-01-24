const http = require("http");
let server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.statusCode);
    console.log(req.body);
    req.on('data', d => {
        console.log(d);
        res.end();
    })

    
})

server.listen(9000, () => {
    console.log("server running at 9000");
})


// 常规的server 打印 http 报文