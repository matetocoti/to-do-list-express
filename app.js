const express = require("express")
const checkListRouter = require("./src/routes/checklist")

const app = express()
app.use(express.json())
 //Uso o obj de rotas router criado no arquivo checklist como um middleware.js

//Como eu acho que 'seria' em Java
//Coloquei esse exemplo pois é a linguagem que estou mais acustumado
//@RestController
//@RequestMapping(value = "/checklists")
 app.use("/checklists" ,checkListRouter) //Todas as rotas sao derivadas da rota /checklists 



















app.listen(3000 ,() => {
    console.log("Servidor foi iniciado")
})