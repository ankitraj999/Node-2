const express=require('express');
const path=require('path')
const mongoose=require('mongoose')
let Employee=require('./modal/employee')
let bodyParser=require('body-parser')

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/mypugDB')
let db=mongoose.connection
db.once('open',function(){
    console.log('connection open')
});
//other way
<<<<<<< HEAD
// mongoose.connection.on('connected',function(){
//     console.log('connection open')
// });

=======
// mongoose.connection.once('open',function(){
//     console.log('connection open')
// });
>>>>>>> 1919c53ff6cba76c1472e5176d602c46e24ac065
const app=express();
//load view engine
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

<<<<<<< HEAD
=======
// var newitem=new Employee({
//     empid:4,
//     empname:'ali',
//     empdept:'It',
//     empsalary:900
// });

// newitem.save((err,item)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//        console.log('inserted');
//     }
// })
>>>>>>> 1919c53ff6cba76c1472e5176d602c46e24ac065

//posting the data
app.post('/emp/adddata',function(req,res){
    let emp=new Employee();
emp.empid=req.body.eid;
emp.empname=req.body.ename;
emp.empdept=req.body.edep;
emp.empsalary=req.body.esal;
emp.save(function(err){
if(err){
    console.log(err);
    return;
}else{
     res.redirect('/');
}
});

});

<<<<<<< HEAD
//deleting
app.get('/deleteemp/:id',function(req,res){
    let querry={_id:req.params.id};
    Employee.remove(querry,function(err){
        if(err){
            console.log(err)
            return
        }else{
            res.redirect('/');
        }
    })
})
//
app.get('/searchemp/:id',function(req,res){
    Employee.findById({_id: req.params.id},function(err,item){
        if(err){
            console.log(err)
        }else{
            
            res.render('update',{
                data:item
            })
            console.log(item)
        }
    })
})
//updating
app.post('/emp/update/:id',function(req,res){
    let emp={}
    emp.empid= req.body.eid,
    emp.empname=req.body.ename,
    emp.empdept= req.body.edep,
    emp.empsalary= req.body.esal
    let query={ _id: req.params.id }
    console.log(query)
    Employee.update(query, emp, function (err,result) {
           if (err) {console.log(err);}
        else {
        // res.json(result);
         
        res.redirect('/');
        
        }
        
        })

})

// getting data at '/' address
=======

>>>>>>> 1919c53ff6cba76c1472e5176d602c46e24ac065
app.get('/',function(req,res){
    Employee.find({},function(err,employeeData){
       res.render('index',{
           title:'This is capgemini R&D',
           empData:employeeData,
           emg:'L&D Department'
       })
    })    
})
<<<<<<< HEAD


//get data at route /add
=======
//route addemployee
>>>>>>> 1919c53ff6cba76c1472e5176d602c46e24ac065
app.get('/add',function(req,res){
    res.render('addEmployee',{
        data:'this is from home'
    });
});

<<<<<<< HEAD
//get data
//get data at route /add
app.get('/searchemp',function(req,res){
    res.render('update',{
        data:'this is from home'
    });
});


=======
>>>>>>> 1919c53ff6cba76c1472e5176d602c46e24ac065

//rout home
app.get('/home',function(req,res){
    res.render('home',{
        mydata:'this is from home'
    });
});

<<<<<<< HEAD

=======
>>>>>>> 1919c53ff6cba76c1472e5176d602c46e24ac065
//making the port
app.listen(1000,function(){
    console.log('server is running on 1000')
})