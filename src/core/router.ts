import { Request, Response } from 'express';

/*
 * Router class for dynamic and static routing in api.
 * 
 *
 */
export default class Router {
    private _request: Request;
    private _response: Response;
    private _method: string;
    private _format: string;
    public url: Array<string>;
    public responseCode: {
        getCode: Function;
    };

    constructor() {
        this.responseCode = require('../services/responseCode.service');
    }

    /*
     *   gets array of controller/actions params
     */
    private _setUrl() {
        this.url = this._request.originalUrl.split('/');
    }

    /*
     *   setter for request obj
     */
    public setRequest(req) {
        this._request = req;
    }

    /*
     *  setter for response obj
     */
    public setResponse(res) {
        this._response = res;
    }

    /*
     *  gets controller name from request
     */
    private _getController() {
        return this.url[1];
    }

    /*
     *  gets action name from request
     */
    private _getAction() {
        return this.url[2];
    }

    /*
    * set request method
    */
    private _setRequestMethod() {
        this._method = this._request.method;
    }

    /*
    * capitalizes first leeter of the word
    */
    private _capitalizeLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    /*
    *   set format of the response to the client
    *   can be JSON, XML, HTML, plain text
    */
    private _setResponseFormat() {
        this._format = this.url[3] || '.txt';
    }

    private _init() {
        let self = this;
        this._setUrl();
        this._setRequestMethod();
        this._setResponseFormat();
    }

    /*
     *  inits dynamic router
     */
    public dynamicRouterInit() {
        this._init();
        let controllerName: string = this._getController();
        let actionName: string = this._getAction();
        let method: string = this._method.toLowerCase();
        let controller: any;

        if (controllerName) {
            controllerName = controllerName.toLowerCase();
        } else {
            controllerName = 'main';
        }

        if (actionName) {
            let lowerCaseAction = actionName.toLowerCase();
            actionName = method + this._capitalizeLetter(lowerCaseAction);
        } else {
            actionName = method + 'Main';
        }
        try {
            controller = require('../controllers/' + controllerName + '.controller.js');
            let controllerObj: mainController = new controller(
                this._request,
                this._response,
                this._format
            );

            if (!controllerObj[actionName]) {
                this._is404();
                return;
            }

            controllerObj[actionName]();
        } catch (err) {
            this._is404();
        }
    }

    /*
     * shows 404 page. 
     */
    private _is404() {
        let codeObj: {
            code: number;
            description: string;
        } = this.responseCode.getCode('404');
        this._response.status(codeObj.code);
        this._response.send(codeObj.description);
    }
}

module.exports = Router;
