//Lib express  
//para  o desenvolvimento de aplicações web e APIs.
const express = require("express")


//Deixando disnponivel os métodos da lib express na constante app
const app = express()


//Criando rota 
//("/"") --> chamada do root
//(requisição ,resposta)
app.get("/" ,(requisition ,response) => {
    response.send("<h1>Minha lista de tarefas</h1>")
})


//Definindo porta do servidor
app.listen(3000, () => {
    console.log("O servidor foi iniciado")
})