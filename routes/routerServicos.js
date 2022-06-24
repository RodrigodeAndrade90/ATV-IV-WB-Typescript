import { server as router } from '../config/server';
import { buscarServico, insertServico, updateServico, deleteServico } from '../Controllers/servicoController';
import validarToken from '../config/token';

router.post('/servico', (request, response, next) => {    
    if (validarToken(request.header('token'))){        
        buscarServico(request.body.skip, request.body.limit).then(data => {
            response.send(200, retornos(true, 'busca realizada',data));
        }).catch(err => {
            response.send(503, retornos(true, 'falha ao buscar',err));
        })
    } else {
        response.send(403);
    }
    next();
});

router.post('/insertServico', (request, response, next) => {
    insertServico(request.body).then(data => {
        response.send(200, 'Cliente inserida com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.put('/updateServico', (request, response, next) => {
    updateServico(request.body).then(data => {
        response.send(200, 'Cliente atualizada com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.del('/deleteServico', (request, response, next) => {
    deleteServico(request.body).then(data => {        
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
