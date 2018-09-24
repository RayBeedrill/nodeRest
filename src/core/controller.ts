import { Request, Response } from 'express';
class Controller {
    public request: Request;
    public response: Response;
    public format: string;
    constructor(req, res, format) {
        this.request = req;
        this.response = res;
        this.format = format;
    }
}

module.exports = Controller;
