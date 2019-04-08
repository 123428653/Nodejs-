const http = require('http')
const url = require('url')
const { RUL } = url
const querystring = require('querystring')

http.createServer((req, res) => {
  // console.log(req.url)
  if (req.url !== '/favicon.ico') {

    // 方法一
    /* const [ pathname, queryStr ] = req.url.split('?')
    const query = querystring.parse(queryStr)
    console.log(pathname, query)*/

    // 方法二
    /* const u = new RUL(`http://localhost:8082/${req.url}`)
    const { pathname, search } = url
    const query = querystring.parse(search.substring(1, url.search.length))
    console.log(pathname, query) */

    // 方法三
    // parse方法第二个参数若传true，则会直接将解析出的query值转为对象形式，否则它只是字符串形式
    const { pathname, query } = url.parse(req.url, true)
    console.log(pathname, query)



    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'})
    res.end(req.url) 
  }

  
}).listen(8082)