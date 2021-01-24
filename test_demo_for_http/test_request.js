const http = require('http')
const options = {
    hostname: '127.0.0.1',
    port: 9000,
    path: '/todos',
    method: 'POST'
}

const req = http.request(options, res => {
    console.log(`状态码: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})


const data = JSON.stringify({
    todo: 11111
  })

req.write(data)
req.end()


// 这边模拟http 请求