const Query = {
    user: async (parent, { id }, { mongodb }, info) => {
        const user = await mongodb.user({ name: "getUserById", id })

        if(!user)  throw new Error("no user using id", id);

        return user
    },

    users: async (parent, { id }, { mongodb }, info) => {
        const users = await mongodb.users({ name: "getUsersById", id })

        if(!users)  throw new Error("no user using id like", id);

        return users
    },

    post: async (parent, { id }, { mongodb }, info) => {
        const post = await mongodb.post({ name: "getPostById", id })

        if(!post)  throw new Error("no post using id", id);

        return post
    }
};

module.exports = Query;