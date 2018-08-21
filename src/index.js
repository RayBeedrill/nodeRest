let Router = require('./core/router');
let express = require('express');
let app = express();
let router = new Router();

app.all('*', function(request, response) {
    router.setRequest(request);
    router.setResponse(response);
    router.dynamicRouterInit();
}).listen(3000, function() {
    console.log('watching');
});
