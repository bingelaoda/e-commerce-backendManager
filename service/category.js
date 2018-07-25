let category = require('../model/category');
let config = require('../config');


//添加分类
async function addCategory(cate) {

    return await category.create(cate);
}

//获取分类信息

async function getCategory(page=1) {
    let cat = await category.find().skip(config.pageCount*(page-1)).limit(config.pageCount).sort('created').select('-__V');

    return cat;
}
async function isExit(id) {
    return await category.findOne({_id:id});
}
//修改分类信息
async function updateCategory(id,update) {
    //通过id查看该分类是否存在
    console.log('id='+id)
    let isE = await isExit(id);

    if (!isE){
        throw Error(`${update}这个分类并不存在`)
    }

    let cate = await category.update({_id:id},{name:update});

    return cate;
}


async function deleteCategory(id) {
    let isE = await isExit(id);

    if (!isE){
        throw Error(`${id}这个分类并不存在`)
    }

    let cate = await category.deleteOne({_id:id});
    return cate;
}


module.exports={
    addCategory,
    getCategory,
    deleteCategory,
    updateCategory
}