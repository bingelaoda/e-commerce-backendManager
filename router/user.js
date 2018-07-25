let router = require('express').Router();
let userService = require('../service/user');
//获取用户信息
router.get('/:username',async (req,res)=>{
    let user = await userService.getInfo(req.params.username)
    res.success(user);

})

//用户注册
router.post('/register',async (req,res)=>{
    let user = await userService.register(req.body)
    res.success(user)
})

//用户登录
router.post('/login',async (req,res)=>{
    let token = await userService.login(req.body.username,req.body.password);
    res.success({
        token
    });
})

//删除用户
router.delete('/:username',async (req,res)=>{
    let user =  await userService.deleteUser(req.params.username);
    res.success(user)
})




module.exports=router;