let mongoose=require('mongoose')
let EmployeeSchema=mongoose.Schema(
    {
        empid:{
            type:Number,
            required:true
        },
        empname:{
            type:String,
            required:true
        },
        empdept:{
            type:String,
            required:true
        },
        empsalary:{
            type:Number,
            require:true
        }
    }
)
module.exports=mongoose.model('Employee',EmployeeSchema)