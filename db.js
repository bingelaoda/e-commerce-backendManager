let mongoose = require('mongoose');
let config = require('./config');

mongoose.connect(`mongodb://127.0.0.1/${config.DB}`);

let db = mongoose.connection;
db.on('error',(err)=>{
    console.log('连接错误')
})

db.once('open',()=>{
    console.log('连接成功')
})