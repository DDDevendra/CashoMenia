import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

import User from '../model/user.model.js'

//  user Controller 

export async function test(req,res){

    try{
        return res.status(201).send({ data:"Test Succesfull userController"});

    }catch(error){
        return res.status(501).send({error:"Test Failed "+error});
    }
}

export async function SingUp(req,res){

    try{

        const data = req.body;
        if(!data){
            return res.status(500).send({data:'Failed to Load data'});
        }

        const a = await User.findOne({userName:data.userName});
        const b = await User.findOne({userEmail:data.userEmail});

        if(a){
           return  res.status(500).send({data:' UserName In Use '});
        }

        if(b){
           return  res.status(500).send({data:"Email In Use"});
        }

        const newUser = new User({
            userName:data.userName,
            userEmail:data.userEmail,
            userPassword:data.userPassword
        })

        await newUser.save().then(()=>{
            return res.status(201).send({data:"SignUp Successfuly "});
        }).catch((error)=>{
            return res.status(501).send({data:"Failed To SingUp"});
        })


    }catch(error)
    {
        return res.status(502).send({data:"Failed to Signup "+error});
    }
}

export async function Login(req,res){

    try{
            const data = req.body;
            if(!data){
                return res.status(500).send({data:'Failed to Load data'});
            }

            const a = await User.findOne({userName:data.userName});

            if(!a){
                return res.status(500).send({data:" UserName Not Found "});
            }

            bcrypt.compare(data.userPassword,a.userPassword,(error,isMatch)=>{

                if(error){
                    return res.status(501).send({data:'Failed To Match Password '});
                }

                if(isMatch){

                    const token = jwt.sign({userEmail:a.userEmail},'secret123');
                    return res.status(201).send({ data:token });

                }else{
                    return res.status(500).send({data:"Wrong Password"});
                }

            })

            


    }catch(error){
        return res.send(501).send({data:"Failed To Login "});
    }
}