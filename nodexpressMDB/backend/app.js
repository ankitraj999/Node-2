var express=require('express');
var cors=require('cors');
var mongoose=require('mongoose');
//var router=express.Router();
const route=require('./router/router');
var bodyparser = require('body-parser')
// router.get()
// router.post()
// router.delete()
mongoose.connect('mongodb://localhost:27017/databaseankit')
mongoose.connection.on('connected',()=>{
    console.log('mongodb connect on port no 27017')
});

var app= express();

app.get('/',(req,res)=>{
   res.send("hi ankit in root test");
   
})
//middle ware
app.use(express.json())
app.use(cors())
app.use(bodyparser.json())
app.use('/api',route);
const port=5000;
app.listen(port,function(){

    console.log("server started");
})