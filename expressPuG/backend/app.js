const express=require('express')
const path=require('path')

//nitialize the app object
const app=express()

//load the view
app.set('views',path.join(__dirname,"views"))
console.log(__dirname)
app.set('view engine','pug')


//defining the route
app.get('/',function(req,res){
    let emp=[{
        empid:1001,
        empName:'ankit',
        empDep:'IT',
        empSalary:4000

    },
    {
        empid:1005,
        empName:'ali',
        empDep:'sales',
        empSalary:4000

    }
];

res.render('index',{
    title:'this is my page',
    empData:emp
})
})


app.get('/home',function(req,res){

    res.render('home',{
        mydata:'this is my data for home',
        
    });

});

//defining the route
app.listen(5000,function(){
    console.log('server is started')
})
