const mysqlPool = require("./components/mysql");
const oracle = { oracle: "test" };
module.exports = {
    mysqlPool: mysqlPool,
    oraclePool: oracle,
};
