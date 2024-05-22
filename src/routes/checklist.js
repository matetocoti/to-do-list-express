const express = require("express")


//Permiti criar rotas em varios arquivos e depois chamar no arquivo principal
const router = express.Router()


//Criando rota apartir do router
router.get("/" ,(requisition ,response) => {
    console.log("Hello, world!")
    response.send() 
})




//Exportando o modulo|router
module.exports = router