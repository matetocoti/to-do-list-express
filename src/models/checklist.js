const mongoose = require("mongoose")


//Modelo do documento|Strutura de dados
const checklistSchema = mongoose.Schema({
    name: {type: String, required: true} ,

    //Checklist tem relação com a Task
    //Array de tasks dentro de checklist
    tasks: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }] 
})


module.exports = mongoose.model("Checklist" ,checklistSchema)