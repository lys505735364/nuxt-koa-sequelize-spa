const Koa = require('koa')
const consola = require('consola')
const bodyParser = require('koa-bodyparser');
const Router = require('./src/router');
// const templating = require('./utils/templating');
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // Console Log
  app.use(async (ctx, next) => {
    console.log(`[收到请求] ${ctx.request.method}: ${ctx.request.url} ......`);
    await next();
  });

  // Set request X-Response-Time:
  app.use(async (ctx, next) => {
    var start = new Date().getTime(),
      execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
  });


  app.use(async (ctx, next) => {
    if (ctx.request.url.split('/')[1] == 'web') {
      await next();
    } else {
      ctx.status = 200
      ctx.respond = false // Bypass Koa's built-in response handling
      ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      nuxt.render(ctx.req, ctx.res)
    }
  });

  // // parse request body:
  app.use(bodyParser());

  // // Add Router:
  app.use(Router());
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
