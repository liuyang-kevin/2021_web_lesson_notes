const http = require('http');
const urlLib = require('url');
const fs = require('fs');

// req: IncomingMessage, res: ServerResponse
var server = http.createServer(function (request, response) {
    request.headers;
    request.on('data', function (data) {
        str += data;
    });
    request.on('end', function () {
        var obj = urlLib.parse(req.url, true);
        const url = obj.pathname;
        const GET = obj.query;
        if (url == "/") {
            // fs 读取数据
            var html = "fs 读取数据"
            response.end(html);
            return
        }
    });
    // "字符串" =》 流的概念 =》 1/0 * n
    // response.write("<html>sadjhfklasjdklfjalskjfdlsaj<html>");
    // response.write("hello");
    // response.end();
    // //解析数据    
    // var str = "";
    // req.on('data', function (data) {
    //     str += data;
    // });
    // req.on('end', function () {
    //     var obj = urlLib.parse(req.url, true);
    //     const url = obj.pathname;
    //     const GET = obj.query;
    //     if (url == "/") {
    //         res.end("hello world form http");
    //         return
    //     }
    // });
});
server.listen(8081); // loop