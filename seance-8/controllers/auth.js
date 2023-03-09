import UserModel from "../models/User.js"
import VerifyAccountModel from '../models/verifyAccount.js'

import { SignUpValidation } from "../validation/auth.js"
import { sendEmail } from "../services/sendGrid.js"
import { generateCode } from '../utils/generateCode.js'
import { emailCode } from "../utils/email.js"
export async function login(req,res){
    res.json({login:true})
}


export async function signUp(req,res){
    // validation of the body
    try {
        let {value,error} =  SignUpValidation.validate(req.body)
        if(error){
            // if error respond with bad request
            return res.status(400).json({error : 'bad request verify the sent values'})
        }

        // validate uniqueness of the email
        let existingUser = await UserModel.findOne({email:value.email })
       
        if (existingUser){
            return res.status(400).json({message:'email already is used'})
        }

        let newUser =  UserModel({...value});
        //save the user
        await newUser.save()

        // generate the code
        let code = generateCode()
        await VerifyAccountModel({userId : newUser._id,code}).save()


        sendEmail({
            to : newUser.email,
            from : 'tkdsayed@gmail.com',
            subject : 'Verify your email',
            text : 'message ',
            html : emailCode(code)
        })
    
        res.status(201).json({message:"account created and email is sent"})
    }catch(e){
        console.log(e)
        res.json("error in server ")
    }
    
    //UserModel
}



export async function verifyAccount(req,res){

    // verify account
    let {code,userId }  = req.body
    let verifyAccount = await VerifyAccountModel.findOne({userId : userId})
    if(!verifyAccount){
        return res.status(400).json({message:'bad request'})
    }
    if (verifyAccount.code != code){
        return res.status(400).json({message:'Code error'})
    }
    const userVerified = await UserModel.findOneAndUpdate({_id : userId},{isVerifed:true})
    await verifyAccount.deleteOne()

    sendEmail({
        to : userVerified.email,
        from : 'tkdsayed@gmail.com',
        subject : 'your account has been verified',
        text : 'text',
        html : `<h1>Welcome ${userVerified.firstName} your account has beeen verified </h1>`
    })
    res.json({message:'Account verified'})
    
}
