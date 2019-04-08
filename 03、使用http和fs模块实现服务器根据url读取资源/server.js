const http = require('http')
const fs = require('fs')
const childProcess = require('child_process')

http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    fs.readFile(`./www${req.url}`, (err, buffer) => {
      if (err) {
        res.writeHead(404)
        res.write('Not Found')
      } else {
        res.write(buffer)
      }
      res.end()
    })
  }
}).listen(3010, () => {
  console.log('http://localhost:3010/1.html')
  childProcess.exec('start http://localhost:3010/1.html')
})