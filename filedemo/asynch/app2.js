 const fs=require('fs');


// //write in file
// let student=[{
//     name:'ankita raj',
//     age:5,
//     gender:'female'

// }]
// let data=JSON.stringify(student);
// fs.writeFile('student.json',data,(err)=>{
//     if(err)
//      throw err;
//     else
//       console.log('data write into the file')
// });


//appending in the file

let student2={
    name:'ali raj',
    age:9,
    gender:'male'

}

console.log('this is the end of the program')

//append
function appendJSON(filepath,obj){

    fs.readFile(filepath,(er,data)=>{
        if(er)
        throw er;
        else
        {   let read;
            read=JSON.parse(data);
            
            read.push(obj)
            
            read=JSON.stringify(read)
            fs.writeFile('student.json',read,(err)=>{
                if(err)
                 throw err;
                else
                  console.log('data appended into the file')
            });
        
        }
    })

}
appendJSON('student.json',student2);


//reading
fs.readFile('student.json',(err,data)=>{
    if(err)
     throw err;
    else
      console.log('data reading into the file')
      let result=JSON.parse(data);
      console.log(result);
});
