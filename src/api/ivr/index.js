const Router = require("koa-router");
const ivrCtrl = require("./ivr.ctrl");

const ivr = new Router();

const printInfo = (ctx) => {
    // ctx.body = {
    //     method: ctx.method,
    //     path: ctx.path,
    //     params: ctx.params,
    // };
    ctx.body = ctx;
};

ivr.post("/req_auth", ivrCtrl.req_auth);
ivr.post("/req_cdr", ivrCtrl.req_cdr);
ivr.post("/req_popup", ivrCtrl.req_popup);

module.exports = ivr;
