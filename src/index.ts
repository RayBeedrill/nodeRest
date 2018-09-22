let router = require('./core/router');
let express = require('express');

let app = express();
let dynamicRouter = new router();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.all('*', function(request, response) {
    dynamicRouter.setRequest(request);
    dynamicRouter.setResponse(response);
    dynamicRouter.dynamicRouterInit();
}).listen(3000, function() {
    console.log('watching port 3000');
});
