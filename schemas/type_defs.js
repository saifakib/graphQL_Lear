const typeDefs = `
    scalar Date
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
        country: Country!
        friends: [User]
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        country: Country = BANGLADESH
    }

    input UpdateUserInput {
        id: Int!
        username: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUser(input: UpdateUserInput!): User!
        deleteUser(id: ID!): User!
    }
    
    enum Country {
        BANGLADESH
        INDIA
        AFRICA
        AUSTRILIA
        GERMANY
        CANADA
    }
`;

module.exports = { typeDefs };
