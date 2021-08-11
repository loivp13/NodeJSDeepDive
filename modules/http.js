const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        
    return  res.end('Welcome')
    }
    else if(req.url === '/about') {
       return res.end('here is about')
    }

    res.end('got nothing')
})

server.listen(5000, () => {
    console.log('server listen at 5000')
})