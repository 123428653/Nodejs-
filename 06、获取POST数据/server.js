const http = require('http')
const querystring = require('querystring')

http.createServer((req, res) => {
  // console.log(req.url)
  if (req.url !== '/favicon.ico') {
    const bufferArray = []
    req.on('data', (buffer) => {
      bufferArray.push(buffer)
    })

    req.on('end', () => {
      // Buffer 类是一个全局变量，使用时无需 require('buffer').Buffer。
      // Buffer.concat方法用于合并Buffer数组。
      const buffer = Buffer.concat(bufferArray)
      // 已知Buffer数据只是字符串，则可以直接用toString将其转换成字符串。
      const post = querystring.parse(buffer.toString())
      console.log('post', post)
    })
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'})
    res.end(req.url)
  }

  
}).listen(8082)