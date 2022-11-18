var http = require('http');

/*
1.precisamos abrir o servidor e em seguida temos a função listen, que escuta em qual porta ele vai entrar
2. a função de CreateServer, pode receber 2 parâmetros: req, res

*/
http.createServer(function(req, res){
    res.end("Hello")
}).listen(8081)     

console.log("o servidor está rodando")