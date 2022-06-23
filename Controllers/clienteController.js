const model = require('../models/clienteModel');

function buscarCliente(skip, limit){
    return new Promise((resolve, reject) => {
        findAll({
            offset:skip,limit:limit
        }).then(res => {
            resolve(res);
        }).catch(err => {            
            console.log(`erro ao buscar clientes: ${err};`);
            reject(err);
        })
    });
}

function insertCliente(data){
    return new Promise((resolve, reject) =>{
        create(data, {
            where: { id:data.id }
        })
        create(data, {
            where: { nome:data.nome }
        })
        create(data, {
            where: { genero:data.genero }
        })
        create(data, {
            where: { nomeSocial:data.nomeSocial }
        })
        create(data, {
            where: { cpf:data.cpf }
        })
        create(data, {
            where: { rgs:data.rgs }
        })
        create(data, {
            where: { dataCadastro:data.dataCadastro }
        })
        create(data, {
            where: { telefones:data.telefones }
        })
        create(data, {
            where: { produtosConsumidos:data.produtosConsumidos }
        })
        cretae(data, {
            where: { servicosConsumidos:data.servicosConsumidos }
        })
        .then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao inserir o cliente: ${err};`);
            reject(err);
        })
    });
}

function updateCliente(data){
    return new Promise((resolve, reject) =>{
        update(data, {
            where: { id:data.id }
        })
        update(data, {
            where: { nome:data.nome }
        })
        update(data, {
            where: { genero:data.genero }
        })
        update(data, {
            where: { nomeSocial:data.nomeSocial }
        })
        update(data, {
            where: { cpf:data.cpf }
        })
        update(data, {
            where: { rgs:data.rgs }
        })
        update(data, {
            where: { dataCadastro:data.dataCadastro }
        })
        update(data, {
            where: { telefones:data.telefones }
        })
        .then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao editar o cliente: ${err};`);
            reject(err);
        })
    });
}

function deleteCliente(data){
    return new Promise((resolve, reject) => {       
        destroy({where:{ id:data.id}}).then(res => {           
            resolve(res);
        }).catch(err => {            
            console.log(`erro ao excluir o cliente: ${err};`);
            reject(err);
        });
    });
}

export default {buscarCliente, insertCliente, updateCliente, deleteCliente};

