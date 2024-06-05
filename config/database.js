const mongoose = require('mongoose') 

mongoose.Promise = global.Promise

//Conectando ao mongoDb 
mongoose.connect("mongodb://localhost:27017/todo-list", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err))

    