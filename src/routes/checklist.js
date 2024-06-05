const express = require("express")

const router = express.Router()

const Checklist = require("../models/checklist")


router.get("/" , async (requisition ,response) => {
    try {
        //Retorna tudo da coleção checklist
        let checklists = await Checklist.find({})
        //Status http 200 ok e json
        response.status(200).json(checklists)
    } catch (error) {
        //Status http
        response.status(422).json(error)
    }
})

router.get("/:id" , async (requisition ,response) => {
    try {
        //Buscando pelo id
        let checklist = await Checklist.findById(requisition.params.id)
        response.status(200).json(checklist)
    } catch (error) {
        response.status(422).json(error)
    }
})

router.post("/" , async (requisition ,response) => {
    let { name } = requisition.body
    try {
        //Criando um check list com o body passado na requisiçõa no caso com o name passado no body
        let checklist = await Checklist.create({ name })
        response.status(200).json(checklist)
    } catch (error) {
        response.status(422).json(error)
    }
})

router.put("/:id" , async (requisition ,response) => {
    let { name } = requisition.body
    try {
        //Atualizando documento no banco de dados (id ,elemento para atualizar ,se true retornando dados depois de atualizado)
        let checklist = await Checklist.findByIdAndUpdate(requisition.params.id , { name } ,{ new: true })
        response.status(200).json(checklist)
    } catch (error) {
        response.status(422).json(error)
    }
})

router.delete("/:id" , async (requisition ,response) => {
    try {
        //Removendo um elemento pelo id
        let checklist =  await Checklist.findByIdAndDelete(requisition.params.id)
        response.status(200).json(checklist)
    } catch (error) {
        response.status(422).json(error)
    }
})



module.exports = router