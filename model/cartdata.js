const mongoose=require ('mongoose');
const Schema =mongoose.Schema;
const userSchema =new Schema({
    imgurl:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:String
    },
    category:{
        type:String
    },
    qty:{
        type:Number
    }
},{timestamps: true});
module.exports=mongoose.model('cartdetails',userSchema);