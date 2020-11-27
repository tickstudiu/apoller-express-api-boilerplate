const Post = {
    author: async (parent, args, { mongodb }, info) => {
        return await mongodb.user({ name: "getUserById", id: parent.author })
    },

    comments: async (parent, args, { mongodb }, info) => {
        return await mongodb.comments({ name: "getCommentsByPostId", id: parent.id })
    },
};

module.exports = Post;