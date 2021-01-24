const fs = require('fs')

function run() {
    const content = '一些内容'
    console.error("开始写文件");
    fs.writeFile('./test.txt', content, err => {
      if (err) {
        console.error(err)
        return
      }
      //文件写入成功。
      console.error("文件写入成功");
    });
    console.error("但是，写入事件，加入事件循环后，本次循环继续执行");

    console.error("1");
    console.error("2");
    console.error("跨过事件，直接执行，因为本次loop的任务没有完成");
    console.error("3");
    console.error("到这里完成了，等下一轮事件循环");
}

run();