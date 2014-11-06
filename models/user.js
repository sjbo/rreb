var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: String,
    userPwd: String,
    userEmail: String,
    userSignup: Date,
    userRole: String,
    userAccountID: String
});


module.exports = mongoose.model('UserModel', UserSchema);
