let redis = require('redis');
let client = redis.createClient();


client.on('error',err=>{
    console.log('redis数据库连接错误')
})
