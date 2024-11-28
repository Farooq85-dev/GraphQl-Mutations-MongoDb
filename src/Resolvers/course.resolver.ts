import { Course } from "../Schema/course.schema";

export type CourseType = {
  tttle: string;
  description: string;
  duration: string;
  tags: string;
};

const enrollCourse = async (_: any, args: CourseType) => {
  try {
    const course = await Course.create(args);
    return course;
  } catch (error) {
    if (!error) console.error("Error adding Course:", error);
    throw new Error("Failed to add course");
  }
};

const getCourses = async () => {
  try {
    const courses = await Course.find();
    return courses;
  } catch (error) {
    if (!error) console.error("Error in fetching Courses:", error);
    throw new Error("Failed in fetching courses");
  }
};

export { enrollCourse, getCourses };
