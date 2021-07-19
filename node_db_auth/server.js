var express = require('express');
var bodyparser = require('body-parser');
var routers = require('./router');
const db = require('./Model');
var app = express();
db.sequelize.sync();
app.use(bodyparser.urlencoded({extended:true}));

app.use('/',routers);
const port  = process.env.PORT || 3000;
app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is running on =>"+port);
    }
})