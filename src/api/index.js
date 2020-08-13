const Router = require("koa-router");

const api = new Router();
const ivr = require("./ivr");

api.get("/test", (ctx) => {
    ctx.body = "test 성공";
});

api.use("/ivr", ivr.routes());

module.exports = api;
