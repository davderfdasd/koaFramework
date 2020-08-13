"use strict";

// /etc/mysql/mysql.conf.d  encoding 변경
const use_DB = [1, 2];
const DB_info = [
    {
        db_num: 1,
        config: {
            host: "",
            user: "",
            password: "",
            port: 3306,
            database: "",
            connectionLimit: 1,
        },
    },
    {
        db_num: 2,
        config: {
            host: "",
            user: "",
            password: "",
            port: 3306,
            database: "",
            connectionLimit: 1,
        },
    },
];

let MysqlConfig = [];

use_DB.map((dbnum) => {
    DB_info.map((db) => {
        if (db.db_num == dbnum) {
            MysqlConfig.push(db.config);
        }
    });
});

module.exports = {
    MysqlConfig: MysqlConfig,
    use_DB: use_DB,
};
