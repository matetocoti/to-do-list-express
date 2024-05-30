
/*MONGOOSE
    //Comando para o mongoose na cli
    //npm i mongoose --save
    Mongoose é uma biblioteca do Node.js que fornece uma solução baseada em esquemas para modelar dados do MongoDB. 
    Ele facilita a interação com o banco de dados MongoDB, 
    fornecendo uma estrutura para definir modelos de dados, realizar validações, 
    criar consultas complexas e realizar operações CRUD de maneira simplificada.
*/

const mongoose = require('mongoose') 


//Configurando o mongoose
//Usando a promise global do node
mongoose.Promise = global.Promise


//Conectando ao meu mongoDb 
mongoose.connect("mongodb://localhost:27017/todo-list", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err))