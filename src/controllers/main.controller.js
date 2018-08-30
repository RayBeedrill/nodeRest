let Controller = require('../core/controller');
class mainController extends Controller {
    constructor(req, res, format) {
        super(req, res, format);
    }
    getCars() {
        this.response.send('getMain' + this.format);
    }
}

module.exports = mainController;
