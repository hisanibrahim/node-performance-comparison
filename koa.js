const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
 ctx.body = 'Hello';
})

app.use(router.routes());

app.listen(4400, () => {});
