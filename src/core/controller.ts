class Controller {
    request;
    response;
    format;
    constructor(req, res, format) {
        this.request = req;
        this.response = res;
        this.format = format;
    }
}

module.exports = Controller;
