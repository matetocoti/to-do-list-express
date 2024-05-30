const express = require("express")
const checkListRouter = require("./src/routes/checklist")

//Importando a config da database
//Quando iniciar o codigo de config vai rodar
require("./config/database")





const app = express()
app.use(express.json())
app.use("/checklists" ,checkListRouter) 



















app.listen(3000 ,() => {
    console.log("Servidor foi iniciado")
})