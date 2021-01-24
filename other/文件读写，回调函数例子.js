const fs = require('fs')

function run() {
  const content = '一些内容'
  fs.writeFile('./test.txt', "dsfsdfalkjfkljaklsjflkajsljfkas\naksjfdkajsljdflasldnkf\naskdjfklasjlkf", err => {
    if (err) {
      console.error(err)
      return
    }
    //文件写入成功。
    // 文件格式问题
    fs.readFile('./test.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)

      // 读出来刚才写的内容 data
      // 再写一个文件， 增加点内容
      fs.writeFile('./test2.txt', data + "\n 再写一个文件， 增加点内容", err => {
        if (err) {
          console.error(err)
          return
        }
        //文件写入成功。
      });
    })
  });
}

run();

