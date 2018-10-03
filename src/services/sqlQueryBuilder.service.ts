import * as knex from 'knex';

try {
    require('dotenv').config();
} catch (error) {
    console.log('dotenv is missing');
}

class SqlQueryBuilder {
    protected dbType: string;
    protected dbHost: string;
    protected dbName: string;
    protected dbPassword: string;
    protected sqlitePath: string;
    protected dbLogin: string;
    protected knex: Function;
    public connectionObj: knex;

    constructor() {
        this.getParamsFormENV();
    }

    protected getParamsFormENV(): void {
        this.dbType = process.env.DB_TYPE;
        this.dbHost = process.env.DB_HOST;
        this.dbName = process.env.DB_NAME;
        this.dbPassword = process.env.DB_PASS;
        this.sqlitePath = process.env.SQLITE_PATH;
        this.dbLogin = process.env.DB_LOGIN;
        this.knex = require('knex');
    }

    protected checkDbType(): void {
        switch (this.dbType) {
            case 'MYSQL':
                this.connectToMysql();
                break;
            case 'POSTGRESQL':
                this.connectToPostgreSql();
                break;
            case 'SQLITE':
                this.connectToSqlite();
                break;
        }
    }

    protected connectToMysql(): void {
        this.connectionObj = this.knex({
            client: 'mysql',
            connection: {
                host: this.dbHost,
                user: this.dbLogin,
                password: this.dbPassword,
                database: this.dbName
            }
        });
    }

    protected connectToPostgreSql(): void {
        this.connectionObj = this.knex({
            client: 'pg',
            connection: {
                host: this.dbHost,
                user: this.dbLogin,
                password: this.dbPassword,
                database: this.dbName
            }
        });
    }

    protected connectToSqlite(): void {
        this.connectionObj = this.knex({
            client: 'sqlite3',
            connection: {
                filename: this.sqlitePath
            }
        });
    }
}

module.exports = SqlQueryBuilder;
