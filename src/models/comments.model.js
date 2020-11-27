const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    id: { type: String },
    postId: { type: String },
    title: { type: String },
    body: { type: String },
    author: { type: String },
})
const CommentsModel = mongoose.model('comments', commentSchema)

module.exports = {
    CommentsModel
}