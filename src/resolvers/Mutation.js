const { uuid } = require('uuidv4');
const { UsersModel } = require('../models/users.model')
const { PostsModel } = require('../models/posts.model')

const Mutation = {
    createUser: async (parent, args, { mongodb }, info) => {
        const users = await mongodb.users({ name: "getUsers" })

        const nameTaken = users.some((user) => user.name === args.data.name);

        if (nameTaken) {
            throw new Error("name taken");
        }

        const user = {
            id: uuid(),
            ...args.data,
        };
        await UsersModel.create(user)

        return user;
    },

    updateUser: async (parent, { id, data }, { mongodb }, info) => {
        const users = await mongodb.users({ name: "getUsers" })
        const user = users.find((user) => user.id === id);

        if (!user) {
            throw new Error("User not found");
        }

        if (typeof data.name === "string") {
            user.name = data.name;
        }

        await UsersModel.findOneAndUpdate({ id: id }, user, { new: true });
        
        return user;
    },

    createPost: async (parent, args, { mongodb }, info) => {
        const users = await mongodb.users({ name: "getUsers" })

        const nameTaken = users.some((user) => user.id === args.data.author);

        if (!nameTaken) {
            throw new Error("User not found");
        }

        const post = {
            id: uuid(),
            ...args.data,
        };
        await PostsModel.create(post)

        return post;
    },
};

module.exports = Mutation;