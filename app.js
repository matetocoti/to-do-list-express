//Lib express  
//para  o desenvolvimento de aplicações web e APIs.
const express = require("express")


//Deixando disnponivel os métodos da lib express na constante app
const app = express()


//Criando rota 

//("/"") --> caminho da rota
//(requisição ,resposta)


//rota raiz
app.get("/" ,(requisition ,response) => {
    response.send("<h1>Minha lista de tarefas</h1>")
})


app.get("/json" ,(requisition ,response) => {
    response.json({title: "Tarefa X" ,done: true}) //Devolvendo resposta|response em formato de json

})




//Definindo porta do servidor
app.listen(3000, () => {
    console.log("O servidor foi iniciado")
})