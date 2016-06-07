const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const serve = require('koa-static');

const index = require('./routes/index');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));

app.use(convert(serve(__dirname + '/public')));

app.use(convert(views('views', {
  root: __dirname + '/views',
  default: 'jade'
})));

app.use(co.wrap(function *(ctx, next) {
  ctx.render = co.wrap(ctx.render);
  yield next();
}));

app.use(co.wrap(function *(ctx, next) {
  const start = new Date;
  yield next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}));

router.use('/', index.routes(), index.allowedMethods());

app.use(router.routes(), router.allowedMethods());

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});


module.exports = app;
