import { gql } from "apollo-server-express";

export const typeDefs = gql`
type Query {
    hello: String!
    notes: [Notes]
    user: [User]
    posts: [Post]
    getNoteByID(id: ID!) : Notes
}
type Notes {
    id: ID!
    owner: String
    title: String
    content: String
    category: String
}
type User {
    id: ID!
    username: String
    email: String
}
type Post {
    userId: String
    id: ID!
    title: String
    body: String
}
input NotesInput {
    content:String
}


type Mutation {
    createNote(owner: String!,title:String, category:String, content:String, category:String): Notes!
    updateNote(id: ID!, input:NotesInput):Notes
  }
`