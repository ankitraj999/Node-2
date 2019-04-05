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
        collection.find({},function(err,data){
            if(err)
            console.log(err);
            else
            {
                console.log('number of rows deleted')
            }
        })
        client.close()
    }
})