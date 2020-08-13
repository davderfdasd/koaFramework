const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const test = require("./models");

const api = require("./api");

const app = new Koa();
const router = new Router();

//라우터 설정
router.use("/api", api.routes());

app.use(bodyParser());
//app인스턴스에 라이터 적용
app.use(router.routes()).use(router.allowedMethods());

// app.use((ctx) => {
//     ctx.body = "hello world";
// });
app.listen(4000, () => {
    console.log("Listening to port 4000");
});
