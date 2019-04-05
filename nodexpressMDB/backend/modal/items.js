const mongoose=require('mongoose')
const itemschema=mongoose.Schema(
    {   
        itemname:{
            type:String,
            required:false
        },itemquantity:{
            type:Number,
            require:false
        },itembought:{
            type:Boolean,
            require:false
        },
    }
);

module.exports=mongoose.model("items",itemschema)