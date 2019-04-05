const express=require('express')
const app=express();

//route method
app.get('/',function(req,res){
    res.send('This is root path');

});
app.get('/home',function(req,res){
    res.send('This is homepage');
   
});
//we will start
app.listen(1000,function(){
    console.log('server is running on port 1000')
});

