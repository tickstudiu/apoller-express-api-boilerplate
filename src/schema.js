const { gql } = require('apollo-server-express');
module.exports = gql`
    type Query {
        user(id: ID!): User!
        users(id: ID): [User!]!
        post(id: ID!): Post!
        posts(id: ID): [Post!]!
    }

    type Mutation {
        createUser(data: CreateUserInput!): User!
        updateUser(id: ID!, data: UpdateUserInput!): User!
        createPost(data: CreatePostInput!): Post!
        updatePost(id: ID!, data: UpdatePostInput!): Post!
    }

    input CreateUserInput {
        name: String!
    }

    input CreatePostInput {
        title: String!
        body: String
        author: String!
    }

    input UpdateUserInput {
        name: String
    }

    input UpdatePostInput {
        title: String
        body: String
    }

    type User {
        id: ID!
        name: String!
    }

    type Post {
        id: ID!
        title: String!
        author: User!
        body: String
    }
`;