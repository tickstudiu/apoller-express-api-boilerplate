const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String},
})
const UsersModel = mongoose.model('users', userSchema)

module.exports = {
    UsersModel
}