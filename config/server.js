import { createServer, plugins } from 'restify';
const port      = 3000;
const server    = createServer();

server.use(plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams: false
}));

export default {server, port};
