const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String },
    body: { type: String },
    author: { type: String },
})
const ComentsModel = mongoose.model('comments', commentSchema)

module.exports = {
    ComentsModel
}