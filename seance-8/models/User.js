import mongoose from "mongoose"

const Schema = mongoose.Schema;

const User = new Schema({
  email : {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role : {
    type : String,
    default : 'USER',
    enum : ['ADMIN','USER','MANAGER']
  },
  isVerified : {
    type:Boolean,
    default : false
  }

},{timestamps:true});



const UserModel = mongoose.model('User',User);

export default UserModel
