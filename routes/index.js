const router = require('koa-router')();

router.get('/', async (ctx, next) => {

  console.log(ctx.path);

  ctx.render('index', {
    title: 'Test Game',
  });
});

module.exports = router;

