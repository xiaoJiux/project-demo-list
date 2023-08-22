import Router = require("@koa/router");

const router = new Router()

router.get( '/api/home', async ctx => {
  const getData = ctx.query
  console.log( getData )
  let data = []
  for ( let i = 1; i < 21; i++ ) {
    data.push( i )
  }
  ctx.body = { data }
} )

export default router