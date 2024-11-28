export const CourseTypeDefs = `#graphql

    type Course {
        _id: ID!
        title: String!
        author:String!
        description: String!
        duration:String!
        tags:[String!]!
    }

    type Query {
        courses: [Course]
    }

    type Mutation {
        addCourse(title: String!, author:String!, description: String!, duration:String!, tags:[String!]!): Course
    }
`;
