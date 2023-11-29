import { createPool } from "mysql2/promise";
/*import {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
} from "./config.js"*/

export const pool = createPool({
    host:'170.249.204.162',
    port: 3306,
    user: 'niliusco_thomas',
    password: 'Gwenqwe123',
    database: 'niliusco_database'

});





