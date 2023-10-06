const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    location :String,
    phoneno :String,
    password : String,
    age :Number
})
const UserModel = mongoose.model('User',UserSchema);
module.exports=UserModel;