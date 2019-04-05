// const fs=require('fs');
// fs.writeFile('input1.txt',"Hello data",function(er){
//     if(err)
//       console.log(err)
//     else    
//        console.log('write operation is completed');
// });
// var data=fs.readFile('input1.txt');
// console.log("synchronous reading.."+data);
// console.log('program end');


const fsobj=require('fs');
fsobj.readFile('input.txt',function(err,data){
 if(err){
   console.log("problem is reading the file");
 }else{
   console.log('reading');
   console.log(data.toString())
 }
})
console.log('program ended')
fsobj.writeFile('writeme.txt',function(){
 
 
})
