//conntecting to mongodb creating database and deleting record in node
var mongodb=require('mongodb')
var mongoclient1=mongodb.MongoClient;
var url="mongodb://localhost:27017/mobile";
mongoclient1.connect(url,function(err,client){
    if(err){
        console.log(err);
    }
    else{
        console.log("connection established "+url)
        var db=client.db('mobile');
        var collection=db.collection('mobile')
        var mobone={mobid:100,mobilename:"samsung",mobilecost:2000}
        var mobtwo={mobid:200,mobilename:"iphone",mobilecost:8000}
        var mobthree={mobid:300,mobilename:"nokia",mobilecost:8000}
        var mobfour={mobid:600,mobilename:"mi",mobilecost:8000}
        var myquery={mobid:300}
        var updatevalue={$set:{mobilename:"Raj"}}
        collection.updateMany(myquery,updatevalue,function(err,data){
            if(err)
            console.log(err);
            else
            {
                console.log('number of rows updated')
            }
        })
        client.close()
    }
})