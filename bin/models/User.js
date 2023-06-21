 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const userSchema = new Schema({
    nickname: String,
    password: String,
    email: String,
    name: String,
    last_name: String,
    type_user: String,
 });

 var User = mongoose.model('User', userSchema);
 module.exports = User;