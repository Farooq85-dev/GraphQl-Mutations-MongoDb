import dotenv from "dotenv";
dotenv.config();
import connectDb from "./Config/Db";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import morgan from "morgan";
import cors from "cors";
import { TypeDefs } from "./TypeDefs";
import { enrollUser, getUsers } from "./Resolvers/user.resolver";
import { enrollCourse, getCourses } from "./Resolvers/course.resolver";

connectDb();

const gqlServer = new ApolloServer({
  typeDefs: [TypeDefs.UserTypeDefs, TypeDefs.CourseTypeDefs],
  resolvers: {
    Query: {
      users: getUsers,
      courses: getCourses,
    },
    Mutation: {
      addUser: enrollUser,
      addCourse: enrollCourse,
    },
  },
});

const expressServer = async () => {
  const app = express();
  const PORT: number = Number(process.env?.PORT) || 4005;
  const gqlPath: string = String(process.env?.GQL_PATH) || "/";
  app.use(express.json());
  app.use(express.urlencoded());
  await gqlServer.start();
  app.use(gqlPath, expressMiddleware(gqlServer));
  app.use(cors());
  app.use(morgan("dev"));

  app.listen(PORT, () => {
    try {
      console.log(
        `🚀 Server is Running at PORT:- http://localhost:${PORT}${gqlPath}`
      );
    } catch (error) {
      console.log(`Server Failed to Start`);
    }
  });
};

expressServer();
