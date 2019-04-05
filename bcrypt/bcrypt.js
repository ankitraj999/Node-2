var bcrypt = require('bcrypt');



var hash =bcrypt.hashSync('ankit',bcrypt.genSaltSync(12));

console.log(hash);



var v=bcrypt.compareSync('ankit',hash);

console.log("returns " +v);

var v =bcrypt.compareSync('ankita',hash);

console.log("returns " +v);





//asynchro

bcrypt.hash('ankit',bcrypt.genSaltSync(10),function(err,hash){

    bcrypt.compare('ankit',hash,function(err,res){
    
    //should return true
    
    console.log('true');
    
    
    });
    
    });