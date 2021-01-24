// next.js 也是
// 其它很多，都是框架server
const express = require('express');
var bodyParser = require("body-parser");


const app = express();
const port = 8080;

// 通过如下代码就可以将 web 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：
app.use(express.static('web'))

app.use(bodyParser.urlencoded({ extended: false }));


// url
// http method 并列判断

app.get('/web1/update/test', (req, res) => {
  // query => url?key=value&key=value
  console.log(req.query.txtUserName);

  if(req.query.txtUserName == '123'){
    res.send('处理完成' + '123'); // 新的页面，
  }else{
    res.send('不认识你');
  }
});

// 接口
app.post('/web1/update/test', (req, res) => {
  // post 传输数据依靠的是body，所以数据还要转换一下urlencoded
  // 转码urlencoded “ : => %40 ”
  console.log(req.body.txtUserName);

  if(req.body.txtUserName == '123'){
    res.send('处理完成' + '123');
  }else{
    res.send('不认识你');
  }
});

// 接口
app.get('/ajax/get', (req, res) => {
  console.log(req.url);
  // res.statusCode = 200;
  res.end(Date());
});
// 接口
app.post('/ajax/post', (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  // json样子的数据
  res.end(`{"userData":"Jane","computedString":"Hi, Jane!"}`); //  不一定，非得返回字符串
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})