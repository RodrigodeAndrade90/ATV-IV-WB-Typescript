const model = require('../models/produtoModel');

function buscarProduto(skip, limit){
    return new Promise((resolve, reject) => {
        findAll({
            offset:skip,limit:limit
        }).then(res => {
            resolve(res);
        }).catch(err => {            
            console.log(`erro ao buscar produtos: ${err};`);
            reject(err);
        })
    });
}

function insertProduto(data){
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
            console.log(`erro ao inserir o produto: ${err};`);
            reject(err);
        })
    });
}

function updateProduto(data){
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
            console.log(`erro ao editar o produto: ${err};`);
            reject(err);
        })
    });
}

function deleteProduto(data){
    return new Promise((resolve, reject) => {       
        destroy({where:{ id:data.id}}).then(res => {           
            resolve(res);
        }).catch(err => {            
            console.log(`erro ao excluir o produto: ${err};`);
            reject(err);
        });
    });
}

export default {buscarProduto, insertProduto, updateProduto, deleteProduto};

