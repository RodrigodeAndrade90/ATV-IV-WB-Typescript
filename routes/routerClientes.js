import { server as router } from '../config/server';
import { buscarCliente, insertCliente, updateCliente, deleteCliente } from '../Controllers/clienteController';
import validarToken from '../config/token';

router.post('/cliente', (request, response, next) => {    
    if (validarToken(request.header('token'))){        
        buscarCliente(request.body.skip, request.body.limit).then(data => {
            response.send(200, retornos(true, 'busca realizada',data));
        }).catch(err => {
            response.send(503, retornos(true, 'falha ao buscar',err));
        })
    } else {
        response.send(403);
    }
    next();
});

router.post('/insertCliente/:id', (request, response, next) => {
    insertCliente(request.body).then(data => {
        response.send(200, 'Cliente inserida com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.put('/updateCliente/:id', (request, response, next) => {
    updateCliente(request.body).then(data => {
        response.send(200, 'Cliente atualizada com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.del('/deleteCliente/:id', (request, response, next) => {
    deleteCliente(request.body).then(data => {        
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
