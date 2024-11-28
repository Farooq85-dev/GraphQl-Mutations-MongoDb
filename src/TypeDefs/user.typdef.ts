export const UserTypeDefs = `#graphql

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        role: String
        courses: [ID!]
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!, role: String, courses: [ID!]): User
    }
`;
