import Sequelize from 'sequelize';

//criação do cliente conexão
const sequelize = new Sequelize('wb', 'root', '1234', {
    host:"localhost",
    dialect:'mysql',
    define:{
        timestamps: false
    }
})

export default sequelize;
