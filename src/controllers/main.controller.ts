let controller: any = require('../core/controller');
let view: any = require('../core/view');

class mainController extends controller {
    public ResponseCodes: {
        getCode: Function;
    };
    constructor(req, res, format) {
        super(req, res, format);
        this.ResponseCodes = require('../services/responseCode.service');
    }
    public getCars() {
        new view(this.format, 'test', this.ResponseCodes.getCode(200), this.response);
    }
}

module.exports = mainController;
