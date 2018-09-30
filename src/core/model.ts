try {
    require('dotenv').config();
} catch (error) {
    console.log('dotenv is missing');
}

class Model {
    protected dbType: string;
    protected dbHost: string;
    protected dbName: string;
    protected dbPassword: string;
    protected sqlitePath: string;
    protected dbLogin: string;
    protected connectionObj: Object;

    constructor() {
        this.getParamsFormENV();
    }

    protected getParamsFormENV() {
        this.dbType = process.env.DB_TYPE;
        this.dbHost = process.env.DB_HOST;
        this.dbName = process.env.DB_NAME;
        this.dbPassword = process.env.DB_PASS;
        this.sqlitePath = process.env.SQLITE_PATH;
        this.dbLogin = process.env.DB_LOGIN;
    }

    protected checkDbType() {}

    protected connectToMysql() {}

    protected connectToPostgreSql() {}

    protected connectToSqlite() {}
}

module.exports = Model;
