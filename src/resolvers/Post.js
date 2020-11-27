const Post = {
    author: async (parent, args, { mongodb }, info) => {
        return await mongodb.user({ name: "getUserById", id: parent.author })
    },
};

module.exports = Post;