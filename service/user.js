/**
 * 要实现的功能包含注册，登录，获取用户信息，以及删除用户等
 */
let User = require('../model/user');
let crypto = require('lxj-crypto');
let config = require('../config');

// 注册 user: { username: xxx, password: xx, age: 11, role: 100}
async function register(user) {

   //首选判断这个用户名是否存在
   await isExist(user.username);
   user.password=crypto.sha1Hmac(user.password,user.username);
   user.role=0;

   let res =  await User.create(user)
   return res;
}

async function isExist(username){

  let user = await User.findOne({username:username}).select('-__v')
   if (user){
      throw Error `${username} 这个用户已经存在`
   }

   return true
}


async function getInfo(username){
       let user = await User.findOne({username:username}).select('-__v')
      if (!user){
          throw Error(`没有${username}这个用户的信息`)
      }
       return user;
}

async function deleteUser(username){
    let user = await User.findOne({username:username})
    if (!user){
        throw Error(`没有${username}这个用户的信息`)
    }
    await User.deleteOne({username:username});

}

async function login(username,password){
   //1 对密码进行加密
   password =  crypto.sha1Hmac(password,username);
   console.log(password)
   //2 判断用户是否存在
   let res =  await User.findOne({username:username,password:password});

   if (!res){
      throw Error('用户名或者密码错误');
   } else {
   //3 给用户生成一个token
   let token={
      username:username,
       expires:Date.now() +config.expiresTime
   }

   let tokenv = crypto.aesEncrypt(JSON.stringify(token),username);

   return tokenv;
   }
}

module.exports={
   register,
   deleteUser,
    getInfo,
    login
}
