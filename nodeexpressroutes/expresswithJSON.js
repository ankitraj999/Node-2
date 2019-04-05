const express=require('express')
var app=express()
app.use(express.json());
var courses=[
    {id:1,"name":"ankit"},
    {id:2,"name":"aali"}
];
app.get('/',function(req,res){
    res.send('root path');
});

//home path url
app.get('/home',function(req,res){
    res.send('home path');
});

//get all courses
app.get('/courses',function(req,res){
    res.send(courses);
});

//get one courses
app.get('/courses/:id',function(req,res){
    var flag=0
    for(let i=0;i<courses.length;i++){
        if(courses[i].id==req.params.id){
            res.send(courses[i]);
            flag=1;
        }
    }
    if(flag==0){
        res.send("course with given id doesnot exist") 
    }
   
});

//posting data in json file
app.post('/courses',(req,res)=>{
    if(!req.body.name || req.body.name.length<3)
    {
        res.status(400).send('Name is required and should be minimum 3 char');
        return;
    }
    const course={
    id: courses.length+1,
    name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//delete
app.delete('/courses/:id',(req,res)=>{
    for(let i=0;i<courses.length;i++){
        if(courses[i].id==req.params.id){
            courses.splice(i,1,);
            res.send(courses);
        }
    }
           
});
//update
// app.update('/courses/:id',(req,res)=>{
//     for(let i=0;i<courses.length;i++){
//         if(courses[i].id==req.params.id){
//             courses.splice(i,1,);
//             res.send(courses);
//         }
//     }
           
// });
app.put('/courses/:id',(req,res)=>{
    if(!req.body.name || req.body.name.length<3)
    {
        res.status(400).send('Name is required and should be minimum 3 char');
        return;
    }
    const course={
    id: courses.length,
    name: req.body.name
    };
    for(let i=0;i<courses.length;i++){
                 if(courses[i].id==req.params.id){
                     courses[i]=course;
                    res.send(courses);
                 }
                }  
});






//defining port dinamically
const port=process.env.PORT||3500;
app.listen(port,function()
{
    console.log(`server is listening the port ${port}`)
});