import { User } from "../Schema/user.schema";

export type UserType = {
  name: string;
  email: string;
  password: string;
  role?: string;
  courses?: string[];
};

const enrollUser = async (_: any, args: UserType) => {
  try {
    const user = await User.create(args);
    return user;
  } catch (error) {
    if (!error) console.error("Error enrolling user:", error);
    throw new Error("Failed to enroll user");
  }
};

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    if (!error) console.error("Error in fetching users:", error);
    throw new Error("Failed to fetching usesr");
  }
};

export { enrollUser, getUsers };
