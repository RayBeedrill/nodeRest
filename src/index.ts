import Router from './core/router';
import express from 'express';

let app = express();
let router = new Router();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.all('*', function(request, response) {
    router.setRequest(request);
    router.setResponse(response);
    router.dynamicRouterInit();
}).listen(3000, function() {
    console.log('watching port 3000');
});
