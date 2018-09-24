import { Response } from 'express';
class View {
    format: string;
    data: Object;
    codeObj: {
        code: number;
        description: string;
    };
    response: Response;
    constructor(format, data, codeObj, resp) {
        this.format = format;
        this.data = data;
        this.codeObj = codeObj;
        this.response = resp;
        this.formatData().sendResponse(this.codeObj, this.data);
    }

    formatData() {
        switch (this.format) {
            case '.json':
                this.data = this.toJSON();
                break;
            case '.xml':
                this.data = this.toXML();
                break;
            case '.html':
                this.data = this.toHTML();
                break;
            case '.txt':
                this.data = this.toText();
                break;
        }
        return this;
    }
    toJSON() {
        return JSON.stringify(this.data);
    }
    //todo
    toXML() {
        return this.data.toString();
    }
    toHTML() {
        return [
            '<html>',
            '<head>',
            '</head>',
            '<body>',
            this.data.toString(),
            '</body>',
            '</html>'
        ].toString();
    }
    toText() {
        return this.data.toString();
    }

    sendResponse(codeObj, sendData) {
        this.response.status(codeObj.code);
        if (codeObj.code == '200') {
            this.response.send(sendData);
            return;
        }
        this.response.send(codeObj.description);
    }
}

module.exports = View;
