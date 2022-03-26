const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be empty.']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be empty.']
    }
})

//.statics is where we can define multiple methods that will be added to the User class itself, to the Model, not to particular instances of User.  
userSchema.statics.findAndValidate = async function(username, password) {
    const foundUser = await this.findOne({ username: username }); //this refers to the particular model/schema which is User
    const isValidUser = await bcrypt.compare(password, foundUser.password);
    return isValidUser ? foundUser : false; //If isValidUser is true, return the foundUser object, otherwise return false.
    // if (!isValidUser) {
    //     return isValidUser;
    // }
    // return foundUser;
}

//.pre('save') means to run function before saving to DB
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12); 
    next();
})

module.exports = mongoose.model('User', userSchema);