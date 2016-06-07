const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  ctx.render('index', {
    title: 'Test Game'
  });
});

module.exports = router;

