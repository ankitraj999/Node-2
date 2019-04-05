const fs=require('fs');
fs.writeFileSync('input1.txt',"Hello data",function(){
    if(err)
      console.log(err)
    else    
       console.log('write operation is completed');
});
var data=fs.readFileSync('input.txt');
console.log("synchronous reading.."+data.toString());
console.log('program end');
