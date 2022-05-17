const pg = require("pg");

const dbSettings = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root',
    port: 5432,
    // ssl: {
    //     rejectUnauthorized: false
    // }
}


const Pool = pg.Pool;
const pool = new Pool(dbSettings);

module.exports = pool;