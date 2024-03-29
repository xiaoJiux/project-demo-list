import Koa = require('koa');
import { bodyParser } from "@koa/bodyparser";
import router from "./router/index"
import { socketServer } from "./utils/socket";

const app = new Koa();

app.use( bodyParser() )
    .use( router.routes() )
    .use( router.middleware() )

app.listen( 3000, () => {
  socketServer()
      .on( "connection", ( socket ) => {
        socket.on( "join", ( data ) => {

          const roomID = "123456"
          socket.join( roomID )

          socket.to( roomID ).emit( "packet", {
            name: "admin",
            content: `${ data.name } has joined`,
          } );

          socket.on( "disconnect", () => {
          } )
        } )
      } )
} )