server

http的包
```js
var http = require('http');

var ser = http.createHttpServer();
```

# Express


```js
const express = require('express');
const app= express();

app.get('/', (req, res)=>{
    req.send('Hello world');
});
app.listen(8083, ()=>{
    console.log('Server is running at http://localhost:8083')
})
```