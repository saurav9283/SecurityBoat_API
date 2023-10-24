import mongoose from 'mongoose'
const productSchma=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    }
})

export const productModel=mongoose.model('products',productSchma)