import Koa = require("koa");
import { createServer } from "http";
import { Server } from "socket.io";

export const socketServer = () => {
  const app = new Koa();
  const httpServer = createServer( app.callback() );
  const io = new Server( httpServer, {
    /* options */
    cors: {
      // 允许跨域
      origin: "*",
      methods: [ "GET", "POST" ],
    },
    cookie: true,
  } );

  httpServer.listen( 3001, () => {
    console.log( 3001 )
  } );
  return io;
} 