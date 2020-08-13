"use strict";

const mysql = require("mysql2/promise");
const config = require("../../config").mysql;
// const config = require("../configure/config");
// const logger = require('../logger/logger');
// const errorCode = require("../configure/errorCode");

//mysqlConfig 돌면서 커넥션 풀을 배열로 만듬.
//poolList에는 커넥션들이 들어있음
let poolList = [];
config.MysqlConfig.map((eachServer) => {
    const pool = mysql.createPool(eachServer);
    poolList.push(pool);
});

//커넥션 풀 확인
const check_db = () => {
    poolList.map(async (eachPool) => {
        let connection;
        try {
            connection = await eachPool.getConnection(async (conn) => conn);
        } catch (err) {
            console.log("Mysql1 : ", "error");
        }
        if (connection) {
            connection.release();
            console.log("ok =>");
        }
    });
};
check_db();

module.exports = {
    poolList: poolList,
};
