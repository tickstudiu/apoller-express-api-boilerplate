const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String },
    body: { type: String },
    author: { type: String },
})
const PostsModel = mongoose.model('posts', postSchema)

module.exports = {
    PostsModel
}