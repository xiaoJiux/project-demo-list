import Router = require("@koa/router");

const router = new Router()
const userRouter = require( "./user/index" );
const uploadRouter = require( "./upload" );
router.use( "/api", ...[ userRouter, uploadRouter ] )

export default router