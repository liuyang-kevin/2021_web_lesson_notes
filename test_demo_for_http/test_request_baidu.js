const http = require('http')
const options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '/',
    method: 'GET'
}

// 向百度，发送get请求
const req = http.request(options, res => {
    console.log(`状态码: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

// 发送完毕
req.end()


