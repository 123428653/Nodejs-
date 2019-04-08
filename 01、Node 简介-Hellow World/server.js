// 以下两个模块都是Node自带
const http = require('http')
const childProcess = require('child_process')

const host = '127.0.0.1'
const port = 8888

// 创建node服务器
const server = http.createServer((request, response) => {
  // request：  接收数据（请求对象）
  // response： 响应数据
  
  // 设置响应状态码 / 设置请求头，响应的内容类型
  // response.statusCode = 200
  // response.setHeader('Content-Type', 'text/plain; charset=utf8')
  
  // 简写的方式
  response.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
  
  // response.write('H')
  // response.write('e')
  // response.write('l')
  // response.write('l')
  // response.write('o')
  // response.end('World')
  response.end('Hello World')
})

// 监听服务器
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`)

  // 使用默认浏览器打开node服务器地址
  // Win系统: start。 Mac系统：open。
  childProcess.exec(`open http://${host}:${port}/`)
})