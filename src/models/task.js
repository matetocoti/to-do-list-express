const mongoose = require("mongoose")
const checklist = require("./checklist")



//Modelo do documento|Strutura de dados
const taskSchema = mongoose.Schema({
    name: {type: String ,required: true},
    done: {type: Boolean ,default: false},
    
    //Task sempre associado ao id do checklist
    checklist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Checklist",
        required: true
    }
})



module.exports = mongoose.model("Task" ,taskSchema)