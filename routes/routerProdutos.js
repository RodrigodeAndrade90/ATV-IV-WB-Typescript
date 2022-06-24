import { server as router } from '../config/server';
import { buscarProduto, insertProduto, updateProduto, deleteProduto } from '../Controllers/ProdutoController';
import validarToken from '../config/token';

router.post('/produto', (request, response, next) => {    
    if (validarToken(request.header('token'))){        
        buscarProduto(request.body.skip, request.body.limit).then(data => {
            response.send(200, retornos(true, 'busca realizada',data));
        }).catch(err => {
            response.send(503, retornos(true, 'falha ao buscar',err));
        })
    } else {
        response.send(403);
    }
    next();
});

router.post('/insertProduto', (request, response, next) => {
    insertProduto(request.body).then(data => {
        response.send(200, 'Cliente inserida com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.put('/updateProduto', (request, response, next) => {
    updateProduto(request.body).then(data => {
        response.send(200, 'Cliente atualizada com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.del('/deleteProduto', (request, response, next) => {
    deleteProduto(request.body).then(data => {        
        response.send(200, retornos(true, 'Cliente excluída com sucesso',data));
    }).catch(err => {
        response.send(400, retornos(false, 'falha ao excluída com sucesso',err));
    })
    next();
});

function retornos(success, msg, data){    
    const retorno = {
        success: success,
        message: msg,
        details: data
    }        
    return retorno;
}

export default router;
