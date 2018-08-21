/*
 * Router class for dynamic and static routing in api.
 * 
 *
 */
class Router {
    constructor() {
        this._request;
        this._response;
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
     *  inits dynamic router
     */
    dynamicRouterInit() {
        this._setUrl();
        let controllerName = this._getController();
        let actionName = this._getAction();
        let controller;
        let action;

        if (controllerName) {
            controllerName = controllerName.toLowerCase();
        } else {
            controllerName = 'main';
        }

        if (actionName) {
            actionName = actionName.toLowerCase() + 'Action';
        } else {
            actionName = 'mainAction';
        }
        try {
            controller = require('../controllers/' + controllerName + 'Controller.js');
            controller = new controller();
            action = controller[actionName];

            if (!action) {
                this._is404();
                return;
            }
            action(this._request, this._response);
        } catch (err) {
            this._is404();
        }
    }

    /*
     * shows 404 page. 
     */
    _is404() {
        this._response.send('404');
    }
}

module.exports = Router;
