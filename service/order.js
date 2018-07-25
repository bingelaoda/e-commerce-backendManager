let Order = require('../model/order');
let product = require('./product');
//添加订单
//{id,count}
async function addOrder(order) {
    //首先判断订单的类别是否存在

    let p = await product.getProductById(order.productId);
    if (!p){
        throw Error(`id为${order.id}的商品不存在`)
    } else {
        //判断要购买的数量是否超过库存
        if (order.count>p.stock) {
            throw Error('该商品库存不足')
        }else {
            order.productName=p.name;
            order.productPrice=p.price;
            order.totalPrice = order.productPrice*order.count;

            let ord =  await Order.create(order);
            product.updateProduct(order.productId,{stock:p.stock-order.count})

           return ord;
        }

    }
}

async function getOrder(){
    let orders = await Order.find();
    return orders;
}



module.exports={
    addOrder,
    getOrder
}