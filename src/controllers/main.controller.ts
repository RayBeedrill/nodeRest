let controller = require('../core/controller');
let view = require('../core/view');

class mainController extends controller {
    View;
    ResponseCodes;
    constructor(req, res, format) {
        super(req, res, format);
        this.ResponseCodes = require('../services/responseCode.service');
    }
    getCars() {
        new view(this.format, '1321', this.ResponseCodes.getCode(200), this.response);
    }
}

module.exports = mainController;
