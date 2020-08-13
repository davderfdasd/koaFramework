const { connect } = require("mysql2");
const mysql = require("../../models/components/mysql");

const mysqlPool = require("../../models").mysqlPool.poolList;

const mysqls = require("../../models").mysqlPool.poolList;

const selectDB = (aa, bb, cc) => {
    console.log(mysqls.length);
    for (i = 0; i < mysqls.length; i++) {
        console.log("11");
        return;
    }
};

module.exports = {
    selectDB: selectDB,
};
