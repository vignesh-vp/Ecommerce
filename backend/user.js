
const mongoose = require ('mongoose')
const UserSchema = new mongoose.Schema ( {
name: String,
email: String,
password:Number
})
const UserModel = mongoose.model("userdetails", UserSchema)


module.exports=UserModel;

