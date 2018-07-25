let config=null;


if (process.env.NODE_Env ==='depl'){
    config = require('./depl-config');
} else {
    config=require('./dev-config');
}


module.exports=config