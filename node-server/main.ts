import Koa = require('koa');
import { bodyParser } from "@koa/bodyparser";
import router from "./router/index"

const app = new Koa();


app.use( bodyParser() )
    .use( router.routes() )
    .use( router.middleware() )

app.listen( 3000, () => {
  console.log( "server run 3000" )
} )