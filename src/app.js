require('dotenv/config')
const express = require("express")
const app = express();
const { ApolloServer } = require('apollo-server-express');
const expressPlayground = require("graphql-playground-middleware-express").default;
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Post = require('./resolvers/Post')
const mongoose = require("mongoose")
const mongodb = require("./mongodb")

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once("open", () => {
    app.emit('ready');
});

const server = new ApolloServer({
    typeDefs: require("./schema"),
    resolvers: {
        Query,
        Mutation,
        Post
    },
    context: { mongodb }
});
server.applyMiddleware({ app });

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

module.exports = {
    app
}