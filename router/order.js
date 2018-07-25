let orderRouter = require('express').Router();
let orderService = require('../service/order');

orderRouter.get('/',async (req,res)=>{
    let orders = await orderService.getOrder();
    res.success(orders);
})

orderRouter.post('/add',async (req,res)=>{
    let or = await orderService.addOrder(req.body);
    res.success(or);
})


module.exports=orderRouter;