const { gql } = require('apollo-server-express');



const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    orders: [Order]
  }  

  type Order {
    _id: ID
    orderText: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    orders(username: String): [Order]
    order(_id: ID!): Order
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(thoughtText: String!): Order
  }
`;

module.exports = typeDefs;