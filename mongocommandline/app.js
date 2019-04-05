var express=require('express')
var mongoDb=require('mongodb')
var mongoclient1=mongoDb.MongoClient;
var url="mongodb://localhost:27017/marchdb";
mongoclient1.connect(url,function(er,client){

    if(er){
        console.log(er)
    }else{  
            console.log("connected to the machdb "+url)
            var db=client.db('marchdb');
            var collection=db.collection('march');
            let user1= {

                "username":"Sachin","password":"Sachin",
                
                "email":"Sachin@gmail.com",
                
                "carts":[
                
                {"id":1,"name":"IPhone","cost":98989,"quantity":2},
                
                {"id":2,"name":"EarPhone","cost":9898,"quantity":2}
                
                ],
                
                "orders":[
                
                {"orderid":1000,"orderdate":"19-08-2018",
                
                status:"delivered"},
                
                {"orderid":1001,"orderdate":"29-08-2018",
                
                "status":"pending"}
                
                ],
                
                "orderItem":[
                
                {"orderItemId":10001,"name":"IPhone",
                
                cost:98989,"quantity":2,"orderid":1000},
                
                {"orderItemId":10002,"name":"EarPhone",
                
                cost:9898,"quantity":2,"orderid":1000},
                
                
                {"orderItemId":10003,"name":"Chair",
                
                cost:1000,"quantity":1,"orderid":1001},
                
                {"orderItemId":10004,"name":"Table",
                
                cost:2000,"quantity":1,"orderid":1001}
                
                
                ]
                
                }

            //inserting the value    
            collection.insert([user1],function(err,data){
                if(err)
                console.log(err);
                else
                {
                    console.log('number of rows inserted')
                }
            })

            collection.find({
                $and:[{'username':'Sachin'},{"password":'Sachin'}]}).toArray((err,docs)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        if(docs.length==0){
                            console.log('user doesnot exist')
                        }
                            else{
                            console.log('user exist')
                        }
                    }
                })
        


       
    }
    client.close()
})
