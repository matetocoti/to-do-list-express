const express = require("express")


const router = express.Router()


router.get("/" ,(requisition ,response) => {
    console.log("Hello, world!")
    response.send() 
})


//Exemplo no java

//@GetMapping(value = "/{id}")
//public ResponseEntity<User> findById(@PathVariable Long id)

//Eu passo um parametro para ser respondido pela url 
//Exemplo: http://localhost:8765/hr-user/users/1
//Nesse caso o parametro id faz parte da url
router.get("/:id" ,(requisition ,response) => {
    console.log(requisition.params.id) //Exibindo parametro da função no console
    response.send(`ID: ${requisition.params.id}`) //Devolvendo o parametro id como resposta da requisição 
})







router.post("/" ,(requisition ,response) => {
    console.log(requisition.body) 
    response.status(200) 
    response.send(requisition.body) 
})

















module.exports = router