const Comment = {
    author: async (parent, args, { mongodb }, info) => {
        return await mongodb.user({ name: "getUserById", id: parent.author })
    },

    post: async (parent, args, { mongodb }, info) => {
        return await mongodb.post({ name: "getPostById", id: parent.postId })
    },
};

module.exports = Comment;