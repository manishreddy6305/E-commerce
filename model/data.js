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
    favourite:{
        type:String
    }
},{timestamps: true});
module.exports= mongoose.model('Devicedetails',userSchema);;


