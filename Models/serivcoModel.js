import { Sequelize, define } from '../config/db';
const type  = Sequelize;

let servicoModel = define('servico',{
    id:{
        type: type.INTEGER,
        primaryKey: true
    },
    nome:{
        type: type.STRING,
        primaryKey: true
    },
  
    quantidadeConsumida:{
        type:Sequelize.INTEGER,
        allowNull:true,
    }
});

export default servicoModel;
