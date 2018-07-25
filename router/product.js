let productService = require('../service/product');
let productRouter = require('express').Router();

productRouter.get("/", async (req, res)=>{
    let products = await productService.getProductsByPage(req.query.page)
    res.success(products)
});

productRouter.post('/', async (req, res)=>{
    res.success(await productService.addProduct(req.body))
});

productRouter.put('/:id', async (req, res)=>{
    await productService.updateProduct(req.params.id, req.body)
    res.success()
});

productRouter.delete('/:id', async (req, res)=>{
    await productService.deleteProduct(req.params.id)
    res.success()
});

module.exports = productRouter