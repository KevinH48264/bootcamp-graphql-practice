const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    authors: [Author!]
    books: [Book!]
    publishers: [Publisher!]
    addresses: [Address!]
    book(bookId: ID!): Book!
    publisher(publisherId: ID!): Publisher!
  }

  type Mutation {
    createAuthor(input: CreateAuthorInput!): Author!
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: Address
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestseller: Boolean
    author: Author!
    publisher: Publisher!
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    address: Address!
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: Int!
  }

  input CreateAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: AddressInput
  }

  input AddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }
`
