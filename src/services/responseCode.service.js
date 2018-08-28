class ResponseCode {
    constructor() {
        this.codeList = {
            '100': { code: 100, description: 'Continue' },
            '101': { code: 101, description: 'Switching Protocol' },
            '102': { code: 102, description: 'Processing' },
            '200': { code: 200, description: 'OK' },
            '201': { code: 201, description: 'Created' },
            '202': { code: 202, description: 'Accepted' },
            '203': { code: 203, description: 'Non-Authoritative Information' },
            '204': { code: 204, description: 'No Content' },
            '205': { code: 205, description: 'Reset Content' },
            '206': { code: 206, description: 'Partial Content' },
            '300': { code: 300, description: 'Multiple Choice' },
            '301': { code: 301, description: 'Moved Permanently' },
            '302': { code: 302, description: 'Found' },
            '303': { code: 303, description: 'See Other' },
            '304': { code: 304, description: 'Not Modified' },
            '305': { code: 305, description: 'Use Proxy' },
            '306': { code: 306, description: 'Switch Proxy' },
            '307': { code: 307, description: 'Temporary Redirect' },
            '308': { code: 308, description: 'Permanent Redirect' },
            '400': { code: 400, description: 'Bad Request' },
            '401': { code: 401, description: 'Unauthorized' },
            '402': { code: 402, description: 'Payment Required' },
            '403': { code: 403, description: 'Forbidden' },
            '404': { code: 404, description: 'Not Found' },
            '405': { code: 405, description: 'Method Not Allowed' },
            '406': { code: 406, description: 'Not Acceptable' },
            '407': { code: 407, description: 'Proxy Authentication Required' },
            '408': { code: 408, description: 'Request Timeout' },
            '409': { code: 409, description: 'Conflict' },
            '410': { code: 410, description: 'Gone' },
            '411': { code: 411, description: 'Length Required' },
            '412': { code: 412, description: 'Precondition Failed' },
            '413': { code: 413, description: 'Request Entity Too Large' },
            '414': { code: 414, description: 'Request-URI Too Long' },
            '415': { code: 415, description: 'Unsupported Media Type' },
            '416': { code: 416, description: 'Requested Range Not Satisfiable' },
            '417': { code: 417, description: 'Expectation Failed' },
            '500': { code: 500, description: 'Internal Server Error' },
            '501': { code: 501, description: 'Not Implemented' },
            '502': { code: 502, description: 'Bad Gateway' },
            '503': { code: 503, description: 'Service Unavailable' },
            '504': { code: 504, description: 'Gateway Timeout' },
            '505': { code: 505, description: 'HTTP Version Not Supported' }
        };
    }

    static getCode(code) {
        return this.codeList[code];
    }
}
