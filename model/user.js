const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "用户名不能为空"]
    },
    password: {
        type: String,
        required: [true, "密码不能为空"]
    },
    age: {
        type: Number,
        min: [0, "年龄不能小于0"],
        max: [120, "年龄不能超过120"],
        default: 10
    },
    role: {
        type: Number,
        default: 0  // 0 表示商家用户， 100表示超级管理员
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('users', schema)