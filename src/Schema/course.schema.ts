import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    author: { type: String, required: true },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Course = model("Course", courseSchema);

export { Course };
