const express = require("express")


const router = express.Router()


router.get("/" ,(requisition ,response) => {
    console.log("Hello, world!")
    response.send() 
})

//Nesse caso mesmo com mesmo caminho se o tipo for post ele serar mandado para esse endpoint
router.post("/" ,(requisition ,response) => {
    console.log(requisition.body) //Pegando o body da requisição
    response.status(200) //Definindo o status da requisição como 200
    response.send(requisition.body) //Retornando o body
})















//Exportando o modulo|router
module.exports = router