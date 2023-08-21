## Koa中间件



#### koa-body

```tsx
#安装 npm i @koa/bodyparser --save

const Koa = require('koa');
const { bodyParser } = require("@koa/bodyparser");


const app = new Koa();

app.use(bodyParser());
app.use((ctx) => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});

app.listen(3000);

//同koa-router使用
router.post('/users', koaBody(), (ctx) => {
  console.log(ctx.request.body);
  // => POST body
  ctx.body = JSON.stringify(ctx.request.body);
});
```



#### koa-router

```js
const Router = require ("koa-router")
const router = new Router ()

router.get ('/', ctx => {
    console.log (ctx.query)
    ctx.body = '6'//返回参数
})
router.post('/post',ctx =>{
    //参考上面
})

app
    .use (router.routes ())
    .use (router.allowedMethods ());
```



#### koa-static

#### @koa/multer
