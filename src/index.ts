import Router from './core/router';
import { Request, Response } from 'express';

try {
    require('dotenv').config();
} catch (error) {
    console.log('dotenv is missing');
}

let router: any = require('./core/router');
let express: any = require('express');

let app: any = express();
let dynamicRouter: Router = new router();

app.use((req: Request, res: Response, next: Function) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use((req: Request, res: Response, next: Function) => {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({ nope: true });
    } else {
        next();
    }
});

app.all('*', function(request: Request, response: Response) {
    dynamicRouter.setRequest(request);
    dynamicRouter.setResponse(response);
    dynamicRouter.dynamicRouterInit();
}).listen(process.env.PORT, function() {
    console.log('watching port:' + process.env.PORT);
});
