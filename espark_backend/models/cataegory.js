const mongoose=require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
        maxlength:32,
        unique:true
    }
    
   
},{
    timsetamps:true
})

module.exports =mongoose.model("Category",categorySchema);