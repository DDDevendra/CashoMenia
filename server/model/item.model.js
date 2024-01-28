import mongoose from "mongoose";
import User from '../model/user.model.js'

const  itemSchema = new mongoose.Schema({

        Name:{
            type:String,
            require:[true," Name Reqired "]
        },

        Id:{
            type:String,
            uniqe:[true," Id in Use"],
            require:[true," Id reqire "]
        },

        Image:{
            type:String
        },

        Cost:{
            type:Number,
            default:0,
        },

        Info:{
            type:String
        },

        Owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:User
        },

        DOM:{
            type:Date
        }
})

export default mongoose.model('Item',itemSchema);