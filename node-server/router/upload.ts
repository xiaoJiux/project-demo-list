import Router = require("@koa/router");

const multer = require( '@koa/multer' );

const router = new Router()


const upload = multer(); // note you can pass `multer` options here
router.post(
    '/upload-multiple-files',
    upload.fields( [
      {
        name: 'avatar',
        maxCount: 1
      },
      {
        name: 'boop',
        maxCount: 2
      }
    ] ),
    ctx => {
      console.log( 'ctx.request.files', ctx.request );
      console.log( 'ctx.files', ctx.files );
      console.log( 'ctx.request.body', ctx.request );
      ctx.body = 'done';
    }
);

// add a route for uploading single files
router.post(
    '/upload-single-file',
    upload.single( 'avatar' ),
    ctx => {
      console.log( 'ctx.request.file', ctx.request );
      console.log( 'ctx.file', ctx.file );
      console.log( 'ctx.request.body', ctx.request );
      ctx.body = 'done';
    }
);

module.exports = router.middleware()