const { gql } = require('apollo-server-express');
module.exports = gql`
    type Query {
        user(id: ID!): User!
        users(id: ID!): [User!]!
        post(id: ID!): Post!
        posts(id: ID!): [Post!]!
    }

    type Mutation {
        createUser(data: CreateUserInput!): User!
        updateUser(id: ID!, data: UpdateUserInput!): User!
        createPost(data: CreatePostInput!): Post!
        updatePost(id: ID!, data: UpdatePostInput!): Post!
        createComment(data: CreateCommentInput!): Comment!
        updateComment(id: ID!, data: UpdateCommentInput!): Comment!
    }

    input CreateUserInput {
        name: String!
    }

    input CreatePostInput {
        title: String!
        body: String
        author: String!
    }

    input CreateCommentInput {
        title: String!
        body: String
        postId: String!
        author: String!
    }

    input UpdateUserInput {
        name: String
    }

    input UpdatePostInput {
        title: String
        body: String
    }

    input UpdateCommentInput {
        title: String
        body: String
    }

    type User {
        id: ID!
        name: String!
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        title: String!
        author: User!
        comments: [Comment!]!
        body: String
    }

    type Comment {
        id: ID!
        post: Post!
        title: String!
        body: String
        author: User!
    }
`;