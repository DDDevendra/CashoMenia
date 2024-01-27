import mongose from "mongoose"
import bcrypt from 'bcrypt'

const userSchema = new mongose.Schema({
    
    userName:{
        type:String,
        unique:[true,"UserName in Use "],
        require:[true,"Enter UserName"]
    },

    userEmail:{
        type:String,
        unique:[true,"Email in Use "],
        require:[true,"Enter Email"]
    },

    userPassword:{
        type:String
    },

    userAmount:{
        type: Number,
        default: 0,
    },

})


userSchema.pre('save',  async function (next){

    if(!this.isModified('userPassword')){
        return next();
    }

    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.userPassword, salt);
        this.userPassword = hashPassword;
        next();

    }catch(error){
       console.log('Failed to HashPassword !'+error);
    }


})


export default mongose.model('User',userSchema);