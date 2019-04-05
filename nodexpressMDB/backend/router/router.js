var express=require('express');
var router=express.Router();
router.get('/',(req,res)=>{
    res.send('hello form different route path')
});

var app=express()

const item=require('../modal/items');
router.post('/item',(req,res,next)=>{
    var newitem=new item({
        itemname:req.body.itemname,
        itemquantity:req.body.itemquantity,
        itembought:req.body.itembought,
    });
    newitem.save((err,item)=>{
        if(err)
        {
            res.json(err)
        }
        else{
            res.json({msg:'inserted'});
        }
    })
});
//get item
router.get('/item',(req,res)=>{
    item.find({},(err,items)=>{
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(items);
        }
    })
})
//get item by Id
router.get('/item/:id',(req,res)=>{
    item.findById({_id:req.params.id},(err,items)=>{
        if(err)
        {
            res.json(err)
        }
        else{
           // console.log(items)
            res.json(items);
        }
    })
})



// deleting item
// router.delete('item/:name', (req, res,next)=> {
//     item.remove({ "itemname":req.params.name }, function (err, results) {
//         if(err){
//             res.send("error in deleting")
//         }
//         else{
//             res.json(results);
//         }
//     });
// })



router.delete('/item/:id', (req,res, next)=> {
    //deleting data
    
    item.remove({_id: req.params.id }, function (err,result) {
    if (err) {
    
    res.json(err);
    
    }
    
    else {
    
    res.json(result);
    
    }
    
    });
    
    });



  //updating Item

  router.put('/item/:id', (req,res, next)=> {
    //updating data
    
    item.findOneAndUpdate({ _id: req.params.id }, {
    
    $set: {itemname:  req.body.itemname,
    itemquantity:  req.body.itemquantity,
    itembought:  req.body.itembought
    }}, function (err,result) {
       if (err) {res.json(err);}
    else {
    // res.json(result);
    res.json({
    msg: 
    'Item has been updated successfully' })
    
    }
    
    })
    
    });
    
  
module.exports=router;
