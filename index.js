import db from "./config/db.js";
import express from "express";
import routerClientes from "./routes/clienteRouter.js"
import clienteModel from "./Models/clienteModel";
import produtoModel from "./Models/produtoModel";
import servicoModel from "./models/serivcoModel.js";


const app = express();

try {
    db.authenticate().then(()=>{
        clienteModel.sync()
        produtoModel.sync()
        servicoModel.sync()
        console.log('Banco de Dados Conectado.');
    });
    
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());

app.use(express.json())

app.use('/cliente', routerClientes)
app.use('/produto', routerProdutos)
app.use('/servico', routerServicos)




app.listen(5000, ()=> console.log(`Servidor rodando na 5000`))
