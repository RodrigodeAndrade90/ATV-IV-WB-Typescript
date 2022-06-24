const model = require('../models/servicoModel');

function buscarServico(skip, limit){
    return new Promise((resolve, reject) => {
        findAll({
            offset:skip,limit:limit
        }).then(res => {
            resolve(res);
        }).catch(err => {            
            console.log(`erro ao buscar servicos: ${err};`);
            reject(err);
        })
    });
}

function insertServico(data){
    return new Promise((resolve, reject) =>{
        create(data, {
            where: { id:data.id }
        })
        create(data, {
            where: { nome:data.nome }
        })
        create(data, {
            where: { quantidadeConsumo:data.quantidadeConsumo }
        })
        .then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao inserir o servico: ${err};`);
            reject(err);
        })
    });
}

function updateServico(data){
    return new Promise((resolve, reject) =>{
        update(data, {
            where: { id:data.id }
        })
        update(data, {
            where: { nome:data.nome }
        })
        update(data, {
            where: { quantidadeConsumo:data.quantidadeConsumo }
        })
        .then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao editar o servico: ${err};`);
            reject(err);
        })
    });
}

function deleteServico(data){
    return new Promise((resolve, reject) => {       
        destroy({where:{ id:data.id}}).then(res => {           
            resolve(res);
        }).catch(err => {            
            console.log(`erro ao excluir o servico: ${err};`);
            reject(err);
        });
    });
}

export default {buscarServico, insertServico, updateServico, deleteServico};

