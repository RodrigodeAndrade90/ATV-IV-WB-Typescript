import { Sequelize, define } from '../config/db';
const type  = Sequelize;

let clienteModel = define('cliente',{
    id:{
        type: type.INTEGER,
        primaryKey: true
    },
    nome:{
        type: type.STRING,
        primaryKey: true
    },
    genero:{
        type: type.STRING,
        primaryKey: true
    },
    nomeSocial:{
        type: type.STRING,
        primaryKey: true
    },
    cpf:{
        type: type.INTEGER,
        primaryKey: true
    },
    rgs:{
        type: type.INTEGER,
        primaryKey: true
    },
    dataCadastro:{
        type:Sequelize.DATE,
        allowNull:true,
    },
    telefones:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    produtosConsumidos:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    servicosConsumidos:{
        type:Sequelize.STRING,
        allowNull:true,
    }
});

export default clienteModel;
