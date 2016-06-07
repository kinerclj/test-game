const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  ctx.body = 'Test Game';
});

module.exports = router;

