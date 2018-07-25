let categoryRouter = require('express').Router();
let categoryService = require('../service/category');

//获取类别信息
categoryRouter.get('/',async (req,res)=>{
   let cat =  await categoryService.getCategory();
   res.success(cat);
})

//添加类别
categoryRouter.post('/add',async (req,res)=>{
    let cat = await categoryService.addCategory(req.body);
    res.success(cat);
})

//修改类别
categoryRouter.post('/update',async (req,res)=>{
   let cat =  await categoryService.updateCategory(req.body.id,req.body.name);
    res.success(cat);
})


categoryRouter.delete('/delete/:id',async (req,res)=>{
    let cat = await categoryService.deleteCategory(req.params.id);
    res.success(cat)
})


module.exports = categoryRouter