import mongoose from "mongoose"

const Schema = mongoose.Schema;

const VerifyAccountSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  code : {
    type: Number,
    required: true
  },
},{timestamps:true});



const VerifyAccountModel = mongoose.model('VerifyAccount',VerifyAccountSchema);

export default VerifyAccountModel
