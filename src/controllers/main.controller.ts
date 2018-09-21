let View = require('../core/view');
let responseCodes = require('../services/responseCode.service');
let Controller = require('../core/controller');

class mainController extends Controller {
    constructor(req, res, format) {
        super(req, res, format);
    }
    getCars() {
        new View(this.format, 'sdasdasd', responseCodes.getCode(200), this.response);
    }
}

module.exports = mainController;
