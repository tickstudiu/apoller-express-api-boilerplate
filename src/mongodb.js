const { UsersModel } = require('./models/users.model')
const { PostsModel } = require('./models/posts.model')
const { CommentsModel } = require('./models/comments.model')

const user = async ({ id, name }) => {
    switch (name) {
        case "getUserById":
            return await UsersModel.findOne({ id: id }, { _id: 0 });
        default:
            return null
    }
}

const users = async ({ id, name }) => {
    switch (name) {
        case "getUsers":
            return await UsersModel.find();
        case "getUsersById":
            return await UsersModel.find({ id: { $regex: id } }, { _id: 0 });
        default:
            return null
    }
}

const post = async ({ id, name }) => {
    switch (name) {
        case "getPostById":
            return await PostsModel.findOne({ id: id }, { _id: 0 });
        default:
            return null
    }
}

const posts = async ({ id, author, name }) => {
    switch (name) {
        case "getPosts":
            return await PostsModel.find();
        case "getPostsById":
            return await PostsModel.find({ id: { $regex: id } }, { _id: 0 });
        case "getPostsByAuthor":
            return await PostsModel.find({ author: author }, { _id: 0 });
        default:
            return null
    }
}

const comments = async ({id, author,  name}) => {
    switch (name) {
        case "getComments":
            return await CommentsModel.find();
        case "getCommentsByPostId":
            return await CommentsModel.find({ postId: { $regex: id } }, { _id: 0 });
        case "getCommentsByAuthor":
            return await CommentsModel.find({ author: author }, { _id: 0 });
        default:
            return null
    }
}

const mongodb = {
    user,
    users,
    post,
    posts,
    comments
}

module.exports = mongodb