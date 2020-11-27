const User = {
    comments: async (parent, args, { mongodb }, info) => {
        return await mongodb.comments({ name: "getCommentsByAuthor", author: parent.id })
    },

    posts: async (parent, args, { mongodb }, info) => {
        return await mongodb.posts({ name: "getPostsByAuthor", author: parent.id })
    },
};

module.exports = User;