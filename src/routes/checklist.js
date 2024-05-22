const express = require("express")


const router = express.Router()


router.get("/" ,(requisition ,response) => {
    console.log("Hello, world!")
    response.send() 
})

router.get("/:id" ,(requisition ,response) => {
    console.log(requisition.params.id) 
    response.send(`ID: ${requisition.params.id}`) 
})


router.post("/" ,(requisition ,response) => {
    console.log(requisition.body) 
    response.status(200) 
    response.send(requisition.body) 
})


router.put("/:id" ,(requisition ,response) => {
    console.log(requisition.body)
    response.send(`PUT ID: ${requisition.params.id}`)
})


router.delete("/:id" ,(requisition ,response) => {
    console.log(requisition.body)
    response.send(`DELETE ID: ${requisition.params.id}`)
})















module.exports = router