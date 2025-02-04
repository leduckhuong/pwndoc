const indexRouter = require('./routers/index.router');

function route(app){
    app.use('/', indexRouter);
}

module.exports = route;