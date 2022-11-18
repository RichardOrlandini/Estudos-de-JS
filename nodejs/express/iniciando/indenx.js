const express = require("express"); // retorna uma função pra essa variavel 

const app = express(); //agora o app é o express

const server = 8081













// sempre a última linha do codigo //localhost: 8081
app.listen(server, () =>{
    console.log(`Aplicação rodando na porta http://localhost:${server}`)
}) 


