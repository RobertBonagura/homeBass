const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "supersecretpassword",
    host: "localhost",
    port: 5432,
    database: "homebass"
});

module.exports = pool; 