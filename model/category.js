const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,'分类名称不能为空']
    },

    created:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('categorys',schema);
