import config  from "../config/vars.js";
import mongoose from "mongoose";
async function connectToDb(){
    mongoose.connect(config.mongoUrl).then(()=>{
            console.log("conntected to db")
        }).catch((e)=>{
            console.log(e)
        })
}
export default connectToDb;