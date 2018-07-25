let express = require('express');
let app = express();
require('./db');
//使用异步调用错误,在最前面使用
require('express-async-errors');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let config = require('./config');
let categoryRouter = require('./router/category');
let productRouter = require('./router/product')

let userRouter = require('./router/user');
let orderRouter = require('./router/order');

//注册日志中间件
app.use(morgan('combined'))

//注册body-parser
app.use(bodyParser.json());
//注册返回信息中间件
app.use(require('./middleware/res-md'))
//注册路由中间件
app.use('/user',userRouter);
app.use('/category',categoryRouter);
app.use('/product',productRouter)
app.use('/order',orderRouter);
app.use((err,req,res,next)=>{
    res.fails(err.toString())
})


app.listen(config.PORT)