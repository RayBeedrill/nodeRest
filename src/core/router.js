let responseCodes = require('../services/responseCode.service');
/*
 * Router class for dynamic and static routing in api.
 * 
 *
 */
class Router {
    constructor() {
        this._request;
        this._response;
        this._method;
        this._format;
        this.url;
    }

    /*
     *   gets array of controller/actions params
     */
    _setUrl() {
        this.url = this._request.originalUrl.split('/');
    }

    /*
     *   setter for request obj
     */
    setRequest(req) {
        this._request = req;
    }

    /*
     *  setter for response obj
     */
    setResponse(res) {
        this._response = res;
    }

    /*
     *  gets controller name from request
     */
    _getController() {
        return this.url[1];
    }

    /*
     *  gets action name from request
     */
    _getAction() {
        return this.url[2];
    }

    /*
    * set request method
    */
    _setRequestMethod() {
        this._method = this._request.method;
    }

    /*
    * capitalizes first leeter of the word
    */
    _capitalizeLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    /*
    *   set format of the response to the client
    *   can be JSON, XML, HTML, plain text
    */
    _setResponseFormat() {
        this._format = this.url[3] || '.txt';
    }

    _init() {
        let self = this;
        this._setUrl();
        this._setRequestMethod();
        this._setResponseFormat();
    }

    /*
     *  inits dynamic router
     */
    dynamicRouterInit() {
        this._init();
        let controllerName = this._getController();
        let actionName = this._getAction();
        let method = this._method.toLowerCase();
        let controller;
        let action;

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
            controller = new controller(this._request, this._response, this._format);

            if (!controller[actionName]) {
                this._is404();
                return;
            }

            controller[actionName]();
        } catch (err) {
            this._is404();
        }
    }

    /*
     * shows 404 page. 
     */
    _is404() {
        let codeObj = responseCodes.getCode('404');
        this._response.status(codeObj.code);
        this._response.send(codeObj.description);
    }
}

module.exports = Router;
